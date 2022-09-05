import { useDispatch } from "react-redux"
import { editTask }  from  "../Redux/Actions"

const TaskCard = ({task})=>{
    const dispatch = useDispatch()
    return(
        <>
        <h3> {task.description} </h3>
        <h3> {task.isDone? 'true' : 'false'} </h3>
        <button onClick={()=> dispatch(editTask(task.id))}> done </button>
       </>
    )
}
export default TaskCard