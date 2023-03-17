import React from "react";

const SearchName = () => {
  return (
    <div>
      <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
        <div className="d-flex align-items-center user-member__title justify-content-center me-sm-25">
          <h4 className="text-capitalize fw-500 breadcrumb-title">
            users list datatable
          </h4>
          <span className="sub-title ms-sm-25 ps-sm-25">Home</span>
        </div>

        <form
          action="/"
          className="d-flex align-items-center user-member__form my-sm-0 my-2"
        >
          <img src="img/svg/search.svg" alt="search" className="svg" />
          <input
            className="form-control me-sm-2 border-0 box-shadow-none"
            type="search"
            placeholder="Search by Name"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchName;

