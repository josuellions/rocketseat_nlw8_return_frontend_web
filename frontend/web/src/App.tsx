import { Widget } from "./components/Widget"

export function App() {

  return( 
  <>
    <div className="container">
      <h1 className="title">Deixe seu Feedback</h1>
      <p className="message">Sobre a funcionalidade desenvolvida para capturar print da tela screenshot, escrever mensagem e enviar.</p>
      <p className="menssage-link">Click no icone abaixo</p>
    </div>
    <Widget/>
  </>
  )
}
