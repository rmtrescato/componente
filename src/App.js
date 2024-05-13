import './App.css';
import Meucomponente from './componentes/Meucomponente';
import Conteudo from './componentes/Conteudo'

function App() {
  return (
    <div className="App">
     <Meucomponente></Meucomponente>
     <Meucomponente></Meucomponente>
     <Meucomponente></Meucomponente>
     <Conteudo></Conteudo>

     <Conteudo/>
     <Meucomponente/>
    </div>
  );
}

export default App;
