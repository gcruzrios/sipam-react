

import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect
 
} from "react-router-dom";

import Actualizar from './pages/Actualizar';
import Index from './pages/Index';
import Login from './pages/Login';

import Registro from './pages/Registro';
import Listpam from './pages/Listpam';


import './App.css';


const estaAutenticado =()=>{
  const token = localStorage.getItem('Token');
  const estado= localStorage.getItem('Estado');
  if(token && estado){
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
    <MyRoute path="/registro" exact component={Registro}/>

    <MyRoute path="/index" exact component={Index}/>
    {/*<MyRoute path="/lista-pam/:id" exact component={Listpam}/>
    <MyRoute path="/agregar-pam/:id" exact component={Addpam}/>
    <MyRoute path="/editar/:id" exact component={Actualizar}/> */}

    
  </Router>
  );
}

export default App;
