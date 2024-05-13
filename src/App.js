import './App.css';
import Button from './componentes/Button'
import Aluno from './componentes/Aluno'

function App() {
  return (
    <div className="App">
      <Aluno name='Rodrigo' age='28' level='Iniciante' course='Tecnologia'/>
      <Button text='Compre'/> <Button text='Agora!'/>
    
    </div>
  );
}

export default App;
