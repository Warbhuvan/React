import React,{useState} from 'react'

function useInput(initialSTate) {
 const[value,setValue]=useState('')
 const reset=()=>{
     setValue(initialSTate)
 }
 const bind={
     value,
     onChange:e=>{
         setValue(e.target.value)
     }
 }
 return [value,bind,reset]
}

export default useInput
