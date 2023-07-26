import Topo from './componentes/Topo/';
import Rodape from './componentes/Rodape/';
import Principal from './componentes/Principal/';
import './App.css';
import './Responsive/responsive.css'

function App() {
  return (
    <div>
      <Topo/>
      <Principal />
      <Rodape />
    </div>
  );
}

export default App;
