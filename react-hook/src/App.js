import logo from './logo.svg';
import './App.css';
import ClassCounter from './Component/ClassCounter';
import StateHookCounter from './Component/StateHookCounter';
import StateHookCounter2 from './Component/StateHookCounter2';
import StateHookCounter3 from './Component/StateHookCounter3';
import StateHookCounter4 from './Component/StateHookCounter4';
import EffectCounter1 from './Component/EffectCounter1';
import UseEffectHookMousePosition from './Component/UseEffectHookMousePosition';
import MouseContainer from './Component/MouseContainer';
import IntervalHookCounter from './Component/IntervalHookCounter';
import DataFetching from './Component/DataFetching';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ClassCounter></ClassCounter> */}
        {/* <StateHookCounter></StateHookCounter> */}
        {/* <StateHookCounter2></StateHookCounter2> */}
        {/* <StateHookCounter3></StateHookCounter3> */}
        {/* <StateHookCounter4></StateHookCounter4> */}
        {/* <EffectCounter1></EffectCounter1> */}
       {/* <MouseContainer></MouseContainer> */}
       {/* <IntervalHookCounter></IntervalHookCounter> */}
       <DataFetching></DataFetching>
      </header>
    </div>
  );
}

export default App;
