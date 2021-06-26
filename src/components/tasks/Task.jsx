import { useState } from 'react'

import IconButton from '../button/IconButon'

import { TaskElement } from "./TaskStyles";
import { AiOutlineCheckCircle, AiFillDelete, AiFillEdit, AiOutlineRightCircle } from "react-icons/ai";

const Task = ({id, name, status, setCallType}) => {
    const [newName, setNewName] = useState('')
    const [update, setUpdate] = useState(false)

    const updateNameTask = () => {
        if(newName === '') return

        setCallType({
            type: 'update',
            info : {
                id,
                status,
                name: newName
            }
        })
        setNewName('')
        setUpdate(!update)
    }

    const uptateStatusTask = () => {
        setCallType({
            type: 'update',
            info : {
                id,
                name,
                status: !status
            }
        })
    }

    const deleteTask = () => {
        setCallType({
            type: 'delete',
            info: id
        })
    }

    return ( 
        <TaskElement color={status}>
            <div>
                <IconButton 
                    content={ <AiOutlineCheckCircle /> }
                    color={status ? 'green' : '#c9c9c9' }
                    action={!status ? uptateStatusTask : null }
                />
            </div>
            <div>
                {update 
                    ?
                        <input 
                            type="text"  
                            placeholder="Escribe el nuevo nombre"
                            onChange={e => setNewName(e.target.value)}
                            value={ newName }
                        />
                    :
                        <p>{name}</p>
                }
                <div className="actions">
                    {!status && !update &&
                        <IconButton 
                            content={ <AiFillEdit />}
                            color="#542fa8"
                            action={() => setUpdate(!update)}
                        />
                    }
                    {update 
                        ?
                            <IconButton 
                                content={ <AiOutlineRightCircle />}
                                color="green"
                                action={updateNameTask}
                            />
                        :
                            <IconButton 
                                content={ <AiFillDelete /> }
                                color="#e0364a"
                                action={deleteTask}
                            />
                    }                
                </div>
            </div>
        </TaskElement>
    );
}
 
export default Task;