

import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect
 
} from "react-router-dom";

import Actualizar from './components/Actualizar';
import Index from './components/Index';
import Login from './components/Login';
import Nav from './components/Nav';
import Registro from './components/Registro';


import './App.css';


const estaAutenticado =()=>{
  const token = localStorage.getItem('Token');
  if(token){
   return true;
 }else{
   return false;
 }
}

const MyRoute = (props) =>{

 return estaAutenticado()? <Route {...props} />: <Redirect to='/' />

}

const PublicRoute = (props) =>{

 return estaAutenticado()?  <Redirect to='/index' /> :<Route {...props} />

}




function App() {
  return (
    <Router>
   
    <PublicRoute path="/" exact component={Login}/>
    <Route path="/registro" exact component={Registro}/>

    <MyRoute path="/index" exact component={Index}/>
    <MyRoute path="/editar/:id" exact component={Actualizar}/>

    
  </Router>
  );
}

export default App;
