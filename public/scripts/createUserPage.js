
function createkljhuiUserPage(){


    return `
    
    <!-- conferir necessidade de box -->

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="images/logoIconWithoutBackground.png">
    <title>User Page</title>

    <link rel="stylesheet" href="styles/estiloUser.css">
    <link rel="stylesheet" href="styles/boxes.css">
    <link rel="stylesheet" href="styles/styleGenerico.css">

    <script src="scripts/avoidFlickering.js"></script>
</head>
<body>

    <button class="botao" id="btnConfigs" onclick="MudarTema()"><img src="images/DarkIcon.png" id="tema"></button>
    <a class="botao" id="btnVoltar" href="app.html">Voltar</a>

   <header id="menuHeader">
        <button class="headerButton" id="headerConfigs" onclick="MudarTema()" id="menuConfigs"><img src="images/DarkIcon.png" id="tema2"></button>
        <a class="headerButton" id="headerVoltar" href="app.html">Voltar</a>
   </header>

   <div id="pageContent">
        <div id="geral">
            <div id="topper">
                <div id="mainInfo">
                    <div id="boxAvatar">
                        <img src="images/noUserImage.png" id="userAvatar">
                    </div>
                    <div id="boxTexto">
                        <div id="boxUserName">
                            <p id="nomeDoUsuario">Nome</p>
                        </div>
                        <div id="boxInfo">
                            <p id="userName">@Username</p>
                            <p id="pontos">0</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="center">
                <aside id="boxConquistas">
                    <div id="quadradoConquistas" >

                    </div>
                </aside>


                <div id="boxCbPosts">
                    <div id="divContentButtons">
                        <button onclick="selecionar("Posts")" id="Posts" class="contentButton">Posts</button>
                        <button onclick="selecionar("CbPessoal")" id="CbPessoal" class="contentButton">Pessoal</button>
                        <button onclick="selecionar("CbConquistas")" id="CbConquistas" class="contentButton">Conquistas</button>
                    </div>

                    <div id="boxPosts" class="boxCbs">
                    </div>

                    <div id="boxCbPessoal" class="boxCbs">
                        <div id="boxCbPessoalRanking">
                        </div>
                        <div id="boxCbPessoalCEDBio">
                            <div id="boxCbBIO">
                                <div id="containerBio"></div>
                            </div>
                            <div id="boxCbCED">
                            </div>
                        </div>
                    </div>

                    <div id="boxCbConquistas" class="boxCbs">
                            <script>document.querySelector("#boxCbConquistas").appendChild(document.querySelector("#quadradoConquistas").cloneNode(true))</script>
                    </div>

                </div>
        
            </div>
        </div>        
        <aside id="side">
            <div id="boxBIO">
                <div id="bio">
                    <p id="bioText">Lorem ipsum dolor sit, amet consectt enim quidem illum atque optnte beatae volrum vitae voluptates magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ad sunt harum optio et enim quos at modi odit sed inventore velit ipsum, eligendi aperiam nostrum aliquam itaque vel animi? lorem</p>
                </div>
            </div>
        
            <div id="boxCED">
                <div id="conquistaEmDestaque">

                    <div class="cardConquista" id="cardConquistaEmDestaque">
                        
                    </div>

                </div>
            </div>

            <div id="boxRANKING">
                <div id="ranking">
                    
                </div>
            </div>
        </aside>
    </div>

    <section id="box" class="confirmarDenuncia">
        <h1>Confirmar denúncia</h1>
        <p>Deseja denunciar o post de <a href="#">Usuário</a>? </p>
        <button onclick="confirmarDenuncia()" id="ConfirmarButton">Confirmar</button>
        <button onclick="fecharDenuncia()"  id="RetornarButton">Retornar</button>
        <button id="exitLogin" onclick="fecharDenuncia()">X</button>
</section>
    
    <script src="./scripts/changeTheme.js"></script>
    <script src="./scripts/userSelectedButton.js"></script>
    <script src="./scripts/scriptUser.js"></script>
    <script src="./scripts/Post.js"></script>

</body>
</html>

    `
}