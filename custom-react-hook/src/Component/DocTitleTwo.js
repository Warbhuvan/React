import React,{useState} from 'react'
import UseDocTitle from '../Hooks/UseDocTitle'

function DocTitleTwo() {
    const [count,setCount]=useState(0)
    UseDocTitle(count)
  return (
    <div><button onClick={()=>{setCount(count+1)}}>Count - {count}</button></div>
  )
}

export default DocTitleTwo