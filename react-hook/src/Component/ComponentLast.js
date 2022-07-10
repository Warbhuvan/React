import React, { useContext } from 'react'
import { CountContext } from '../App'
import ComponentB from './ComponentB'

function ComponentLast() {
    const countContext=useContext(CountContext)
  return (
    <div>ComponentLast {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  )
}

export default ComponentLast 