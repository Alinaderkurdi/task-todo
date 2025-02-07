import style from './todos-wrapper.module.scss';

import SingleTodo from '../../../components/compound-components/single-todo/single-todo';

const TodoWrapper = ()=> {
    return(
        <div className={style['todo-wrapper']}>
            <SingleTodo
             id={21} 
             testID={'a1'}
             key={'a1'}
             completed={true}
             title={'helloooo oooo hi and this is so good '}
            />
            <SingleTodo
             testID={'a2'}
             key={'a2'}
             id={21} 
             completed={true}
             title={'this is the last'}
            />
            <SingleTodo
             testID={'as2'}
             key={'as2'}
             id={21} 
             completed={false}
             title={'hi'}
            />
            <SingleTodo
             testID={'acx23'}
             key={'acx23'}
             id={21} 
             completed={false}
             title={'what app'}
            />
            <SingleTodo
             testID={'a123ed'}
             key={'a123ed'}
             id={21} 
             completed={true}
             title={'oh no '}
            />
            <SingleTodo
             testID={'aqw123321'}
             key={'aqw123321'}
             id={21} 
             completed={false}
             title={'this the test'}
            />
            <SingleTodo
             testID={'aqcfgt56'}
             key={'aqcfgt56'}
             id={21} 
             completed={true}
             title={'come on babe !'}
            />
            <SingleTodo
             testID={'12qxgtgt'}
             key={'12qxgtgt'}
             id={21} 
             completed={false}
             title={'ohhhh god '}
            />
            <SingleTodo
             testID={'12axnmklo['}
             key={'12axnmklo['}
             id={21} 
             completed={false}
             title={'hiiiiiiii'}
            />
            <SingleTodo
             testID={'23rtebhj'}
             key={'23rtebhj'}
             id={21} 
             completed={false}
             title={'ali naderkurdi'}
            />
        </div>
    )
}

export default TodoWrapper;