import React from "react";

const TableData = () => {
  return (
    <div>
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
    </div>
  );
};

export default TableData;
