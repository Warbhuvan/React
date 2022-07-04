// import logo from "./logo.svg";
import "./App.css";
// import { Greet } from "./Component/Greet";
import Welcome from "./Component/Welcome";
// import Hello from "./Component/Hello";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greet name="Sheetal" company="Vyoms">
          <p>Paragraph..</p>
        </Greet>
        <Greet name="SDW" company="Microsoft">
          <button>Action</button>
        </Greet>
        <Greet name="Shreya" company="AI" /> */}
        {/* <Hello /> */}
        {/* <Welcome name="Sheetal" company="Vyoms"></Welcome> */}
        {/* <Greet name="Sheetal" company="Vyoms">
        </Greet> */}
        <Welcome name="Sheetal" company="Vyoms"></Welcome>
        <Message></Message>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
