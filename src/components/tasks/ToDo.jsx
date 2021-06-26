import useTasks from "../../hooks/useTasks";

import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

import { Card, TitleSection, TaskSection, NewTaskSection } from "./TaskStyles";

const ToDo = () => {
    const { tasks, setCallType } = useTasks()

    return ( 
        <Card>
            <TitleSection>Tus tareas</TitleSection>
            <TaskSection>
                {tasks.length === 0
                    ?
                        <div className="message">
                            ¡Crea tu primer tarea!
                        </div>
                    : 
                        tasks.map(task => (
                            <Task 
                                key={task.id} 
                                {...task} 
                                setCallType={setCallType}
                            />
                        ))
                        
                }
                
            </TaskSection>
            <NewTaskSection>
                <NewTaskForm setCallType={setCallType} />
            </NewTaskSection>
        </Card>
    );
}
 
export default ToDo;