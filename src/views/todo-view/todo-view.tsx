import style from './todo-view.module.scss';

import ErrorBounderyWrapper from '../error-boundery-wrapper/error-boundery-wrapper';


import Header from "./header/header";
import TodoWrapper from "./todos-section/todos-wrapper";
import InputSection from "./add-and-search/inputSection";

const TodosView = ()=> {

  return(
    <div className={style['todo-view-main']}>
      <Header />
     <ErrorBounderyWrapper>
      <TodoWrapper />
     </ErrorBounderyWrapper>
      <InputSection />
    </div>
  )
}

export default TodosView;