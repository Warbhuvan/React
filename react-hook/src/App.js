import logo from './logo.svg';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import StateHookCounter from './Component/StateHookCounter';
import StateHookCounter2 from './Component/StateHookCounter2';
import StateHookCounter3 from './Component/StateHookCounter3';
import StateHookCounter4 from './Component/StateHookCounter4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter></ClassCounter> */}
        {/* <StateHookCounter></StateHookCounter> */}
        {/* <StateHookCounter2></StateHookCounter2> */}
        {/* <StateHookCounter3></StateHookCounter3> */}
        <StateHookCounter4></StateHookCounter4>
      </header>
    </div>
  );
}

export default App;
