import React from "react";
import Addobs from "./Addobs";
import Paginator from "./Paginator";
import SearchName from "./SearchName";
import Tablaobs from "./Tablaobs";

const Listobs = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumb-main user-member justify-content-sm-between ">
          <SearchName />
          <div className="action-btn">
            <a
              href="#"
              className="btn px-15 btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#new-member"
            >
              <i className="las la-plus fs-16"></i>users list datatable
            </a>
            <Addobs />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
           <Tablaobs /> 
           
        </div>
          <Paginator />
        </div>
      </div>
    </>
  );
};

export default Listobs;

