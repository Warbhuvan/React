import logo from './logo.svg';
import './App.css';
import ClickCounter from './Component/ClickCounter';
import HoverCounter from './Component/HoverCounter';
import User from './Component/User';
import Counter from './Component/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
        <User render={(isLoggedIn)=> isLoggedIn?'Sheetal':'Guest'}></User> */}
        <Counter render={(count,incrementCount)=>{
          <ClickCounter count={count} incrementCount={incrementCount}></ClickCounter>
        }}></Counter>
        <Counter render={(count,incrementCount)=>{
          <HoverCounter count={count} incrementCount={incrementCount}></HoverCounter>
        }}></Counter>
      </header>
    </div>
  );
}

export default App;
