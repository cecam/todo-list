import { useEffect, useState } from "react";
import { v4 as uuid } from 'uuid';

import axiosClient from '../config/axios'

const useTasks = () => {
    const [ tasks, setTasks ] = useState([])
    const [ callType, setCallType ] = useState({
        type: '',
        info: null
    })

    const initializeCallType = () => {
        setCallType({
            type: '',
            info: null
        })
    }

    const createTask = async task => {
        task = {
            ...task,
            id: uuid(),
            status: false
        }
        try {
            const { data } = await axiosClient.post('/tasks', task)
            setTasks([data, ...tasks])
            initializeCallType()
        } catch (error) {
            console.log(error);
        }
    }

    const getTasks = async () => {
        try {
            const { data } = await axiosClient.get('/tasks')
            setTasks( data ? data : [] )
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async task => {
        try {
            const { data } = await axiosClient.put(`/tasks/${task.id}`, task)
            let newTasks = tasks.map(task => task.id === data.id ? data : task)
            setTasks(newTasks)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTask = async id => {
        try {
            await axiosClient.delete(`/tasks/${id}`)
            let newTasks = tasks.filter(task => task.id !== id)
            setTasks(newTasks)
            initializeCallType()
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        if(callType.type) {
            switch (callType.type) {
                case 'create':
                    createTask(callType.info)
                    break
                case 'delete':
                    deleteTask(callType.info)
                    break
                case 'update':
                    updateTask(callType.info)
                    break
                default:
                    break;
            }
        }
    }, [callType])

    return {
        tasks,
        setCallType
    }
}
 
export default useTasks;