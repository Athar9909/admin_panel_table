import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import {
  AllTakeawayOrders,
  DashboardData,
  exportBranchData,
  exportOrderData,
} from "../adminLogin/httpServicesAdmin/adminApis";
import { t } from "i18next";

const Dashboard = () => {
  const [slide, setSlide] = useState("Dash");
  const [sideBar, setSideBar] = useState();
  const [takeAway, setTakeAway] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState({ from: "", to: "" });
  const [count, setCount] = useState();

  useEffect(() => {
    getAllOrders();
    getDashData();
  }, []);

  const getDashData = async (key) => {
    const { data } = await DashboardData();
    if (!data?.error) {
      let values = data?.results;
      setCount(values);
    }
  };

  const getAllOrders = async () => {
    const { data } = await AllTakeawayOrders({
      from: values?.from,
      till: values?.to,
    });
    if (!data?.error) {
      let values = data?.results?.orders;
      setTakeAway(values);
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

  const ExportBranch = async () => {
    const { data } = await exportBranchData();
    if (!data.error) {
      window.open(data?.results?.file);
    }
  };

  const ExportOrder = async (type) => {
    const { data } = await exportOrderData({
      type: type,
    });
    if (!data.error) {
      window.open(data?.results?.file);
    }
  };

  return (
    <div className="admin_main">
      <Sidebar slide={slide} getBarClick={getBarClick} />
      <div className="admin_main_inner">
        <Profile />
        <div className="admin_panel_data height_adjust">
          <div className="row dashboard_part justify-content-center">
            <div className="col-12">
              <div className="row ms-0 mb-3 justify-content-start">
                <div className="col-4 d-flex align-items-stretch mb-4">
                  <a
                    className="row dashboard_box box_design w-100 justify-content-center text-decoration-none"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to Export Report"
                    onClick={() => {
                      ExportOrder("Dining");
                    }}>
                    <div className="col-12">
                      <span className="dashboard_icon mx-auto mb-3">
                        <img src="../assets/img/delivery-order.svg" alt="" />
                      </span>
                    </div>
                    <div className="col-12">
                      <div className="dashboard_boxcontent text-center">
                        <h2>{t("Dining")}</h2>
                        <span>{count?.diningOrders}</span>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-4 d-flex align-items-stretch mb-4">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to Export Report"
                    onClick={() => {
                      ExportOrder("Takeaway");
                    }}
                    className="row dashboard_box box_design w-100 justify-content-center  text-decoration-none">
                    <div className="col-12">
                      <span className="dashboard_icon mx-auto mb-3">
                        <img src="../assets/img/takeaway-color.svg" alt="" />
                      </span>
                    </div>
                    <div className="col-12">
                      <div className="dashboard_boxcontent text-center">
                        <h2>{t("Takeaway")}</h2>
                        <span>{count?.takeAwayOrders}</span>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-4 d-flex align-items-stretch mb-4">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Click to Export Report"
                    onClick={() => {
                      ExportBranch();
                    }}
                    className="row dashboard_box box_design w-100 justify-content-center  text-decoration-none">
                    <div className="col-12">
                      <span className="dashboard_icon mx-auto mb-3">
                        <img src="../assets/img/hotel-color.svg" alt="" />
                      </span>
                    </div>
                    <div className="col-12">
                      <div className="dashboard_boxcontent text-center">
                        <h2>{t("Restaurant")}</h2>
                        <span>{count?.totalRestaurants}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 design_outter_comman shadow">
              <div className="row comman_header justify-content-between">
                <div className="col-auto">
                  <h2>{t("Latest")}</h2>
                </div>
              </div>
              <form
                className="form-design py-4 px-3 help-support-form row align-items-end justify-content-between"
                action="">
                <div className="form-group mb-0 col-5">
                  <label htmlFor="">{t("from")}</label>
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
                  <label htmlFor="">{t("To")}</label>
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
                      getAllOrders();
                    }}
                    className="comman_btn text-decoration-none">
                    <span>{t("Search")}</span>
                  </a>
                </div>
              </form>
              <div className="row">
                <div className="col-12 comman_table_design px-0">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead>
                        <tr>
                          <th>{t("OrderId")}</th>
                          <th>{t("RestAddress")}</th>
                          {/* <th>Customer Name</th> */}
                          <th>{t("No_")}</th>
                          {/* <th>Order Details</th> */}
                          <th>{t("Time")}</th>
                          {/* <th>Status</th> */}
                          <th>{t("Action")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {takeAway?.map((item, index) => (
                          <tr>
                            <td>
                              <a
                                className="tag_class1"
                                onClick={() =>
                                  navigate(
                                    `/admin/dashboard/orders/view/${item?._id}`
                                  )
                                }>
                                {item?.orderId}
                              </a>
                            </td>
                            <td>
                              {item?.restaurantId?.restaurant_address?.slice(
                                0,
                                25
                              )}
                              ...
                            </td>
                            <td>{item?.restaurantId?.phone_number}</td>

                            <td>{item?.createdAt?.slice(0, 10)}</td>
                            <td>
                              <a
                                className="comman_btn table_viewbtn"
                                onClick={() =>
                                  navigate(
                                    `/admin/dashboard/orders/view/${item?._id}`
                                  )
                                }>
                                <span>{t("View")}</span>
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
  );
};

export default Dashboard;
