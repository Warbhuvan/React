import logo from "./logo.svg";
import "./App.css";
import React,{useReducer} from "react";
import ClassCounter from "./Component/ClassCounter";
import StateHookCounter from "./Component/StateHookCounter";
import StateHookCounter2 from "./Component/StateHookCounter2";
import StateHookCounter3 from "./Component/StateHookCounter3";
import StateHookCounter4 from "./Component/StateHookCounter4";
import EffectCounter1 from "./Component/EffectCounter1";
import UseEffectHookMousePosition from "./Component/UseEffectHookMousePosition";
import MouseContainer from "./Component/MouseContainer";
import IntervalHookCounter from "./Component/IntervalHookCounter";
import DataFetching from "./Component/DataFetching";
import ComponentC from "./Component/ComponentC";
import Counter1 from "./Component/Counter1";
import Counter2 from "./Component/Counter2";
import Counter3 from "./Component/Counter3";
import ComponentA from "./Component/ComponentA";
import ComponentB from "./Component/ComponentB";
import ComponentLast from "./Component/ComponentLast";
import DataFetchingUseReduceHook from "./Component/DataFetchingUseReduceHook";
import FocusInput from "./Component/FocusInput";
import ClassTimer from "./Component/ClassTimer";
import HookTimer from "./Component/HookTimer";


export const UserContext = React.createContext();
export const UserNameContext = React.createContext();
export const CountContext=React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <header className="App-header">
        <div>{count}</div>
        {/* <ClassCounter></ClassCounter> */}
        {/* <StateHookCounter></StateHookCounter> */}
        {/* <StateHookCounter2></StateHookCounter2> */}
        {/* <StateHookCounter3></StateHookCounter3> */}
        {/* <StateHookCounter4></StateHookCounter4> */}
        {/* <EffectCounter1></EffectCounter1> */}
        {/* <MouseContainer></MouseContainer> */}
        {/* <IntervalHookCounter></IntervalHookCounter> */}
        {/* <DataFetching></DataFetching> */}
        {/* <UserContext.Provider value={'Sheetal'}>
         <UserNameContext.Provider value={'Warbhuvan'}>
           <ComponentC></ComponentC>
         </UserNameContext.Provider>
       </UserContext.Provider> */}

        {/* <Counter1></Counter1> */}
        {/* <Counter2></Counter2> */}
        {/* <Counter3></Counter3> */}
        <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
          {/* Count - {count}
          <ComponentA></ComponentA>
          <ComponentB></ComponentB>
          <ComponentLast></ComponentLast> */}
          {/* <DataFetchingUseReduceHook></DataFetchingUseReduceHook> */}
          <FocusInput></FocusInput>
          <ClassTimer></ClassTimer>
          <HookTimer></HookTimer>
        </CountContext.Provider>
       
      </header>
    </div>
  );
}

export default App;
