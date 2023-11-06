import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import { AllNotifications } from "../adminLogin/httpServicesAdmin/adminApis";

const Notifications = () => {
  const [slide, setSlide] = useState("NotiManage");
  const [sideBar, setSideBar] = useState();
  const [List, setList] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState({ from: "", to: "" });

  useEffect(() => {
    getAllNotifications();
  }, []);

  const getAllNotifications = async (key) => {
    const { data } = await AllNotifications({
      from: values?.from,
      till: values?.to,
      //   type: "Take Away",
    });
    if (!data?.error) {
      let values = data?.results?.notifications;
      setList(values);
      setValues({ from: "", to: "" });
    }
  };

  const handleDate = (e) => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
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
                      <h2>Notifications Management</h2>
                    </div>
                    <div className="col-3"></div>
                  </div>
                  <form
                    className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between d-none"
                    action="">
                    <div className="form-group mb-0 col-5">
                      <label htmlFor="">From</label>
                      <input
                        type="date"
                        className="form-control"
                        name="from"
                        id="dashFrom"
                        value={values.from}
                        onChange={handleDate}
                      />
                    </div>
                    <div className="form-group mb-0 col-5">
                      <label htmlFor="">To</label>
                      <input
                        type="date"
                        className="form-control"
                        name="to"
                        id="dashTo"
                        value={values.to}
                        onChange={handleDate}
                      />
                    </div>
                    <div className="form-group mb-0 col-auto">
                      <a
                        onClick={() => {
                          getAllNotifications();
                        }}
                        className="comman_btn text-decoration-none">
                        <span>Search</span>
                      </a>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12 comman_table_design px-0">
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>Date</th>
                              <th>Order Id</th>
                              <th>Restaurant Name</th>
                              <th>Title</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {List?.map((item, index) => (
                              <tr>
                                <td>{item?.createdAt?.slice(0, 10)}</td>
                                <td>
                                  <a
                                    className="tag_class1"
                                    onClick={() =>
                                      navigate(
                                        `/admin/dashboard/orders/view/${item?.orderId?._id}`
                                      )
                                    }>
                                    {item?.orderId?.orderId}
                                  </a>
                                </td>
                                <td>{item?.restaurantId?.restaurant_name}</td>

                                <td>{item?.title_en}</td>
                                <td>{item?.description_en}</td>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
