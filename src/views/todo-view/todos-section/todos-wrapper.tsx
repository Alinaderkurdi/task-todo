import style from './todos-wrapper.module.scss';
import { useEffect, useMemo, useState } from 'react';
//import { List } from 'react-virtualized';
import LoadingSpinner from '../../../components/composite-components/loading-spinner/loading-spinner';
import SingleTodo from '../../../components/compound-components/single-todo/single-todo';
import { useErrorBoundary } from "react-error-boundary";
import { inputStatues } from '../interfaces/statues';


type todoShape = {
    id: number
    title: string
    completed: boolean
}

type todoWrapper = {
    statues: inputStatues
}

const TodoWrapper = (props:todoWrapper)=> {
    const { statues  } = props

    const [todos, setTodos] = useState<todoShape[]>([])
    const [loadingState, setLoadingState] = useState(false)
    const { showBoundary } = useErrorBoundary();


    useEffect(()=> {
       setLoadingState(true)
       fetch("https://jsonplaceholder.typicode.com/todos")
       .then((response) => {
           if(!response.ok){
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
    },[])//to get updated data from API when new todo added this effect get asyncResult from the input section
    

    const cachedtodos = useMemo(()=>{
    
        if(!loadingState && todos.length > 0){
          return todos.map((todo: todoShape)=> {
            return(
                <SingleTodo
                   key={todo.id.toString()}
                   completed={todo.completed}
                   id={todo.id}
                   title={todo.title}
                   ID={todo.id.toString()}
                />
            )
          })
        }
    },[todos])


    const filteredTodos = useMemo(()=>{
        if('query' in statues && statues.query){//this part use the type non-null assertion for safty check the statues.query 
            const filteredItems = todos.filter((currentTodo: todoShape)=> {
                return currentTodo.title.toLowerCase().includes(statues.query!.toLowerCase())
            })
            return filteredItems.map((todo: todoShape)=>{
                return(
                    <SingleTodo
                       key={todo.id.toString()}
                       completed={todo.completed}
                       id={todo.id}
                       title={todo.title}
                       ID={todo.id.toString()}
                    />
                )
            })
        }
    },[statues.query])

    
    return(
        <div className={style['todo-wrapper']}>
            {
                cachedtodos
            }
            {
                loadingState  &&  <LoadingSpinner spinnerSize={style['spinner-size']} appendStyle={style['loading-wrapper']}/>
            }
           
        </div>
    )
}

export default TodoWrapper;