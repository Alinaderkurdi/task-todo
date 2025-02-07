

import Header from "./header/header";
import TodoWrapper from "./todos-section/todos-wrapper";
import InputSection from "./add-and-search/inputSection";

const TodosView = ()=> {

  return(
    <div>
      <Header />
      <TodoWrapper />
      <InputSection />
    </div>
  )
}

export default TodosView;