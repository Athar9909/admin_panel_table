import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { adminForgotPass, adminLogin } from "./httpServicesAdmin/adminApis";
import classNames from "classnames";
import Swal from "sweetalert2";
import logo from "../../assets/img/logoNN.png";
import i18next from "i18next";
import Cookies from "js-cookie";

const ForgotPass = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    i18next.changeLanguage("en");
    Cookies.set("i18nextLng", "en");
    document.body.dir = "ltr";
  }, []);

  const onSubmit = async (data) => {
    const res = await adminForgotPass({
      email: data?.email,
    });

    if (!res?.data?.error) {
      Swal.fire({
        title: res?.data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
      navigate(
        `/admin/login/otp-verify/${data?.email}`
      );
    }
  };

  return (
    <div>
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-start">
            <div className="col-4">
              <div className="login_page_form shadow">
                <div className="row">
                  <div className="col-12 formheader mb-4">
                    <div className="text-center">
                      <img src={logo} alt="" />
                    </div>
                    <h1>Forgot Password</h1>
                    <p>
                      Please enter your registered Email Address to receive the
                      OTP
                    </p>
                  </div>
                  <div className="col-12">
                    <form
                      className="row form-design"
                      onSubmit={handleSubmit(onSubmit)}
                      action="">
                      <div className="form-group col-12">
                        <label htmlFor="">Email Address</label>
                        <input
                          {...register("email", { required: true })}
                          type="email"
                          className={classNames("form-control", {
                            "is-invalid": errors.email,
                          })}
                          name="email"
                          placeholder="Enter email address"
                        />
                        {errors.email && (
                          <small className="errorText  ">
                            {errors.email?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-12">
                        <button
                          type="submit"
                          className="comman_btn text-decoration-none">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPass;
