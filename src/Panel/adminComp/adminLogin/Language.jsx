import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoNN.png";
import flag1 from "../../assets/img/saudi_flag1.png";
import flagUs from "../../assets/img/united-kingdom.png";
const Language = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="login_page">
        <div className="container-fluid px-0">
          <div className="row justify-content-start">
            <div className="col-4">
              <div className="login_page_form shadow">
                <div className="row">
                  <div className="col-12 formheader mb-4 text-center">
                    <img src={logo} alt="" />
                    <h1>Choose Your Language</h1>
                  </div>
                  <div className="col-12">
                    <form className="row form-design" action="">
                      <div className="language">
                        <div id="google_translate_element" />
                        <div className="language_bax">
                          <div className="flag-lists translation-links d-flex justify-content-center p-0 w-100">
                            <div className="flag-lists_in active">
                              <a className="english shadow text-decoration-none" data-lang="English">
                                <img
                                  className="mr-md-2 ml-md-0 ml-1 flag_img"
                                  src={flagUs}
                                />
                                <span>English</span>
                              </a>
                            </div>
                            <div className="flag-lists_in">
                              <a className="arabic shadow text-decoration-none" data-lang="Arabic">
                                <img
                                  className="mr-md-2 ml-md-0 ml-1 flag_img"
                                  src={flag1}
                                />
                                <span>Arabic</span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div id="google_translate_element" />
                      </div>
                      <div className="form-group col-12 text-center mt-4 pt-3">
                        <a
                          onClick={() => {
                            navigate("/admin/dashboard");
                          }}
                          className="comman_btn text-decoration-none">
                          Continue
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

export default Language;
