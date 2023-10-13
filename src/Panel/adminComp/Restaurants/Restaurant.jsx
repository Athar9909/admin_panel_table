import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import {
  AddNewRestaurant,
  AllRestaurants,
} from "../adminLogin/httpServicesAdmin/adminApis";
import Swal from "sweetalert2";

const Restaurant = () => {
  const [slide, setSlide] = useState("RestoManage");
  const [sideBar, setSideBar] = useState();
  const [files, setFiles] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllRestaurants();
  }, []);

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const getAllRestaurants = async (key) => {
    const { data } = await AllRestaurants({
      from: "",
      to: "",
    });
    if (!data?.error) {
      let values = data?.results?.restaurants;
      setRestaurants(values);
    }
  };

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("restaurant_name", data?.name);
    formData.append("restaurant_address", data?.address);
    formData.append("restaurant_description", data?.desc);
    formData.append("owner_name", data?.owner);
    formData.append("country_code", data?.code);
    formData.append("opening_time", data?.opTime);
    formData.append("closing_time", data?.closeTime);
    formData.append("email", data?.email);
    formData.append("phone_number", data?.number);
    formData.append("password", data?.password);
    formData.append("logo", files?.logo);
    formData.append("cover_image", files?.cover);

    const res = await AddNewRestaurant(formData);
    if (!res?.data?.error) {
      Swal.fire({
        title: res?.data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
      document.getElementById("modalClose").click();
      document.getElementById("reset1").click();
      getAllRestaurants();
    }
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
            <div className="col-12 mb-4 d-flex align-items-center justify-content-end">
              {/* <button className="export_impo shadow me-3">
                <img src="assets/img/import.svg" alt="" /> Import
              </button>
              <button className="export_impo shadow me-3">
                <img src="assets/img/share-forward-line.svg" alt="" /> Export
              </button> */}
              <button
                data-bs-toggle="modal"
                data-bs-target="#AddResto"
                className="comman_btn">
                <span>Add New Restaurant</span>
              </button>
            </div>
            <div className="col-12">
              <div className="row mx-0">
                <div className="col-12 design_outter_comman shadow">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>Restaurants Management</h2>
                    </div>
                  </div>
                  <form
                    className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                    action="">
                    <div className="form-group mb-0 col-2">
                      <label htmlFor="">Filter By: </label>
                      <select
                        className="form-select form-control"
                        aria-label="Default select example">
                        <option selected="">All</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="form-group mb-0 col">
                      <label htmlFor="">Search</label>
                      <input type="search" className="form-control" />
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
                              <th>
                                <form className="table_radiaa d-flex align-items-center justify-content-center">
                                  <div className="check_radio">
                                    <input
                                      type="checkbox"
                                      name="radia1"
                                      id="radia1"
                                      className="d-none"
                                    />
                                    <label htmlFor="radia1" />
                                  </div>
                                </form>
                              </th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Mobile Number</th>
                              <th>Status</th>
                              <th>Balance</th>
                              <th>Created At</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {restaurants?.map((item, index) => (
                              <tr>
                                <td>
                                  <form className="table_radiaa d-flex align-items-center justify-content-center">
                                    <div className="check_radio">
                                      <input
                                        type="checkbox"
                                        name="radia2"
                                        id={item?._id}
                                        className="d-none"
                                      />
                                      <label htmlFor={item?._id} />
                                    </div>
                                  </form>
                                </td>
                                <td>{item?.restaurantId?.restaurant_name}</td>
                                <td>{item?.restaurantId?.email}</td>
                                <td>{item?.phone_number}</td>
                                <td>Approved</td>
                                <td>701.18 SAR</td>
                                <td>{item?.createdAt?.slice(0, 10)}</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    onClick={() =>
                                      navigate(
                                        `/admin/dashboard/restaurants-view/${item?._id}`
                                      )
                                    }>
                                    <span>View</span>
                                  </a>
                                  {/* <a
                                    className="comman_btn bg-danger table_viewbtn ms-1"
                                    href="javascript:;">
                                    <span>Delete</span>
                                  </a> */}
                                </td>
                              </tr>
                            ))}
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
      </div>
      <div
        className="modal fade comman_modal edit_modal"
        id="AddResto"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Restaurant
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="modalClose"
              />
            </div>

            <div className="modal-body p-0">
              <form
                className="form-design py-4 px-4 row"
                action=""
                onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group col-6">
                  <label htmlFor="upload_video1"> Upload Logo</label>
                  <input
                    type="file"
                    className="form-control"
                    defaultValue=""
                    name="logo"
                    id="upload_video1"
                    onChange={(e) => onFileSelection(e, "logo")}
                  />
                </div>
                <div className="form-group col-6 ">
                  <label htmlFor="upload_video2"> Upload Cover</label>
                  <input
                    type="file"
                    className="form-control"
                    defaultValue=""
                    name="cover"
                    id="upload_video2"
                    onChange={(e) => onFileSelection(e, "cover")}
                  />
                </div>

                <div className="form-group col-4">
                  <label htmlFor="">Restaurant Name</label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.name,
                    })}
                    name="name"
                    placeholder="Enter Restaurant Name "
                  />
                  {errors.name && (
                    <small className="errorText  ">
                      {errors.name?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-8">
                  <label htmlFor="">Restaurant Address</label>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.address,
                    })}
                    name="address"
                    placeholder="Enter Restaurant Address"
                  />
                  {errors.address && (
                    <small className="errorText  ">
                      {errors.address?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-4">
                  <label htmlFor="">Country Code</label>
                  <input
                    {...register("code", { required: true })}
                    type="number"
                    className={classNames("form-control", {
                      "is-invalid": errors.code,
                    })}
                    name="code"
                    placeholder="Enter country code"
                  />
                  {errors.code && (
                    <small className="errorText  ">
                      {errors.code?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-8">
                  <label htmlFor="">Restaurant Description</label>
                  <input
                    {...register("desc", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.desc,
                    })}
                    name="desc"
                    placeholder="Enter Restaurant Description"
                  />
                  {errors.desc && (
                    <small className="errorText  ">
                      {errors.desc?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-4">
                  <label htmlFor="">Owner Name</label>
                  <input
                    {...register("owner", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.owner,
                    })}
                    name="owner"
                    placeholder="Enter Owner Name"
                  />
                  {errors.owner && (
                    <small className="errorText  ">
                      {errors.owner?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-4">
                  <label htmlFor="">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.email,
                    })}
                    name="email"
                    placeholder="Enter Email Address"
                  />
                  {errors.email && (
                    <small className="errorText  ">
                      {errors.email?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-4">
                  <label htmlFor="">Phone Number</label>
                  <input
                    {...register("number", { required: true })}
                    type="number"
                    className={classNames("form-control", {
                      "is-invalid": errors.number,
                    })}
                    name="number"
                    placeholder="Enter contact number"
                  />
                  {errors.number && (
                    <small className="errorText  ">
                      {errors.number?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-4">
                  <label htmlFor="">Password</label>
                  <input
                    {...register("password", { required: true })}
                    type="password"
                    className={classNames("form-control", {
                      "is-invalid": errors.password,
                    })}
                    name="password"
                    placeholder="*********"
                  />
                  {errors.password && (
                    <small className="errorText  ">
                      {errors.password?.message}
                    </small>
                  )}
                </div>
                <div className="form-group col-4">
                  <label htmlFor="">Opening Time</label>
                  <input
                    {...register("opTime", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.opTime,
                    })}
                    name="opTime"
                    placeholder="Enter Opeinig Time"
                  />
                  {errors.opTime && (
                    <small className="errorText  ">
                      {errors.opTime?.message}
                    </small>
                  )}
                </div>

                <div className="form-group col-4">
                  <label htmlFor="">Closing Time</label>
                  <input
                    {...register("closeTime", { required: true })}
                    type="text"
                    className={classNames("form-control", {
                      "is-invalid": errors.closeTime,
                    })}
                    name="closeTime"
                    placeholder="Enter Closing Time"
                  />
                  {errors.closeTime && (
                    <small className="errorText  ">
                      {errors.closeTime?.message}
                    </small>
                  )}
                </div>

                <div className="form-group mb-0 col-12 text-center">
                  <button className="comman_btn d-inline-flex" type="submit">
                    <span>Save Details</span>
                  </button>
                  <button className="comman_btn d-inline-flex d-none" id="reset1" type="reset">
                    <span>Sreser</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
