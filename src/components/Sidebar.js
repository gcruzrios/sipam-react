import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>

      

      <div className="sidebar__menu-group">
        <ul className="sidebar_nav">
          <li className="has-child open">
            <a href="#" className="active">
              <span className="nav-icon uil uil-create-dashboard"></span>
              <span className="menu-text">Dashboard</span>
              <span className="toggle-icon"></span>
            </a>
            <ul>
              <li className="active">
              <Link  className="menu-text" to={`/`}>  Inicio </Link>
              </li>
            </ul>
          </li>
          {/* <li className="has-child">
            <a href="#" className="">
              <span className="nav-icon uil uil-window-section"></span>
              <span className="menu-text">Layouts</span>
              <span className="toggle-icon"></span>
            </a>
            <ul>
              <li className="l_sidebar">
                <a href="#" data-layout="light">
                  Light Mode
                </a>
              </li>
              <li className="l_sidebar">
                <a href="#" data-layout="dark">
                  Dark Mode
                </a>
              </li>
            </ul>
          </li> */}

          <li className="menu-title mt-30">
              <span>Operaciones</span>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-envelope"></span>
                <span className="menu-text">Alertas</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <a href="inbox.html">Buzón Entrada</a>
                </li>
                {/* <li className="">
                           <a href="read-email.html">Read
                              Email</a>
                        </li> */}
              </ul>
            </li>

            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-folder"></span>
                <span className="menu-text">Seguimiento</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <a href="projects.html">Lista OBS</a>
                </li>
                {/* <li className="">
                           <a href="application-ui.html">Project
                              Details</a>
                        </li> */}
                {/* <li className="">
                           <a href="create.html">Create
                              Project</a>
                        </li> */}
              </ul>
            </li>
            <li>
              <a href="calendar.html" className="">
                <span className="nav-icon uil uil-calendar-alt"></span>
                <span className="menu-text">Calendario</span>
              </a>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-users-alt"></span>
                <span className="menu-text">Usuarios</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <a href="user-info.html">Agregar Usuario</a>
                </li>
                {/* <li className="">
                           <a href="users-datatable.html">Users
                              Table</a>
                        </li> */}
              </ul>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-at"></span>
                <span className="menu-text">OBS Contactos</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                {/* <li className="">
                           <a href="contact-2.html">Contact
                              Grid</a>
                        </li> */}
                <li className="">
                  <a href="contact-1.html">Lista Contactos OBS</a>
                </li>
                <li className="">
                  <a href="contact-3.html">Agregar Contacto</a>
                </li>
              </ul>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-user"></span>
                <span className="menu-text">Soporte</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <a href="support-ticket.html">Solicitudes</a>
                </li>
                {/* <li className="">
                           <a href="support-details.html">Ticket
                              Details</a>
                        </li> */}
                <li className="">
                  <a href="new-ticket.html">Agregar Solicitud</a>
                </li>
              </ul>
            </li>
            <li className="menu-title mt-30">
              <span>Ayuda</span>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-database"></span>
                <span className="menu-text">Lista de Temas</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <a href="firestore.html">Ver todo</a>
                </li>
                {/* <li className="">
                           <a href="firestore-add.html">Add
                              New</a>
                        </li> */}
              </ul>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

