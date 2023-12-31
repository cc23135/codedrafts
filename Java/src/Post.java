import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

public class Post {
    private static int posicao = 0; // posição atual da lista de posts
    private int idPost;
    private String titulo;
    private String conteudo;
    private String capa;
    private String username;
    private int quantidadeDenuncias;
    private int aprovado;

    public Post(int idPost, String titulo, String conteudo, String capa, String username, int quantidadeDenuncias, int aprovado) {
        this.idPost = idPost;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.capa = capa;
        this.username = username;
        this.quantidadeDenuncias = quantidadeDenuncias;
        this.aprovado = aprovado;
    }

    public static int getPosicao() {
        return posicao;
    }

    public static void setPosicao(int novaPosicao) {
        posicao = novaPosicao;
    }

    public int getId() {
        return this.idPost;
    }

    public String getTitulo() {
        return this.titulo;
    }

    public String getConteudo() {
        return this.conteudo;
    }

    public String getCapa() {
        return this.capa;
    }

    public String getUsername() {
        return this.username;
    }

    public int getQuantidadeDenuncias() {
        return this.quantidadeDenuncias;
    }

    public void zerarDenuncias(){
        this.quantidadeDenuncias = 0;
    }

    public void setAprovado(int status){
        this.aprovado = status;
    }

    public int getAprovado(){
        return this.aprovado;
    }

    public void ActionExcluirPost(){
        this.aprovado = 0;
        // aprovado se torna false
    }

    // Método estático para criar objetos Post

    public static List<Post> criarListaPosts(ResultSet resultSet) throws SQLException {
        List<Post> listaPosts = new ArrayList<>();

        while (resultSet.next()) {
            Post post = new Post(
                    resultSet.getInt("idPost"),
                    resultSet.getString("titulo"),
                    removeHTMLTags(resultSet.getString("conteudo")),
                    resultSet.getString("capa"),
                    resultSet.getString("username"),
                    resultSet.getInt("quantidadeDenuncias"),
                    resultSet.getInt("aprovado")
            );

            listaPosts.add(post);
        }

        return listaPosts;
    }

    
    private static String removeHTMLTags(String htmlString) {
        Pattern pattern = Pattern.compile("<[^>]*>");
        return pattern.matcher(htmlString).replaceAll("");
    }
}
