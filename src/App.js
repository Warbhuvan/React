import logo from './logo.svg';
import './App.css';
//import Greet from './Component/Greet';
import {Greet} from './Component/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet></Greet>
      </header>
    </div>
  );
}

export default App;
