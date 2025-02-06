import style from './todos-wrapper.module.scss';

import SingleTodo from '../../../components/compound-components/single-todo/single-todo';

const TodoWrapper = ()=> {
    return(
        <div className={style['todo-wrapper']}>
            <SingleTodo
             id={21} 
             completed={false}
             title={'helloooo oooo hi and this is so good '}
            />
            <SingleTodo
             id={21} 
             completed={true}
             title={'this is the last'}
            />
            <SingleTodo
             id={21} 
             completed={false}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={false}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={true}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={false}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={true}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={false}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={false}
             title={'hello'}
            />
            <SingleTodo
             id={21} 
             completed={false}
             title={'hello'}
            />
        </div>
    )
}

export default TodoWrapper;