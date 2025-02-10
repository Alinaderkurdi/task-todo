import style from './todos-wrapper.module.scss';
import { useEffect, useState } from 'react';
//import { List } from 'react-virtualized';
import LoadingSpinner from '../../../components/composite-components/loading-spinner/loading-spinner';
import SingleTodo from '../../../components/compound-components/single-todo/single-todo';
import { useErrorBoundary } from "react-error-boundary";


type todoShape = {
    id: number
    title: string
    completed: boolean
}


const TodoWrapper = ()=> {
    const [todos, setTodos] = useState<todoShape[]>([])
    const [loadingState, setLoadingState] = useState(false)
    const { showBoundary } = useErrorBoundary();


    useEffect(()=> {
       setLoadingState(true)
       fetch("https://jsonplaceholder.typicode.com/odos")
       .then((response) => {
           //console.log(response)
           if(!response.ok){
            console.log(response.json())
            throw new Error(`Error! Status: ${response.status}`);
           }
           return response.json()
       })
       .then((data)=>{
         setTodos(data)
         setLoadingState(false)
       })
       .catch((error)=> {
        showBoundary(error)
        console.log(console.log(error))
       })
       .finally(()=>{
        setLoadingState(false)
       })
    },[])


    return(
        <div className={style['todo-wrapper']}>
            {
                !loadingState && todos?.length > 0 &&
                todos?.map((todo: todoShape)=>{
                    return(
                      <SingleTodo 
                       completed={todo.completed}
                       id={todo.id}
                       title={todo.title}
                       ID={todo.id.toString()}
                      />
                    )
                })
            }
            {
                loadingState  &&  <LoadingSpinner spinnerSize={style['spinner-size']} appendStyle={style['test']}/>
            }
        </div>
    )
}

export default TodoWrapper;