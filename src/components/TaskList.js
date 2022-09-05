import { useSelector } from "react-redux"
import TaskCard from "./TaskCard"



const TaskList=()=>{
    const tasks = useSelector(state=>state.tasks)
    return(
        tasks.map(task=><TaskCard task={task}/>)
    )
}
export default TaskList
