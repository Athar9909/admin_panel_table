import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import sideBtn from "../assets/img/bar-chart-horizontal-line.svg";
import flag1 from "../assets/img/saudi_flag1.png";
import flagUs from "../assets/img/united-kingdom.png";
import profileImg from "../assets/img/profile_img1.png";
import { LngState } from "../../atom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import i18next from "i18next";
import Cookies from "js-cookie";
import { ChnageLanguage } from "./adminLogin/httpServicesAdmin/adminApis";
const Profile = ({ slide, getBarClick, getBar }) => {
  const navigate = useNavigate();
  const [SlideState, setSlideState] = useState("");
  const width = window.innerWidth;
  const [sideBar, setSideBar] = useState(width < 768 ? false : true);
  const Lang = useRecoilValue(LngState);
  const setLang = useSetRecoilState(LngState);

  const [currentLangCode, setCurrentLangCode] = useState(
    Cookies.get("i18next") || "en"
  );
  useEffect(() => {
    setSlideState(slide);
  }, []);

  const ChangeLang = async (lng) => {
    await ChnageLanguage({
      language: lng,
    });
  };

  return (
    <div>
      <div className="admin_header shadow">
        <div className="row align-items-center mx-0 justify-content-between w-100">
          <div className="col ps-0">
            <a className="sidebar_btn">
              <img src={sideBtn} alt="" />
            </a>
          </div>
          <div className="col-auto d-flex align-items-center">
            <a
              className="change_language"
              onClick={() => {
                i18next.changeLanguage(currentLangCode === "en" ? "ar" : "en");
                setLang(currentLangCode === "en" ? "ar" : "en");
                Cookies.set(
                  "i18nextLng",
                  currentLangCode === "en" ? "ar" : "en"
                );
                ChangeLang(currentLangCode === "en" ? "Arabic" : "English");

                window.location.reload(false);
              }}>
              <img src={currentLangCode !== "en" ? flagUs : flag1} alt="" />
              {currentLangCode !== "en" ? "English" : " عربى "}
            </a>
            <div className="dropdown Profile_dropdown">
              <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <img src={profileImg} alt="" />
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1">
                <li>
                  <a className="dropdown-item" href="edit-profile.html">
                    Edit Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="change-password.html">
                    Change Password
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="login.html">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
