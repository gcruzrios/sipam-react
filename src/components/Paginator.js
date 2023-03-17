import React from "react";



const Paginator = () => {
  return (
    <div>
      <div className="d-flex justify-content-end pt-30">
        <nav className="dm-page ">
          <ul className="dm-pagination d-flex">
            <li className="dm-pagination__item">
              <a href="#" className="dm-pagination__link pagination-control">
                <span className="la la-angle-left"></span>
              </a>
              <a href="#" className="dm-pagination__link">
                <span className="page-number">1</span>
              </a>
              <a href="#" className="dm-pagination__link active">
                <span className="page-number">2</span>
              </a>
              <a href="#" className="dm-pagination__link">
                <span className="page-number">3</span>
              </a>
              <a href="#" className="dm-pagination__link pagination-control">
                <span className="page-number">...</span>
              </a>
              <a href="#" className="dm-pagination__link">
                <span className="page-number">12</span>
              </a>
              <a href="#" className="dm-pagination__link pagination-control">
                <span className="la la-angle-right"></span>
              </a>
              <a href="#" className="dm-pagination__option"></a>
            </li>
            <li className="dm-pagination__item">
              <div className="paging-option">
                <select name="page-number" className="page-selection">
                  <option value="20">20/page</option>
                  <option value="40">40/page</option>
                  <option value="60">60/page</option>
                </select>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Paginator;
