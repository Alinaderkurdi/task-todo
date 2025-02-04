//the app component serve a global layout and router

import './App.scss'
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import TodosView from './todo-view/todo-view';
import RootLayoutWrapper from './root-layout-wrapper/root-layout-wrapper';

function App() {
  return (
    <RootLayoutWrapper>
     <Router>
      <Routes>
        <Route path='/' element={<TodosView />}/>
        <Route path='*' element={<div>not found</div>}/>
        <Route path='/test' element={<div>test view</div>}/>
      </Routes>
     </Router>
    </RootLayoutWrapper>
  )
}

export default App
