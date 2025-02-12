import style from './modules-wrapper.module.scss';
import { IoSearch } from "react-icons/io5"
import { RiAddLargeFill } from "react-icons/ri";

import InputFild from '../../base-components/input-fild/input-fild';
import Button from '../../base-components/button/button';
import { useState } from 'react';

type modulesWrapper = {
   //onGet
}


const ModulesWrapper = ()=> {

    const [inputAction, setInputAction] = useState('ADD')

    const changeAction = (selectedAction: string)=> {
       setInputAction(selectedAction)
    }


    const getInputValue = (value:string)=>{//add a get by debounce 
        console.log(value)
    }

    const setPlaceholder = ()=> {
        if(inputAction === 'ADD') {
            return 'Please add new todo'
        }else if (inputAction === 'SEARCH') {
            return 'Search by title, date, key word ...'
        }else {
            return 'Please add new todo'
        }
    }

    return(
        <div className={style['module-wrapper']}>
            <InputFild placeholder={setPlaceholder()} onGetInputValue={getInputValue} />
            <Button buttonHandler={changeAction.bind(this, 'SEARCH')} appendStyle={`${style['function-bt-search']} ${style['function-bt']}`}>
               <IoSearch  fontSize={'1.8rem'} />
            </Button>
            <Button buttonHandler={changeAction.bind(this, 'ADD')} appendStyle={`${style['function-bt-add']} ${style['function-bt']}`}>
                <RiAddLargeFill  fontSize={'2rem'} />
            </Button>
        </div>
    )
}

export default ModulesWrapper;