import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import {
  AllTakeawayOrders,
} from "../adminLogin/httpServicesAdmin/adminApis";

const Dining = () => {
  const [slide, setSlide] = useState("DineManage");
  const [sideBar, setSideBar] = useState();
  const [takeAway, setTakeAway] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async (key) => {
    const { data } = await AllTakeawayOrders({
      from: "",
      to: "",
      type: "Dining",
    });
    if (!data?.error) {
      let values = data?.results?.orders;
      setTakeAway(values);
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
                <div className="col-12 design_outter_comman shadow">
                  <div className="row comman_header justify-content-between">
                    <div className="col">
                      <h2>Dining Order Management</h2>
                    </div>
                    <div className="col-3"></div>
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
                    <div className="form-group mb-0 col-2">
                      <button className="comman_btn w-100 d-flex justify-content-center">
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
                              <th>Order Id</th>
                              <th>Restaurant Address</th>
                              {/* <th>Customer Name</th> */}
                              <th>Mobile Number</th>
                              {/* <th>Order Details</th> */}
                              <th>Pickup Time</th>
                              {/* <th>Status</th> */}
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {takeAway?.map((item, index) => (
                              <tr>
                                <td>{item?.orderId}</td>
                                <td>{item?.restaurantId?.restaurant_address?.slice(0,25)}...</td>
                                <td>{item?.restaurantId?.phone_number}</td>
                              
                                <td>{item?.createdAt?.slice(0, 10)}</td>
                                <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    onClick={() =>
                                      navigate(
                                        `/admin/dashboard/orders/Dining-view/${item?._id}`
                                      )
                                    }>
                                    <span>View</span>
                                  </a>
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
    </div>
  );
};

export default Dining;
