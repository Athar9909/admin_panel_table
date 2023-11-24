import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Panel/adminComp/adminLogin/Login";
import Language from "./Panel/adminComp/adminLogin/Language";
import Dashboard from "./Panel/adminComp/Dashboard/Dashboard";
import Restaurant from "./Panel/adminComp/Restaurants/Restaurant";
import ViewRestaurant from "./Panel/adminComp/Restaurants/ViewRestaurant";
import Takeaway from "./Panel/adminComp/orders/TakeAway";
import ViewOrder from "./Panel/adminComp/orders/ViewOrder";
import Dining from "./Panel/adminComp/orders/Dining";
import ViewDineOrder from "./Panel/adminComp/orders/ViewDineOrder";
import AllTransaction from "./Panel/adminComp/Transaction/AllTransaction";
import ForgotPass from "./Panel/adminComp/adminLogin/forgotPass";
import OtpVerify from "./Panel/adminComp/adminLogin/OtpVerify";
import ResetPassword from "./Panel/adminComp/adminLogin/ResetPassword";
import Notifications from "./Panel/adminComp/Notifications/Notifications";
import { useEffect, useState } from "react";
import Profile from "./Panel/adminComp/Profile";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { LngState } from "../src/atom";
import Cookies from "js-cookie";
function App() {
  const Lang = useRecoilValue(LngState);
  const setLang = useSetRecoilState(LngState);

  const [currentLangCode, setCurrentLangCode] = useState(
    Cookies.get("i18nextLng") || "en"
  );

  useEffect(() => {
    if (currentLangCode === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLangCode, Lang]);

  return (
    <div className={currentLangCode === "ar" ? "App arabicRtl" : "App"}>
      <BrowserRouter>
        <Routes>
          <Route path="/ProfileKdif" element={<Profile />} />
          <Route path="/" element={<Login />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/login/forgot-pass" element={<ForgotPass />} />
          <Route path="/admin/login/otp-verify/:mail" element={<OtpVerify />} />
          <Route
            path="/admin/login/reset-password/:mail"
            element={<ResetPassword />}
          />
          <Route path="/admin/language-select" element={<Language />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/admin/dashboard/restaurants-manage"
            element={<Restaurant />}
          />
          <Route
            path="/admin/dashboard/restaurants-view/:id"
            element={<ViewRestaurant />}
          />
          <Route
            path="/admin/dashboard/orders/takeaway"
            element={<Takeaway />}
          />
          <Route path="/admin/dashboard/orders/Dining" element={<Dining />} />
          <Route
            path="/admin/dashboard/orders/view/:id"
            element={<ViewOrder />}
          />
          <Route
            path="/admin/dashboard/orders/Dining-view/:id"
            element={<ViewDineOrder />}
          />
          <Route
            path="/admin/dashboard/transactions"
            element={<AllTransaction />}
          />
          <Route
            path="/admin/dashboard/Notifications"
            element={<Notifications />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
