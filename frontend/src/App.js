import React from "react";
import Login from './Login'
import Signup from "./Signup";
import HomePage from "./HomePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TaskList from "./TaskList";
import PaginaMeteo from "./weather";
import ConvertitoreValuta from "./Converter";
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/tasks' element={<TaskList />}></Route>
        <Route path='/meteo' element={<PaginaMeteo />}></Route>
        <Route path='/convertitore' element={<ConvertitoreValuta />}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App