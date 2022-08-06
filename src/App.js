import {useState} from 'react'
import Comp1 from './components/Comp'
import './App.css';

function App() {

  const [valorstate, setValorstate] = useState("")

  const valor = 15
  const valor2 = 10

  function mudar(){
    setValorstate("Olá pessoal!!!")
  }

  return (
    <>
    <p>Soma {5 + 5}</p>
    <Comp1  valor={valor} valor2 = {valor2}/>
    <p>Valor do teste {valorstate}</p>
    <button onClick={()=> mudar()}>Mudar</button>


    </>
  );
}

export default App;
