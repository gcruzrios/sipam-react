import React from 'react'

const Sidebar = () => {
  return (
    <div>

<div class="sidebar sidebar-collapse" id="sidebar">
            <div class="sidebar__menu-group">
               <ul class="sidebar_nav">
                  <li class="has-child open">
                     <a href="#" class="active">
                        <span class="nav-icon uil uil-create-dashboard"></span>
                        <span class="menu-text">Dashboard</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        <li class="active">
                          <a href="dashboard.html">Inicio</a>
                        </li>
                        {/* <li class="">
                           <a href="demo10.html">
                              Demo 10</a>
                        </li> */}
                     </ul>
                  </li>
                  {/* <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-window-section"></span>
                        <span class="menu-text">Layouts</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        <li class="l_sidebar">
                           <a href="#" data-layout="light">Light Mode</a>
                        </li>
                        <li class="l_sidebar">
                           <a href="#" data-layout="dark">Dark Mode</a>
                        </li>
                        
                     
                     
                     </ul>
                  </li> */}
                  
                  <li class="menu-title mt-30">
                     <span>Operaciones</span>
                  </li>
                  <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-envelope"></span>
                        <span class="menu-text">Alertas</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        <li class="">
                           <a href="inbox.html">Buzón Entrada</a>
                        </li>
                        {/* <li class="">
                           <a href="read-email.html">Read
                              Email</a>
                        </li> */}
                     </ul>
                  </li>
                  
                  
                  <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-folder"></span>
                        <span class="menu-text">Seguimiento</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        <li class="">
                           <a href="projects.html">Lista OBS</a>
                        </li>
                        {/* <li class="">
                           <a href="application-ui.html">Project
                              Details</a>
                        </li> */}
                        {/* <li class="">
                           <a href="create.html">Create
                              Project</a>
                        </li> */}
                     </ul>
                  </li>
                  <li>
                     <a href="calendar.html" class="">
                        <span class="nav-icon uil uil-calendar-alt"></span>
                        <span class="menu-text">Calendario</span>
                     </a>
                  </li>
                  <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-users-alt"></span>
                        <span class="menu-text">Usuarios</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                       
                        <li class="">
                           <a href="user-info.html">Agregar Usuario</a>
                        </li>
                        {/* <li class="">
                           <a href="users-datatable.html">Users
                              Table</a>
                        </li> */}

                     </ul>
                  </li>
                  <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-at"></span>
                        <span class="menu-text">OBS Contactos</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        {/* <li class="">
                           <a href="contact-2.html">Contact
                              Grid</a>
                        </li> */}
                        <li class="">
                           <a href="contact-1.html">Lista Contactos OBS</a>
                        </li>
                        <li class="">
                           <a href="contact-3.html">Agregar Contacto</a>
                        </li>
                     </ul>
                  </li>
                  
                  
                  
                  {/* <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-exchange"></span>
                        <span class="menu-text">Import & Export</span>
                        <span class="toggle-icon"></span>

                     </a>
                     <ul>
                        <li class="">
                           <a href="import.html">Import</a>
                        </li>
                        <li class="">
                           <a href="export.html">Export</a>
                        </li>
                        <li class="">
                           <a href="export-selected.html">Export
                              Selected
                           </a>
                        </li>
                     </ul>
                  </li>
                   */}
                  
                  
                  <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-user"></span>
                        <span class="menu-text">Soporte</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        <li class="">
                           <a href="support-ticket.html">Solicitudes
                              </a>
                        </li>
                        {/* <li class="">
                           <a href="support-details.html">Ticket
                              Details</a>
                        </li> */}
                        <li class="">
                           <a href="new-ticket.html">Agregar Solicitud</a>
                        </li>
                     </ul>
                  </li>
               
                  {/* <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-table"></span>
                        <span class="menu-text">Table</span>
                        <span class="toggle-icon"></span>
                     </a>
                     <ul>
                        <li class="">
                           <a href="basic-table.html">Basic
                              Table</a>
                        </li>
                        <li class="">
                           <a href="datatable.html">Data
                              Table</a>
                        </li>
                        <li class="">
                           <a href="dynamic-table.html">
                              Dynamic Table
                           </a>
                        </li>
                     </ul>
                  </li> */}

                  
                  <li class="menu-title mt-30">
                     <span>Ayuda</span>
                  </li>
                  <li class="has-child">
                     <a href="#" class="">
                        <span class="nav-icon uil uil-database"></span>
                        <span class="menu-text">Lista de Temas</span>
                        <span class="toggle-icon"></span>

                     </a>
                     <ul>
                        <li class="">
                           <a href="firestore.html">Ver todo</a>
                        </li>
                        {/* <li class="">
                           <a href="firestore-add.html">Add
                              New</a>
                        </li> */}
                     </ul>
                  </li>
                  
                  {/* <li class="menu-title mt-30">
                     <span>Pages</span>
                  </li>
                  <li class="has-child">
                     
                     <li class="">
                        <a href="terms.html">
                           <span class="nav-icon uil uil-question-circle"></span>
                           <span class="menu-text">Terms & Conditions</span>
                        </a>
                     </li>
                     <li class="">
                        <a href="maintenance.html">
                           <span class="nav-icon uil uil-airplay"></span>
                           <span class="menu-text">Maintenance</span>
                        </a>
                     </li>
                     <li class="">
                        <a href="404.html">
                           <span class="nav-icon uil uil-exclamation-triangle"></span>
                           <span class="menu-text">404</span>
                        </a>
                     </li>
                     <li class="">
                        <a href="coming-soon.html">
                           <span class="nav-icon uil uil-sync"></span>
                           <span class="menu-text">Coming Soon</span>
                        </a>
                     </li>
                     <li class="">
                        <a href="login.html">
                           <span class="nav-icon uil uil-signin"></span>
                           <span class="menu-text">Log In</span>
                        </a>
                     </li>
                     <li class="">
                        <a href="sign-up.html">
                           <span class="nav-icon uil uil-sign-out-alt"></span>
                           <span class="menu-text">Sign Up</span>
                        </a>
                     </li>
                  </li> */}
               </ul>
            </div>
         </div>

    </div>
  )
}

export default Sidebar