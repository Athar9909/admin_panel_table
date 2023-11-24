import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import { AllTakeawayOrders } from "../adminLogin/httpServicesAdmin/adminApis";
import { t } from "i18next";

const Takeaway = () => {
  const [slide, setSlide] = useState("takeManage");
  const [sideBar, setSideBar] = useState();
  const [takeAway, setTakeAway] = useState([]);
  const [values, setValues] = useState({ from: "", to: "" });
  const navigate = useNavigate();

  useEffect(() => {
    getAllOrders();
  }, []);

  const getAllOrders = async (key) => {
    const { data } = await AllTakeawayOrders({
      from: values?.from,
      till: values?.to,
      type: "Take Away",
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
                      <h2>{t("TakeawayM")}</h2>
                    </div>
                    <div className="col-3"></div>
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
                      <label htmlFor="">{t("to")}</label>
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
                                <td>{item?.orderId}</td>
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
      </div>
    </div>
  );
};

export default Takeaway;
