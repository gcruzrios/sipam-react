import React from "react";

const Addobs = () => {
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade new-member "
        id="new-member"
        role="dialog"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content  radius-xl">
            <div class="modal-header">
              <h6 class="modal-title fw-500" id="staticBackdropLabel">
                Create project
              </h6>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="img/svg/x.svg" alt="x" class="svg" />
              </button>
            </div>
            <div class="modal-body">
              <div class="new-member-modal">
                <form>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Duran Clayton"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <div class="category-member">
                      <select
                        class="js-example-basic-single js-states form-control"
                        id="category-member"
                      >
                        <option value="JAN">1</option>
                        <option value="FBR">2</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group mb-20">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Project description"
                    ></textarea>
                  </div>
                  <div class="form-group textarea-group">
                    <label class="mb-15">status</label>
                    <div class="d-flex">
                      <div class="project-task-list__left d-flex align-items-center">
                        <div class="checkbox-group d-flex me-50 pe-10">
                          <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                            <input
                              class="checkbox"
                              type="checkbox"
                              id="check-grp-1"
                              checked
                            />
                            <label
                              for="check-grp-1"
                              class="fs-14 color-light strikethrough"
                            >
                              status
                            </label>
                          </div>
                        </div>
                        <div class="checkbox-group d-flex me-50 pe-10">
                          <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                            <input
                              class="checkbox"
                              type="checkbox"
                              id="check-grp-2"
                            />
                            <label
                              for="check-grp-2"
                              class="fs-14 color-light strikethrough"
                            >
                              Deactivated
                            </label>
                          </div>
                        </div>
                        <div class="checkbox-group d-flex">
                          <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                            <input
                              class="checkbox"
                              type="checkbox"
                              id="check-grp-3"
                            />
                            <label
                              for="check-grp-3"
                              class="fs-14 color-light strikethrough"
                            >
                              bloked
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mb-25">
                    <div class="form-group mb-10">
                      <label for="name47">project member</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name47"
                        placeholder="Search members"
                      />
                    </div>
                    <ul class="d-flex flex-wrap mb-20 user-group-people__parent">
                      <li>
                        <a href="#">
                          <img
                            class="rounded-circle wh-34"
                            src="img/tm1.png"
                            alt="author"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            class="rounded-circle wh-34"
                            src="img/tm2.png"
                            alt="author"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            class="rounded-circle wh-34"
                            src="img/tm3.png"
                            alt="author"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            class="rounded-circle wh-34"
                            src="img/tm4.png"
                            alt="author"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img
                            class="rounded-circle wh-34"
                            src="img/tm5.png"
                            alt="author"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="d-flex new-member-calendar">
                    <div class="form-group w-100 me-sm-15 form-group-calender">
                      <label for="datepicker">start Date</label>
                      <div class="position-relative">
                        <input
                          type="text"
                          class="form-control"
                          id="datepicker"
                          placeholder="mm/dd/yyyy"
                        />
                        <a href="#">
                          <img
                            class="svg"
                            src="img/svg/chevron-right.svg"
                            alt="chevron-right.svg"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="form-group w-100 form-group-calender">
                      <label for="datepicker2">End Date</label>
                      <div class="position-relative">
                        <input
                          type="text"
                          class="form-control"
                          id="datepicker2"
                          placeholder="mm/dd/yyyy"
                        />
                        <a href="#">
                          <img
                            class="svg"
                            src="img/svg/chevron-right.svg"
                            alt="chevron-right.svg"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="button-group d-flex pt-25">
                    <button class="btn btn-primary btn-default btn-squared text-capitalize">
                      add new project
                    </button>

                    <button
                      type="button"
                      class="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                      data-bs-dismiss="modal"
                    >
                      cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
    </div>
  );
};

export default Addobs;

