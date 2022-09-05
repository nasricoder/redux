import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../Redux/Actions"


const AddTask=()=>{
    const dispatch = useDispatch()
    const [description,setDescription] = useState('')
    const handelAdd=()=>{
        description == '' ? alert('Empty Field') : dispatch(addTask({id: Math.random(),description,isDone: false})) 
        setDescription('') }
    return(
        <>
        <input  value={description}  type='text' onChange={(e)=> setDescription(e.target.value)} />
        <button onClick={handelAdd}> ADD </button>
        
        </>
    )
}

export default AddTask