import style from './todo-view.module.scss';

import ErrorBounderyWrapper from '../error-boundery-wrapper/error-boundery-wrapper';


import Header from "./header/header";
import TodoWrapper from "./todos-section/todos-wrapper";
import InputSection from "./add-and-search/inputSection";

import { useState } from 'react';

import { inputStatues } from './interfaces/statues';

const TodosView = ()=> {

  const [inputStatus, setInputStatus ] = useState<inputStatues>({inputValue:'',query:''})

  const getInputStatues = (statues: inputStatues )=> {
    setInputStatus(statues)
  }

  return(
    <div className={style['todo-view-main']}>
      <Header />
      <ErrorBounderyWrapper>
       <TodoWrapper statues={inputStatus}/>
      </ErrorBounderyWrapper>
      <InputSection onGetInputStatus={getInputStatues}/>
    </div>
  )
}

export default TodosView;