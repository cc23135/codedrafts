// Configurando o prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Configurando o express para usar o protocólo http
const express = require('express')
const app = express()

const route = require('./routes/route')

// Decode e uncode de json para objeto e objeto para json
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', route)

// Node escuta requisições da porta 3000
app.listen(3000, () =>{
    console.log("Servidor Projeto Node com SQLServer")
})

var path = require('path');
app.use(express.static(path.join(__dirname, '../public')));

// COLOCAR ARQUIVOS HTML
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'));
})
app.get("/app.html", function(req, res){
    res.sendFile(path.join(__dirname, '../app.html'));
})
app.get("/configurations.html", function(req, res){
    res.sendFile(path.join(__dirname, '../configurations.html'));
})
app.get("/user.html", function(req, res){
    res.sendFile(path.join(__dirname, '../user.html'));
})

// APP

// VERIFICAR LOGIN USUÁRIO
app.post("/verificarUsuario", async(req, res) =>{
    if (typeof req.body.email !== "string" || typeof req.body.senha !== "string"  ){
        return res.status(404).send(null)
    }
    const users = await prisma.usuario.findFirst({
        where: {
            AND: [{email: req.body.email}, {senha: req.body.senha}]
        }
    })
    res.json(users)
})

app.get("/posts", async(req, res) =>{
    const posts = await prisma.$queryRaw
    `select * from CodeDrafts.V_PreviewPost order by pontosPost DESC`;
    res.json(posts)
})

// CONFIGURATIONS

app.post("/atualizarUsuario", async(req, res) =>{
    const u = await prisma.usuario.findFirst({
        where: {
            AND: [{email: req.body.emailAntigo}, {senha: req.body.senhaAntiga}]
        }
    })
    await prisma.$queryRaw 
    `exec CodeDrafts.spAtualizarUsuario ${u.idUsuario}, ${req.body.nome}, ${req.body.username}, 
    ${u.descricao}, ${u.fotoPerfil}, ${req.body.senha}, ${u.pontosTotais}, ${u.ativo}, ${u.quantidadeDenuncias}, ${req.body.email}`;
})