// import logo from "./logo.svg";
import "./App.css";
// import { Greet } from "./Component/Greet";
import Welcome from "./Component/Welcome";
// import Hello from "./Component/Hello";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import FunctionClick from "./Component/FunctionClick";
import FunctionClickForClass from "./Component/FunctionClickForClass";
import EventBinding from "./Component/EventBinding";
import ParenComponent from "./Component/ParenComponent";
import UserGreeting from "./Component/UserGreeting";
import NameList from "./Component/NameList";
import Form from "./Component/Form";
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
        {/* <Welcome name="Sheetal" company="Vyoms"></Welcome>
        <Message></Message>
        <Counter></Counter> */}
        {/* <FunctionClick></FunctionClick>
        <FunctionClickForClass></FunctionClickForClass> */}
        {/* <EventBinding></EventBinding>
        <ParenComponent /> */}
        <UserGreeting></UserGreeting>
        <NameList></NameList>
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
