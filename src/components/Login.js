//import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';



export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
  

    useEffect(() => {
        obtenerToken();
      

    }, [])
    

    const obtenerToken= async() => {
        
        const auth_user = {Username:"c0n4p4n$AppSIPAMUser", Password:"c0n4p4n$AppSIPAMpass"}
        const respuesta= await axios.post(`/wsSIPAM/Authenticate`, auth_user);

        console.log(respuesta);

        const mensaje = respuesta.data.CodError;
        const mensaje_alerta= respuesta.data.CodRespuesta;

        console.log(mensaje);
        console.log(mensaje_alerta);
        const token = respuesta.data.Token;
                  
        localStorage.setItem('Token', token);

    }

    const login= async(e) =>{
        e.preventDefault();
        
        const usuario = {username, password}
        const Token = localStorage.getItem('token');

        const headers= {
            'Authorization': 'Bearer ' + Token
        }
        const respuesta= await axios.post(`   WSSIPAM/wsSIPAM/GetUsuario`, headers, usuario);
        //console.log(respuesta);

        const mensaje ="000";
        const mensaje_alerta= "Bienvenido";
        //const mensaje = respuesta.data.CodError;
        //const mensaje_alerta= respuesta.data.CodRespuesta;

        console.log(mensaje);
        console.log(mensaje_alerta);
        

        //"CodError": "OK",

        if(mensaje !=='OK'){
                     
            Swal.fire({
               
                icon: 'error',
                title: mensaje_alerta,
                showConfirmButton: false,
                timer: 1500
            })

        }else{
            
           
                   
            //const nombre = respuesta.data.nombre;
            //const idUsuario = respuesta.data.id;
            //localStorage.setItem('Token', token);
            //localStorage.setItem('nombre', nombre);
            //localStorage.setItem('idUsuario', idUsuario);
            
            window.location.href='/index'
        }

    }
   
    

  return (
    <>

        <main className="main-content">

            <div className="admin">
                <div className="container-fluid p-1">
                    <div className="row justify-content-center">
                
                    <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-8 ">
                        <div className="edit-profile">
                            <div className="edit-profile__logos">
                                <a href="index.html">
                                <img className="dark" src="img/logo-white.png" alt="" />
                                <img className="light" src="img/logo-white.png" alt=""/>
                                </a>
                            </div>
                            <div className="card border-0">
                                <div className="card-header">
                                <div className="edit-profile__title">
                                    <h6>Entrar al SIPAM</h6>
                                </div>
                                </div>
                                <div className="card-body">
                                <form onSubmit={ login }>
                                    <div className="edit-profile__body">
                                        <div className="form-group mb-25">
                                            <label for="username">Email</label>
                                            <input type="text" className="form-control" id="username" placeholder="ufo@conapam.go.cr" required onChange={(e)=>setUsername(e.target.value)}/>
                                        </div>
                                        <div className="form-group mb-15">
                                            <label for="password-field">contraseña</label>
                                            <div className="position-relative">
                                                <input id="password-field" type="password" className="form-control" name="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)} />
                                                <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="admin-condition">
                                            <div className="checkbox-theme-default custom-checkbox ">
                                                <input className="checkbox" type="checkbox" id="check-1" />
                                                <label for="check-1">
                                                <span className="checkbox-text">Mantenerme conectado</span>
                                                </label>
                                            </div>
                                            <a href="forget-password.html">¿Olvido la contraseña?</a>
                                        </div>
                                
                                        <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                            <button className="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn ">
                                            Entrar
                                            </button>
                                        </div>
                                   
                                   
                                </div>
                                </form>
                                </div>
                            
                                <div className="admin-topbar">
                                <p className="mb-0">
                                    No tiene cuenta aún?
                                    <a href="sign-up.html" className="color-primary">
                                        Registrarse
                                    </a>
                                </p>
                                
                                </div>
                                
                            </div>
                        </div>
                            
                    </div>
                        
                    </div>
                </div>
            </div>
            <footer className="footer-wrapper">
            <div className="footer-wrapper__inside">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-copyright">
                            <p><span>© 2023</span><a href="https://geoinn.net">Geoinn Ti</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-menu text-end">
                            <ul>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
        </footer>

        </main>
        <div id="overlayer">
            <div className="loader-overlay">
                <div className="dm-spin-dots spin-lg">
                    <span className="spin-dot badge-dot dot-primary"></span>
                    <span className="spin-dot badge-dot dot-primary"></span>
                    <span className="spin-dot badge-dot dot-primary"></span>
                    <span className="spin-dot badge-dot dot-primary"></span>
                </div>
            </div>
        </div>
        <div className="enable-dark-mode dark-trigger">
            <ul>
                <li>
                    <a href="#">
                    <i className="uil uil-moon"></i>
                    </a>
                </li>
            </ul>
        </div>


    </>
  )
}


export default Login
