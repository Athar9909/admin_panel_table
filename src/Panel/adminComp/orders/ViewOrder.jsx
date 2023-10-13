import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import {
  AllTakeawayOrders,
  OrdersDetails,
} from "../adminLogin/httpServicesAdmin/adminApis";

const ViewOrder = () => {
  const [slide, setSlide] = useState("takeManage");
  const [sideBar, setSideBar] = useState();
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async (key) => {
    const { data } = await OrdersDetails(id);
    if (!data?.error) {
      let values = data?.results?.order;
      setOrder(values);
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
                      <h2>{order?.type} Order Details </h2>
                    </div>
                  </div>
                  <div className="row">
                    <form className="row align-items-center justify-content-center form-design position-relative p-4 py-5">
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
                      <div className="col-10">
                        <div className="row">
                          <div className="form-group col-6">
                            <label htmlFor="">Order Id</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={order?.orderId}
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="">Restaurant Address</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={
                                order?.restaurantId?.restaurant_address
                              }
                              name="name"
                              id="name"
                            />
                          </div>

                          <div className="form-group col-6">
                            <label htmlFor="">Table Id</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={order?.tableId?.name}
                              name="name"
                              id="name"
                            />
                          </div>
                          {/* <div className="form-group col-6">
                            <label htmlFor="">Customer Name</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="Sonam Malik"
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="">Mobile Number</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue="+20 989 8888888"
                              name="name"
                              id="name"
                            />
                          </div> */}
                          <div className="form-group col-6">
                            <label htmlFor="">Order Details</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={order?.cuisines?.map(
                                (item) => item?.cuisineId?.name + ","
                              )}
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="">Pickup Time</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={order?.createdAt?.slice(0, 10)}
                              name="name"
                              id="name"
                            />
                          </div>
                          <div className="form-group col-6">
                            <label htmlFor="">Status</label>
                            <input
                              type="text"
                              className="form-control"
                              defaultValue={order?.status}
                              name="name"
                              id="name"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
