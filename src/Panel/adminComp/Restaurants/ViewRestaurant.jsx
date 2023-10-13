import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import {
  AddNewRestaurant,
  AllRestaurants,
  getRestaurantDetails,
} from "../adminLogin/httpServicesAdmin/adminApis";
import Swal from "sweetalert2";
import profilePic from "../../assets/img/profile_img1.png";
const ViewRestaurant = () => {
  const [slide, setSlide] = useState("RestoManage");
  const [sideBar, setSideBar] = useState();
  const [files, setFiles] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  let { id } = useParams();
  useEffect(() => {
    RestaurantsDetails();
  }, []);

  const onFileSelection = (e, key) => {
    setFiles({ ...files, [key]: e.target.files[0] });
  };

  const RestaurantsDetails = async (key) => {
    const { data } = await getRestaurantDetails(id);
    if (!data?.error) {
      let values = data?.results?.branch;
      setRestaurants(values);
      reset({
        name: values?.restaurantId?.restaurant_name,
        address: values?.restaurantId?.restaurant_address,
        desc: values?.description,
        code: values?.country_code,
        opTime: values?.restaurantId?.opening_time,
        closeTime: values?.restaurantId?.closing_time,
        email: values?.restaurantId?.email,
        number: values?.phone_number,
        password: values?.password,
      });
    }
  };

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("restaurant_name", data?.name);
    formData.append("restaurant_address", data?.address);
    formData.append("restaurant_description", data?.desc);
    formData.append("owner_name", data?.owner);
    formData.append("opening_time", data?.opTime);
    formData.append("closiing_time", data?.closeTime);
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
      RestaurantsDetails();
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
            <div className="col-12">
              <div className="row mx-0">
                <div className="col-12 design_outter_comman shadow mb-4 toggle_set">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>Restaurants Management Details </h2>
                      <div className="col-12">
                        {/* <div className="check_toggle">
                          <input
                            type="checkbox"
                            defaultChecked=""
                            name="check1"
                            id="check1"
                            className="d-none"
                          />
                          <label htmlFor="check1" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <form
                      className="form-design py-4 px-4 row"
                      action=""
                      onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group col-6">
                        <label>Logo</label>

                        <div class="account_profile position-relative d-inline-flex">
                          <div class="circle">
                            <img
                              class="profile-pic"
                              src={
                                restaurants?.restaurantId?.restaurant_logo
                                  ? restaurants?.restaurantId?.restaurant_logo
                                  : profilePic
                              }
                            />
                          </div>
                          <div class="p-image">
                            <i
                              onClick={() => {
                                document.getElementById("uploaderOne").click();
                              }}
                              className="fa fa-edit"></i>
                            <input
                              class="file-upload"
                              type="file"
                              accept="image/*"
                              id="uploaderOne"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-6 ">
                        <label>Cover Image</label>
                        <div class="account_profile position-relative d-inline-flex">
                          <div class="circle">
                            <img
                              class="profile-pic"
                              src={
                                restaurants?.restaurantId?.cover_image
                                  ? restaurants?.restaurantId?.cover_image
                                  : profilePic
                              }
                            />
                          </div>
                          <div class="p-image">
                            <i
                              onClick={() => {
                                document.getElementById("uploaderTwo").click();
                              }}
                              className="fa fa-edit"></i>
                            <input
                              class="file-upload"
                              type="file"
                              accept="image/*"
                              id="uploaderTwo"
                            />
                          </div>
                        </div>
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
                        <button
                          className="comman_btn d-inline-flex"
                          type="submit">
                          <span>Save Details</span>
                        </button>
                        <button
                          className="comman_btn d-inline-flex d-none"
                          id="reset1"
                          type="reset">
                          <span>Sreser</span>
                        </button>
                      </div>
                    </form>
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

export default ViewRestaurant;
