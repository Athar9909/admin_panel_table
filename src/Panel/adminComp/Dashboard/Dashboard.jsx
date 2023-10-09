import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";

const Dashboard = () => {
  const [slide, setSlide] = useState("Dash");
  const [sideBar, setSideBar] = useState();
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const onSubmit = async (data) => {
    let addons = [];
    // (selectedAddon.optionSelected || [])?.map((item) => {
    //   addons.push(item?.value);
    // });
    // let formData = new FormData();
    // formData.append("name", data?.name);
    // formData.append("categoryId", data?.categoryId);
    // formData.append("mainIngredients", JSON.stringify(data?.mainIngredients));
    // formData.append("addOns", JSON.stringify(addons));
    // formData.append("price", data?.price);
    // formData.append("image", files?.cuisineImg);

    // const res = await AddNewCuisine(formData);
    // if (!res?.data?.error) {
    //   Swal.fire({
    //     title: res?.data?.message,
    //     icon: "success",
    //     confirmButtonText: "Okay",
    //     confirmButtonColor: "#e25829",
    //   });
    //   document.getElementById("modalClose").click();
    //   document.getElementById("reset1").click();
    //   getAllCuisines();
    //   setSelectedAddon([
    //     {
    //       optionSelected: [],
    //     },
    //   ]);
    // }
  };

  const getBarClick = (val) => {
    console.log(val);
    setSideBar(val);
  };

  return (
    <div className="admin_main">
      <Sidebar slide={slide} getBarClick={getBarClick} />
      <div className="admin_main_inner">
        <Profile />
        <div className="admin_panel_data height_adjust">
          <div className="row dashboard_part justify-content-center">
            <div className="col-12 mb-4">
              <div className="row">
                <div className="col">
                  <div className="row statics_box align-items-center">
                    <div className="col">
                      <div className="statics_data">
                        <span>Delivery Orders</span>
                        <h3 className="mb-0">0</h3>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="statics_box_img">
                        <img src="../assets/img/delivery-order.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row statics_box align-items-center">
                    <div className="col">
                      <div className="statics_data">
                        <span>Takeaway Orders</span>
                        <h3 className="mb-0">0</h3>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="statics_box_img">
                        <img src="../assets/img/delivery-order.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row statics_box align-items-center">
                    <div className="col">
                      <div className="statics_data">
                        <span>Users</span>
                        <h3 className="mb-0">0</h3>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="statics_box_img">
                        <img src="../assets/img/delivery-order.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row statics_box align-items-center">
                    <div className="col">
                      <div className="statics_data">
                        <span>Restaurant</span>
                        <h3 className="mb-0">0</h3>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="statics_box_img">
                        <img src="../assets/img/delivery-order.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="row statics_box align-items-center">
                    <div className="col">
                      <div className="statics_data">
                        <span>open tickets</span>
                        <h3 className="mb-0">0</h3>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="statics_box_img">
                        <img src="../assets/img/delivery-order.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 design_outter_comman shadow">
              <div className="row comman_header justify-content-between">
                <div className="col-auto">
                  <h2>Latest Customers</h2>
                </div>
              </div>
              <form
                className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                action="">
                <div className="form-group mb-0 col-5">
                  <label htmlFor="">From</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group mb-0 col-5">
                  <label htmlFor="">To</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group mb-0 col-auto">
                  <button className="comman_btn">
                    <span>Search</span>
                  </button>
                </div>
              </form>
              <div className="row">
                <div className="col-12 comman_table_design px-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th>User NAME</th>
                          <th>Email</th>
                          <th>Mobile Number</th>
                          <th>Status</th>
                          <th>Registered At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Mohd. Arbab</td>
                          <td>xyz@gmail.com</td>
                          <td>+20 9876543210</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                className="me-1 status_img"
                                src="assets/img/pending.png"
                                alt=""
                              />{" "}
                              Pending
                            </div>
                          </td>
                          <td>19 Jan 2022</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Mohd. Arbab</td>
                          <td>xyz@gmail.com</td>
                          <td>+20 9876543210</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                className="me-1 status_img"
                                src="assets/img/accpted.png"
                                alt=""
                              />{" "}
                              Accepted
                            </div>
                          </td>
                          <td>19 Jan 2022</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Mohd. Arbab</td>
                          <td>xyz@gmail.com</td>
                          <td>+20 9876543210</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                className="me-1 status_img"
                                src="assets/img/accpted.png"
                                alt=""
                              />{" "}
                              Accepted
                            </div>
                          </td>
                          <td>19 Jan 2022</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Mohd. Arbab</td>
                          <td>xyz@gmail.com</td>
                          <td>+20 9876543210</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                className="me-1 status_img"
                                src="assets/img/pending.png"
                                alt=""
                              />{" "}
                              Pending
                            </div>
                          </td>
                          <td>19 Jan 2022</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Mohd. Arbab</td>
                          <td>xyz@gmail.com</td>
                          <td>+20 9876543210</td>
                          <td>
                            <div className="d-flex align-items-center justify-content-center">
                              <img
                                className="me-1 status_img"
                                src="assets/img/pending.png"
                                alt=""
                              />{" "}
                              Pending
                            </div>
                          </td>
                          <td>19 Jan 2022</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
