import React from "react";
import TableData from "./TableData";

const Tablaobs = () => {
  return (
    <div>
      <table className="table mb-0 table-borderless">
        <thead>
          <tr className="userDatatable-header">
            {/* header */}
            <th>
              <span className="userDatatable-title userDatatable-title">
                user
              </span>
            </th>
            <th>
              <span className="userDatatable-title">emaill</span>
            </th>
            <th>
              <span className="userDatatable-title">company</span>
            </th>
            <th>
              <span className="userDatatable-title">position</span>
            </th>
            <th>
              <span className="userDatatable-title">join date</span>
            </th>
            <th>
              <span className="userDatatable-title">status</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* data */}
            {/* <TableData /> */}
            <td>
              <div className="userDatatable-content">Kellie Marquot</div>
            </td>
            <td>
              <div className="userDatatable-content">john-keller@gmail.com</div>
            </td>
            <td>
              <div className="userDatatable-content">Business Development</div>
            </td>
            <td>
              <div className="userDatatable-content">Web Developer</div>
            </td>
            <td>
              <div className="userDatatable-content">January 20, 2020</div>
            </td>
            <td>
              <div className="userDatatable-content d-inline-block">
                <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                  active
                </span>
              </div>
            </td>
            <td>
              <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                <li>
                  <a href="#" className="view">
                    <i className="uil uil-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="edit">
                    <i className="uil uil-edit"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="remove">
                    <i className="uil uil-trash-alt"></i>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tablaobs;

