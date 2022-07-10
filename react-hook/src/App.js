import logo from './logo.svg';
import './App.css';
import React from 'react';
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
import ComponentC from './Component/ComponentC';

export const UserContext=React.createContext()
export const UserNameContext=React.createContext()

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
       {/* <DataFetching></DataFetching> */}
       <UserContext.Provider value={'Sheetal'}>
         <UserNameContext.Provider value={'Warbhuvan'}>
           <ComponentC></ComponentC>
         </UserNameContext.Provider>
       </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
