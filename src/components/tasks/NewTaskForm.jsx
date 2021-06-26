import { useState } from "react";
import IconButton from "../button/IconButon";

import { TaskForm } from "./TaskStyles";
import { AiOutlineRight } from "react-icons/ai";

const NewTaskForm = ({setCallType}) => {
    const [ taskName, setTaskName ] = useState('')

    const handlerSubmit = e => {
        e.preventDefault()

        if(!taskName) return

        setCallType({
            type: 'create',
            info: { name: taskName }
        })

        setTaskName('')
    }

    return ( 
        <TaskForm onSubmit={ handlerSubmit }>
            <input 
                type="text"
                name="name" 
                value={ taskName }
                onChange={ e => setTaskName(e.target.value) }
                placeholder="¡Escribe una nueva tarea!"
            />

            <IconButton 
                content={ <AiOutlineRight size="30" /> }
                color="var(--white)"
            />
        </TaskForm>
    );
}
 
export default NewTaskForm;