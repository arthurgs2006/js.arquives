// Utilize o .json para importar uma biblioteca nova
//A biblioteca em questão, json-server, apresenta uma estrutura simplificada de Banco de Dados com node e JS
//Realize o procedimento normal de add uma biblioteca, porém atente-se a alguams mudanças, como no package.json, que adiciona um script a rodar o código.

const ArticleRender = (articleData) => {
    const article = document.createElement('article');
    article.classList.add('article');
    article.id = `article-${articleData.id}`;
    //criar article, add classe a ele e posteriormente um id

    const title = document.createElement('h3');
    title.classList.add("article-title")
    title.textContent = articleData.title
        
    const content = document.createElement('div');
    content.classList.add("article-content")
    content.innerHTML = articleData.content;

    const author = document.createElement('div');
    author.classList.add('article-author')
    author.textContent = articleData.author

    article.append(title, author, content);
    document.querySelector('#articles').append(article);
}

const fetchArticles = async () => {
    const articles = await fetch('http://localhost:3000/articles').then(res => res.json())
    //Criamos uma const articles que vai add essas info no localHost criado, posteriomente com then(), que vai pegar a promise e converte-la em obj para json();
    articles.forEach(ArticleRender);
    //para cada um dos artigos criados, ele será callBack com o articleRender...

}

document.addEventListener('DOMContentLoaded', () => {
    fetchArticles()
    //Quando a pagina for recarregada, irá executar a função fetchArticles(), que reconhecerá como promise e irá fchamar a outra função para render
})


//Para continuar cm o aprendizado e os testes serem prosseguidos de forma certa e correta, é necessário que o liveserver seja
//desligado, afinal com ele funcionando, a aplicação não funcionará corretamente.
//Vá em config e suas preferencias...

const form = document.querySelector('form')
form.addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const articleData = {
        title: document.querySelector('#title').value,
        author: document.querySelector("#author").value,
        content: document.querySelector('#content').value

    }

    const response = await fetch('http://localhost:3000/articles', {
        method: 'POST', //qual método a ser adicionado
        headers: { //o cabeçalho, que dentro está o tipo de conteudo e sua versão
            'Content-Type': 'application/json'
        }, //por fim, um campo que irá acionar a pagina a renderização padrão novamente
        body: JSON.stringify(articleData) //JSON.stringify() realiza a mudança de uma const para obj ou nesse caso string.
    })

    const saveArticle = await response.json()
    form.reset()
    ArticleRender(saveArticle)
    console.log(saveArticle)
})