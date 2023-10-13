import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import {
  AllTakeawayOrders,
  AllTransactions,
} from "../adminLogin/httpServicesAdmin/adminApis";

const AllTransaction = () => {
  const [slide, setSlide] = useState("transManage");
  const [sideBar, setSideBar] = useState();
  const [List, setList] = useState([]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getAllTransaction();
  }, []);

  const getAllTransaction = async (key) => {
    const { data } = await AllTransactions({
      from: "",
      to: "",
      //   type: "Take Away",
    });
    if (!data?.error) {
      let values = data?.results?.transactions;
      setList(values);
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
                      <h2>Transaction Management</h2>
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
                              <th>Date</th>
                              <th>Restaurant Name</th>
                              <th>Table Id</th>
                              <th>Order Type</th>
                              <th>Transaction Id</th>
                              <th>Order Id</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {List?.map((item, index) => (
                              <tr>
                                <td>{item?.createdAt?.slice(0, 10)}</td>
                                <td>{item?.restaurantId?.restaurant_name}</td>
                                <td>{item?.orderId?.tableId?.name}</td>
                                <td>{item?.type}</td>
                                <td>{item?.transactionId}</td>
                                <td>{item?.orderId?.orderId}</td>
                                <td>{item?.orderId?.total}</td>
                                {/* <td>
                                  <a
                                    className="comman_btn table_viewbtn"
                                    href="transaction-management-view.html">
                                    <span>View</span>
                                  </a>
                                </td> */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="row Total_amt mx-0 py-3">
                    <div className="col-6">
                      <strong>Total Amount: </strong>
                    </div>
                    <div className="col-6 text-end">
                      <span>500 SAR</span>
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

export default AllTransaction;
