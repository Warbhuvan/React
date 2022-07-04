import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./Component/Greet";
import Welcome from "./Component/Welcome";
import Hello from "./Component/Hello";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet></Greet> */}
        <Hello />
        <Welcome />
      </header>
    </div>
  );
}

export default App;
