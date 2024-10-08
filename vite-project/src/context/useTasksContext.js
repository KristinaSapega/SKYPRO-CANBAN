import { useContext } from "react"
import { TaskContext } from "./TasksContext"

export const useTasksContext = () => {
    return useContext(TaskContext)

}
