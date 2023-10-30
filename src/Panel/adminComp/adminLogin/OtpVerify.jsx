import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OtpInput from "react-otp-input";
import { adminVerifyOtp } from "./httpServicesAdmin/adminApis";
import Swal from "sweetalert2";
import logo from "../../assets/img/logoNN.png";

const OtpVerify = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(60);
  const { mail, code } = useParams();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  const VerifyOtp = async () => {
    const formData = {
      phone_number: mail,
      country_code: code,
      otp: value,
      language: "",
      deviceId: "123",
    };
    const { data } = await adminVerifyOtp(formData);
    if (!data?.error) {
      navigate(`/admin/Reset-Password/${mail}`);
    }
  };

  const ResendOtp = async (e) => {
    setCounter(60);
    e.preventDefault();
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
                    <h1>OTP Verification</h1>
                    <p>
                      Please enter your OTP recieve on registered Email Address.
                    </p>
                  </div>
                  <div className="col-12">
                    <form className="row form-design" action="">
                      <div className="col-12 form-group d-flex justify-content-center">
                        <OtpInput
                          value={value}
                          onChange={setValue}
                          numInputs={4}
                          onChangeRegex={/^([0-9]{0,})$/}
                          renderSeparator={
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                          }
                          isInputNum
                          inputStyle="otp-field__input"
                          containerStyle="form-group"
                          renderInput={(props) => <input {...props} />}
                        />
                      </div>
                      <div className="col-12 form-group">
                        {counter ? (
                          <div className="timings">
                            You can resend the code in
                            <strong className="mx-2">00:{counter}</strong>
                          </div>
                        ) : null}
                      </div>
                      <div className="form-group col-12 text-center">
                        <label className="text-center" htmlFor="">
                          Didn't received the OTP?
                          {counter ? (
                            <span
                              className="otp-sec mx-1 text-dark"
                              id="resendOTP"
                              onClick={ResendOtp}>
                              Please wait
                            </span>
                          ) : (
                            <span
                              className="otp-sec mx-1 text-primary"
                              id="resendOTP"
                              onClick={ResendOtp}
                              style={{ cursor: "pointer" }}>
                              Request again
                            </span>
                          )}
                        </label>
                      </div>

                      <div className="form-group col-12">
                        <a
                          onClick={() => {
                            VerifyOtp()
                          }}
                          className="comman_btn text-decoration-none">
                          Verify Otp
                        </a>
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

export default OtpVerify;
