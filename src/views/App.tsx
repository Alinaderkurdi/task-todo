//the app component serve a global layout and router
import { lazy } from 'react';
import { Suspense } from 'react';

import './App.scss'
import {BrowserRouter as Router,Route,Routes } from "react-router-dom";
import TodosView from './todo-view/todo-view';
import RootLayoutWrapper from './root-layout-wrapper/root-layout-wrapper';
const NotFound  = lazy( ()=> import('./not-found/not-found'));
const Setting = lazy ( ()=> import('./setting/setting'));


function App() {
  return (
    <RootLayoutWrapper>
     <Router>
      <Routes>
        <Route path='/' element={<TodosView />}/>
        <Route 
         path='*'
         element={
         <Suspense fallback={<p>loading</p>}>
            <NotFound />
         </Suspense>}/>
        <Route 
         path='/setting' 
         element={
          <Suspense fallback={<p>loading</p>}>
            <Setting />
          </Suspense>
         }/>
      </Routes>
     </Router>
    </RootLayoutWrapper>
  )
}

export default App
