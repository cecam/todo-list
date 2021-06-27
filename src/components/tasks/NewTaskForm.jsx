import { useState, useContext } from "react";
import IconButton from "../button/IconButon";

import { AlertContext } from "../../context/AlertContext";

import { TaskForm } from "./TaskStyles";
import { AiOutlineRight } from "react-icons/ai";

const NewTaskForm = ({setCallType}) => {
    const { displayAlert } = useContext(AlertContext)
    const [ taskName, setTaskName ] = useState('')

    const handlerSubmit = e => {
        e.preventDefault()

        if(!taskName) {
            displayAlert('Debes crear un nombre para la tarea')
            return
        }

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

            <IconButton type="submit"
                content={ <AiOutlineRight size="30" /> }
                color="var(--white)"
            />
        </TaskForm>
    );
}
 
export default NewTaskForm;