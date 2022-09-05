import { ADDTASK, EDITTASK } from "./TypeActions"

export const addTask=(payload)=>{
    return(
        {type:ADDTASK,payload}
        )
}
export const editTask=(payload)=>{
    return(
        {type:EDITTASK,payload}
    )
}