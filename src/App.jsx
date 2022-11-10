
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
/*eslint-disable */
import './app.scss'
import { useState } from "react"
import { Card } from "./Card";

function App() {
  const [nomeCor, setNomeCor] = useState();
  const [corHexadecimal, setCorHexadecimal] = useState();
  const [allCores, setAllCores] = useState([]);


  function adicionarCor(event) {
    event.preventDefault()
    
    const coloracao = {
      nomeCor: nomeCor,
      corHexadecimal: corHexadecimal
    }

    if (corHexadecimal.length != 7 || corHexadecimal[0] != '#') {
      alert('Cor inválida');
    } else {
      setAllCores([...allCores, coloracao])
    }
    
  }

  return (
    <div className="App">
     <h1>Registre sua cor Hexadecimal</h1>
     <form className="formCadastro">

			<input type="text" 
      className="form-control" 
      value={nomeCor} 
      onChange={event => setNomeCor(event.target.value)} 
      placeholder="Entre com o nome da Cor"/>

			<input type="text" 
      className="form-control"
      value={corHexadecimal} 
      onChange={event => setCorHexadecimal(event.target.value)} 
      placeholder="Digite uma cor Hexadecimal"/>

			<button type="submit" onClick={event => adicionarCor(event)} className="btn btn-primary">Adicionar</button>
		</form>


     <section>
      {
        allCores.map((cor, i) => {
          return (
            <Card key={i} corData={cor}/>
          )
        })
      }
     </section>
    </div>
  )
}

export default App