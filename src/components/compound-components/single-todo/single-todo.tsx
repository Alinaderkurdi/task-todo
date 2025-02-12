import { useState } from 'react';

import style from './single-todo.module.scss';

import { FaChevronDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";


import CheckBoxButton from '../../base-components/check-box/checkbox-bt';
import Button from '../../base-components/button/button';


type singleTodo = {
    id: number
    title: string
    description?: string
    completed: boolean
    time?: string
    ID: string

}

const SingleTodo = (props: singleTodo)=> {
    const { id,title ,completed, ID} = props 
    

    const [toggelDescription, setToggelDescription] = useState(false)
    const [isCompleted, setIsCompleted] = useState(completed)

    const toggelDescriptionState = () => {
        setToggelDescription( prev => !prev)
    }

    const getTheCheckBoxState = (state: boolean)=> {
        setIsCompleted(state)
    }


    return(
        <div className={style['single-todo']}>
            <div className={style['info-box']}>
                <CheckBoxButton defaultChecked={completed} id={id} ID={ID} onCheckBoxIsClicked={getTheCheckBoxState}/>
                <h2 className={`${style['todo-title']} ${ isCompleted ? style['todo-completed'] : ''}`} >{title}</h2>
                <p className={style['hour']}>21:10</p>
            </div>
            <p className={style['description']}>Lorem ipsum dolor sit amet  and this is another try to find my self </p>
            <Button buttonHandler={toggelDescriptionState} appendStyle={style['toggel-to-show-more']} >
                {
                    toggelDescription ? <FaAngleUp fontSize={'0.9rem'}/> : <FaChevronDown fontSize={'0.9rem'}/>  
                }
              
            </Button>
        </div>
    )
}

export default SingleTodo;