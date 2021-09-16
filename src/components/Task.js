import { FaTimes } from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
    return (
        // <div className={ `task ${task.reminder ? 'reminder' : ''} `} onDoubleClick={()=>onToggle(task.id)}>
        <div className="task reminder">
            <h3>{task.first_name +" "+ task.last_name} <FaTimes style={{ color:'red', cursor: 'pointer'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.email}</p>
        </div>
    )
}

export default Task