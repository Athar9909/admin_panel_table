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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
