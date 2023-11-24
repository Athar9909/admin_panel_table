import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/img/logoNN.png";
import dash from "../assets/img/dashboard.svg";
import resto from "../assets/img/restarunt-management.svg";
import take from "../assets/img/takeaway.svg";
import Dine from "../assets/img/dining.svg";
import transac from "../assets/img/transaction.svg";
import log from "../assets/img/logout-circle-r-line.svg";
import i18next, { t } from "i18next";
import Cookies from "js-cookie";
import { LngState } from "../../atom";
import { useSetRecoilState } from "recoil";
const Sidebar = ({ slide, getBarClick, getBar }) => {
  const navigate = useNavigate();
  const [SlideState, setSlideState] = useState("");
  const width = window.innerWidth;
  const [sideBar, setSideBar] = useState(width < 768 ? false : true);
  const setLang = useSetRecoilState(LngState);

  useEffect(() => {
    setSlideState(slide);
  }, []);

  let token = localStorage.getItem("token-admin");

  console.log(slide, "kjkj");

  const Logout = () => {
    i18next.changeLanguage("en");
    setLang("en");
    Cookies.set("i18nextLng", "en");
    localStorage.removeItem("token-admin");
    navigate("/admin/login");

    window.location.reload();
  };

  return (
    <div className="siderbar_section">
      <div className="siderbar_inner">
        <div className="sidebar_logo">
          <a>
            <img src={logo} alt="Logo" />{" "}
          </a>
        </div>
        <div className="sidebar_menus">
          <ul className="list-unstyled ps-0 m-0">
            <li>
              <a
                className={
                  slide === "Dash"
                    ? "active text-decoration-none"
                    : " text-decoration-none"
                }
                onClick={() => navigate("/admin/dashboard")}>
                <img src={dash} alt="" />
                {t("Dashboard")}
              </a>
            </li>

            <li>
              <a
                className={
                  slide === "RestoManage"
                    ? "active text-decoration-none"
                    : " text-decoration-none"
                }
                onClick={() => navigate("/admin/dashboard/restaurants-manage")}>
                <img src={resto} alt="" />
                {t("RestaurantM")}
              </a>
            </li>

            <li>
              <a
                className={
                  slide === "takeManage"
                    ? "active text-decoration-none"
                    : " text-decoration-none"
                }
                onClick={() => navigate("/admin/dashboard/orders/takeaway")}>
                <img src={take} alt="" />
                {t("TakeawayM")}
              </a>
            </li>
            <li>
              <a
                className={
                  slide === "DineManage"
                    ? "active text-decoration-none"
                    : " text-decoration-none"
                }
                onClick={() => navigate("/admin/dashboard/orders/Dining")}>
                <img src={Dine} alt="" />
                {t("DiningM")}
              </a>
            </li>
            <li>
              <a
                className={
                  slide === "transManage"
                    ? "active text-decoration-none"
                    : " text-decoration-none"
                }
                onClick={() => navigate("/admin/dashboard/transactions")}>
                <img src={transac} alt="" />
                {t("TransM")}
              </a>
            </li>
            <li>
              <a
                className={
                  slide === "NotiManage"
                    ? "active text-decoration-none"
                    : " text-decoration-none"
                }
                onClick={() => navigate("/admin/dashboard/Notifications")}>
                {/* <img src={transac} alt="" /> */}
                <i
                  class={"fa fa-bell me-2"}
                  style={{
                    color: "#fff",
                  }}
                  aria-hidden="true"></i>
                {t("NotiM")}
              </a>
            </li>
            {/* <li>
              <a className="" href="dining-with-food-management.html">
                <img src="assets/img/food.svg" alt="" />
                Dining with Food Management{" "}
              </a>
            </li> */}
            {/* <li>
              <a className="" href="category-management.html">
                <img src="assets/img/category.svg" alt="" />
                Category Management{" "}
              </a>
            </li>
            <li>
              <a className="" href="cuisines-management.html">
                <img src="assets/img/Cuisines.svg" alt="" />
                Cuisines(Menu) Management
              </a>
            </li>
            <li>
              <a className="" href="payout-restaurant-management.html">
                <img src="assets/img/payout.svg" alt="" />
                Payout Restaurant Management
              </a>
            </li>
          
            <li>
              <a className="" href="promo-code-management.html">
                <img src="assets/img/promocode.svg" alt="" />
                Promo Code Management
              </a>
            </li>
            <li>
              <a className="" href="help-&-support-management.html">
                <img src="assets/img/help-support.svg" alt="" />
                Help &amp; Support Management
              </a>
            </li>
            <li>
              <a className="" href="content-management.html">
                <img src="assets/img/content-management.svg" alt="" />
                Content Management
              </a>
            </li> */}
            <li>
              <a className=" text-decoration-none" onClick={() => Logout()}>
                <img src={log} alt="" />
                {t("Logout")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
