import style from './todos-wrapper.module.scss';
import { useEffect, useState } from 'react';

import SingleTodo from '../../../components/compound-components/single-todo/single-todo';

type todoShape = {
    id: number
    title: string
    completed: boolean
    userId?: number
}


const TodoWrapper = ()=> {
    const [todos, setTodos] = useState<todoShape[]>()
    const [loadingState, setLoadingState] = useState(false)


    useEffect(()=> {
       setLoadingState(true)
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then((response) => {
           return response.json()
       })
       .then((data)=>{
         setTodos(data)
         setLoadingState(false)
       })
       .catch(error => console.error("Error:", error))
       .finally(()=>{
        setLoadingState(false)
       })
    },[])

    

    return(
        <div className={style['todo-wrapper']}>
            {
                !loadingState && todos?.length > 1 ? 
                todos?.map((todo: todoShape)=>{
                    //console.log(todo)
                    return(
                        <SingleTodo 
                         completed={todo.completed}
                         id={todo.id}
                         title={todo.title}
                         ID={todo.id.toString()}
                        />
                    )
                })
                : <p>r</p>
            }
        </div>
    )
}

export default TodoWrapper;