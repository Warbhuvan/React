import logo from './logo.svg';
import './App.css';
import {Greet} from './Component/Greet';
import Welcome from './Component/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet></Greet>
        <Welcome/>
      </header>
    </div>
  );
}

export default App;
