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


   useEffect(()=>{
       console.log('CHANGE BY INPUT STATUES! ' + statues?.inputValue, statues.operation)
   }, [statues.inputValue,statues.operation])


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
    },[])
    //to get updated data from API when new todo added this effect get asyncResult from the input section

    const cachedtodos = useMemo(()=>{

        if(!loadingState && todos.length > 0){
          return todos.map((todo: todoShape)=> {
            console.log('render')
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


        const filteredItems = todos.filter((currentTodo: todoShape)=> {
            return currentTodo.title.toLowerCase().includes(statues.query?.toLowerCase())
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
    },[statues.query])

    const renderTodos = ()=> {
        console.log('rendertodo')
        if(filteredTodos.length > 0 && statues.query) {
            return filteredTodos
        }else {
            cachedtodos
        }
        
    }


    return(
        <div className={style['todo-wrapper']}>
            {
               // !loadingState && todos?.length > 0 && data
                /// if search result.lenght search result  > 0 else  cachedtodos
                //filteredTodos
                renderTodos()
            }
            {
                loadingState  &&  <LoadingSpinner spinnerSize={style['spinner-size']} appendStyle={style['loading-wrapper']}/>
            }
        </div>
    )
}

export default TodoWrapper;