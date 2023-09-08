
const App = () => {
  
  return(
    <div className="container">
      <header>
        <img src="../public/react.png" alt="ReactLoog" srcset="" />
        <p>A biblioteca para interfaces de usuário Web e nativos.</p>
        <button>Aprenda React</button>
        <button>Referência a API</button>
      </header>
      <hr />
      <main>
        <section>
          <h3>Crie interfaces de usuário de componentes</h3>
          <p>
            React permite que você construa interfaces de usuário a partir de pedaços infinitos individuais chamados componentes.
          </p>
        </section>
        <hr />
        <section>
          <h3>Escreva componentes com código e marcação</h3>
          <p>Componentes React são funções do JS, a sintaxe de marcação é chamada JSX, sendo uma extensão da sintaxe de JS popularizada pelo React.</p>
        </section>
        <hr />
        <section>
          <h3>Próximos Passos</h3>
          <ul>
            <li>Uso de dados dinâmicos JSX</li>
            <li>Criação de novos componentes</li>
            <li>Estilização de componentes</li>
            <li>Reutilização de componentes</li>
            <li>Uso de props e children </li>
            <li>Uso de eventos do JS</li>
          </ul>
        </section>
      </main>
    </div>  
  )
}

export default App;