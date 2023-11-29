import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import Profile from "../Profile";
import {
  UpdateAdminRestaurant,
  getRestaurantDetails,
} from "../adminLogin/httpServicesAdmin/adminApis";
import Swal from "sweetalert2";
import profilePic from "../../assets/img/profile_img1.png";
import { t } from "i18next";
const ViewRestaurant = () => {
  const [slide, setSlide] = useState("RestoManage");
  const [sideBar, setSideBar] = useState();
  const [files, setFiles] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [logo, setLogo] = useState([]);
  const [cover, setCover] = useState([]);
  let { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    RestaurantsDetails();
  }, []);

  const onFileSelectionLogo = async (e, key, ind) => {
    setLogo([{ [key]: e.target.files[0] }]);

    if (e.target.files[0]) {
      var picture = new FileReader();
      picture.readAsDataURL(e.target.files[0]);
      picture.addEventListener("load", function (event) {
        document.getElementById(ind).setAttribute("src", event.target.result);
      });
    }
  };

  const onFileSelectionCover = async (e, key, ind) => {
    setCover([{ [key]: e.target.files[0] }]);
    if (e.target.files[0]) {
      var picture = new FileReader();
      picture.readAsDataURL(e.target.files[0]);
      picture.addEventListener("load", function (event) {
        document.getElementById(ind).setAttribute("src", event.target.result);
      });
    }
  };

  const RestaurantsDetails = async (key) => {
    const { data } = await getRestaurantDetails(id);
    if (!data?.error) {
      let values = data?.results?.branch;
      setRestaurants(values);
      reset({
        name: values?.restaurantId?.restaurant_name,
        address: values?.restaurantId?.restaurant_address,
        owner: values?.restaurantId?.owner_name,
        desc: values?.description,
        name_ar: values?.restaurantId?.restaurant_name_ar,
        address_ar: values?.restaurantId?.restaurant_address_ar,
        owner_ar: values?.restaurantId?.owner_name_ar,
        desc_ar: values?.description_ar,
        code: values?.country_code,
        opTime: values?.restaurantId?.opening_time,
        closeTime: values?.restaurantId?.closing_time,
        email: values?.restaurantId?.email,
        number: values?.phone_number,
        password: values?.password,
      });
    }
  };

  const onSubmit = async (data) => {
    let formData = new FormData();
    formData.append("restaurant_name", data?.name);
    formData.append("restaurant_address", data?.address);
    formData.append("restaurant_description", data?.desc);
    formData.append("restaurant_name_ar", data?.name_ar);
    formData.append("restaurant_address_ar", data?.address_ar);
    formData.append("restaurant_description_ar", data?.desc_ar);
    formData.append("country_code", data?.code?.slice(1));
    formData.append("owner_name", data?.owner);
    formData.append("owner_name_ar", data?.owner_ar);
    formData.append("opening_time", data?.opTime);
    formData.append("closiing_time", data?.closeTime);
    formData.append("email", data?.email);
    formData.append("phone_number", data?.number);
    formData.append("password", data?.password);
    formData.append("restaurantId", restaurants?.restaurantId?._id);
    formData.append(
      "logo",
      logo[0]?.logo ? logo[0]?.logo : restaurants?.restaurantId?.restaurant_logo
    );
    formData.append(
      "cover_image",
      cover[0]?.cover ? cover[0]?.cover : restaurants?.restaurantId?.cover_image
    );

    const res = await UpdateAdminRestaurant(formData);
    if (!res?.data?.error) {
      Swal.fire({
        title: res?.data?.message,
        icon: "success",
        confirmButtonText: "Okay",
        confirmButtonColor: "#e25829",
      });
      RestaurantsDetails();
    }
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
                <div className="col-12 design_outter_comman shadow mb-4 toggle_set">
                  <div className="row comman_header justify-content-between">
                    <div className="col-auto">
                      <h2>{t("RMD")}</h2>
                      <div className="col-12">
                        {/* <div className="check_toggle">
                          <input
                            type="checkbox"
                            defaultChecked=""
                            name="check1"
                            id="check1"
                            className="d-none"
                          />
                          <label htmlFor="check1" />
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <form
                      className="form-design py-4 px-4 row"
                      action=""
                      onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group col-6">
                        <label>{t("LogoImg")}</label>

                        <div class="account_profile position-relative d-inline-flex">
                          <div class="circle">
                            <img
                              class="profile-pic"
                              id="logoImg"
                              src={
                                restaurants?.restaurantId?.restaurant_logo
                                  ? restaurants?.restaurantId?.restaurant_logo
                                  : profilePic
                              }
                            />
                          </div>
                          <div class="p-image">
                            <i
                              onClick={() => {
                                document.getElementById("uploaderOne").click();
                              }}
                              className="fa fa-edit"></i>
                            <input
                              class="file-upload"
                              type="file"
                              accept="image/*"
                              id="uploaderOne"
                              onChange={(e) =>
                                onFileSelectionLogo(e, "logo", "logoImg")
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group col-6 ">
                        <label>{t("CoverImg")}</label>
                        <div class="account_profile position-relative d-inline-flex">
                          <div class="circle">
                            <img
                              id="coverImg"
                              class="profile-pic"
                              src={
                                restaurants?.restaurantId?.cover_image
                                  ? restaurants?.restaurantId?.cover_image
                                  : profilePic
                              }
                            />
                          </div>
                          <div class="p-image">
                            <i
                              onClick={() => {
                                document.getElementById("uploaderTwo").click();
                              }}
                              className="fa fa-edit"></i>
                            <input
                              class="file-upload"
                              type="file"
                              accept="image/*"
                              id="uploaderTwo"
                              onChange={(e) =>
                                onFileSelectionCover(e, "cover", "coverImg")
                              }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group col-4">
                        <label htmlFor="">Restaurant Name (en)</label>
                        <input
                          {...register("name", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.name,
                          })}
                          name="name"
                          placeholder="Enter Restaurant Name "
                        />
                        {errors.name && (
                          <small className="errorText  ">
                            {errors.name?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-4">
                        <label htmlFor="">{t("RestN")} (ar)</label>
                        <input
                          {...register("name_ar", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.name_ar,
                          })}
                          name="name_ar"
                          lang="ar"
                          dir="rtl"
                          placeholder="اطبع شيئا"
                        />
                        {errors.name_ar && (
                          <small className="errorText  ">
                            {errors.name_ar?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-4">
                        <label htmlFor="">{t("CountryCode")}</label>

                        <select
                          {...register("code", { required: true })}
                          className={classNames(" form-control form-select", {
                            "is-invalid": errors.code,
                          })}
                          name="code"
                          placeholder="+966">
                          <option value="+93">Afghanistan (+93)</option>
                          <option value="+355">Albania (+355)</option>
                          <option value="+213">Algeria (+213)</option>
                          <option value="+1-684">
                            American Samoa (+1-684)
                          </option>
                          <option value="+376">Andorra (+376)</option>
                          <option value="+244">Angola (+244)</option>
                          <option value="+1-264">Anguilla (+1-264)</option>
                          <option value="+672">Antarctica (+672)</option>
                          <option value="+1-268">
                            Antigua and Barbuda (+1-268)
                          </option>
                          <option value="+54">Argentina (+54)</option>
                          <option value="+374">Armenia (+374)</option>
                          <option value="+297">Aruba (+297)</option>
                          <option value="+61">Australia (+61)</option>
                          <option value="+43">Austria (+43)</option>
                          <option value="+994">Azerbaijan (+994)</option>
                          <option value="+1-242">Bahamas (+1-242)</option>
                          <option value="+973">Bahrain (+973)</option>
                          <option value="+880">Bangladesh (+880)</option>
                          <option value="+1-246">Barbados (+1-246)</option>
                          <option value="+375">Belarus (+375)</option>
                          <option value="+32">Belgium (+32)</option>
                          <option value="+501">Belize (+501)</option>
                          <option value="+229">Benin (+229)</option>
                          <option value="+1-441">Bermuda (+1-441)</option>
                          <option value="+975">Bhutan (+975)</option>
                          <option value="+591">Bolivia (+591)</option>
                          <option value="+387">
                            Bosnia and Herzegovina (+387)
                          </option>
                          <option value="+267">Botswana (+267)</option>
                          <option value="+55">Brazil (+55)</option>
                          <option value="+246">
                            British Indian Ocean Territory (+246)
                          </option>
                          <option value="+1-284">
                            British Virgin Islands (+1-284)
                          </option>
                          <option value="+673">Brunei (+673)</option>
                          <option value="+359">Bulgaria (+359)</option>
                          <option value="+226">Burkina Faso (+226)</option>
                          <option value="+257">Burundi (+257)</option>
                          <option value="+855">Cambodia (+855)</option>
                          <option value="+237">Cameroon (+237)</option>
                          <option value="+1">Canada (+1)</option>
                          <option value="+238">Cape Verde (+238)</option>
                          <option value="+1-345">
                            Cayman Islands (+1-345)
                          </option>
                          <option value="+236">
                            Central African Republic (+236)
                          </option>
                          <option value="+235">Chad (+235)</option>
                          <option value="+56">Chile (+56)</option>
                          <option value="+86">China (+86)</option>
                          <option value="+61">Christmas Island (+61)</option>
                          <option value="+61">Cocos Islands (+61)</option>
                          <option value="+57">Colombia (+57)</option>
                          <option value="+269">Comoros (+269)</option>
                          <option value="+682">Cook Islands (+682)</option>
                          <option value="+506">Costa Rica (+506)</option>
                          <option value="+385">Croatia (+385)</option>
                          <option value="+53">Cuba (+53)</option>
                          <option value="+599">Curacao (+599)</option>
                          <option value="+357">Cyprus (+357)</option>
                          <option value="+420">Czech Republic (+420)</option>
                          <option value="+243">
                            Democratic Republic of the Congo (+243)
                          </option>
                          <option value="+45">Denmark (+45)</option>
                          <option value="+253">Djibouti (+253)</option>
                          <option value="+1-767">Dominica (+1-767)</option>
                          <option value="+1-809, +1-829, +1-849">
                            Dominican Republic (+1-809, +1-829, +1-849)
                          </option>
                          <option value="+670">East Timor (+670)</option>
                          <option value="+593">Ecuador (+593)</option>
                          <option value="+20">Egypt (+20)</option>
                          <option value="+503">El Salvador (+503)</option>
                          <option value="+240">Equatorial Guinea (+240)</option>
                          <option value="+291">Eritrea (+291)</option>
                          <option value="+372">Estonia (+372)</option>
                          <option value="+251">Ethiopia (+251)</option>
                          <option value="+500">Falkland Islands (+500)</option>
                          <option value="+298">Faroe Islands (+298)</option>
                          <option value="+679">Fiji (+679)</option>
                          <option value="+358">Finland (+358)</option>
                          <option value="+33">France (+33)</option>
                          <option value="+689">French Polynesia (+689)</option>
                          <option value="+241">Gabon (+241)</option>
                          <option value="+220">Gambia (+220)</option>
                          <option value="+995">Georgia (+995)</option>
                          <option value="+49">Germany (+49)</option>
                          <option value="+233">Ghana (+233)</option>
                          <option value="+350">Gibraltar (+350)</option>
                          <option value="+30">Greece (+30)</option>
                          <option value="+299">Greenland (+299)</option>
                          <option value="+1-473">Grenada (+1-473)</option>
                          <option value="+1-671">Guam (+1-671)</option>
                          <option value="+502">Guatemala (+502)</option>
                          <option value="+44-1481">Guernsey (+44-1481)</option>
                          <option value="+224">Guinea (+224)</option>
                          <option value="+245">Guinea-Bissau (+245)</option>
                          <option value="+592">Guyana (+592)</option>
                          <option value="+509">Haiti (+509)</option>
                          <option value="+504">Honduras (+504)</option>
                          <option value="+852">Hong Kong (+852)</option>
                          <option value="+36">Hungary (+36)</option>
                          <option value="+354">Iceland (+354)</option>
                          <option value="+91">India (+91)</option>
                          <option value="+62">Indonesia (+62)</option>
                          <option value="+98">Iran (+98)</option>
                          <option value="+964">Iraq (+964)</option>
                          <option value="+353">Ireland (+353)</option>
                          <option value="+44-1624">
                            Isle of Man (+44-1624)
                          </option>
                          <option value="+972">Israel (+972)</option>
                          <option value="+39">Italy (+39)</option>
                          <option value="+225">Ivory Coast (+225)</option>
                          <option value="+1-876">Jamaica (+1-876)</option>
                          <option value="+81">Japan (+81)</option>
                          <option value="+44-1534">Jersey (+44-1534)</option>
                          <option value="+962">Jordan (+962)</option>
                          <option value="+7">Kazakhstan (+7)</option>
                          <option value="+254">Kenya (+254)</option>
                          <option value="+686">Kiribati (+686)</option>
                          <option value="+383">Kosovo (+383)</option>
                          <option value="+965">Kuwait (+965)</option>
                          <option value="+996">Kyrgyzstan (+996)</option>
                          <option value="+856">Laos (+856)</option>
                          <option value="+371">Latvia (+371)</option>
                          <option value="+961">Lebanon (+961)</option>
                          <option value="+266">Lesotho (+266)</option>
                          <option value="+231">Liberia (+231)</option>
                          <option value="+218">Libya (+218)</option>
                          <option value="+423">Liechtenstein (+423)</option>
                          <option value="+370">Lithuania (+370)</option>
                          <option value="+352">Luxembourg (+352)</option>
                          <option value="+853">Macau (+853)</option>
                          <option value="+389">Macedonia (+389)</option>
                          <option value="+261">Madagascar (+261)</option>
                          <option value="+265">Malawi (+265)</option>
                          <option value="+60">Malaysia (+60)</option>
                          <option value="+960">Maldives (+960)</option>
                          <option value="+223">Mali (+223)</option>
                          <option value="+356">Malta (+356)</option>
                          <option value="+692">Marshall Islands (+692)</option>
                          <option value="+222">Mauritania (+222)</option>
                          <option value="+230">Mauritius (+230)</option>
                          <option value="+262">Mayotte (+262)</option>
                          <option value="+52">Mexico (+52)</option>
                          <option value="+691">Micronesia (+691)</option>
                          <option value="+373">Moldova (+373)</option>
                          <option value="+377">Monaco (+377)</option>
                          <option value="+976">Mongolia (+976)</option>
                          <option value="+382">Montenegro (+382)</option>
                          <option value="+1-664">Montserrat (+1-664)</option>
                          <option value="+212">Morocco (+212)</option>
                          <option value="+258">Mozambique (+258)</option>
                          <option value="+95">Myanmar (+95)</option>
                          <option value="+264">Namibia (+264)</option>
                          <option value="+674">Nauru (+674)</option>
                          <option value="+977">Nepal (+977)</option>
                          <option value="+31">Netherlands (+31)</option>
                          <option value="+687">New Caledonia (+687)</option>
                          <option value="+64">New Zealand (+64)</option>
                          <option value="+505">Nicaragua (+505)</option>
                          <option value="+227">Niger (+227)</option>
                          <option value="+234">Nigeria (+234)</option>
                          <option value="+683">Niue (+683)</option>
                          <option value="+672">Norfolk Island (+672)</option>
                          <option value="+850">North Korea (+850)</option>
                          <option value="+1-670">
                            Northern Mariana Islands (+1-670)
                          </option>
                          <option value="+47">Norway (+47)</option>
                          <option value="+968">Oman (+968)</option>
                          <option value="+92">Pakistan (+92)</option>
                          <option value="+680">Palau (+680)</option>
                          <option value="+970">Palestine (+970)</option>
                          <option value="+507">Panama (+507)</option>
                          <option value="+675">Papua New Guinea (+675)</option>
                          <option value="+595">Paraguay (+595)</option>
                          <option value="+51">Peru (+51)</option>
                          <option value="+63">Philippines (+63)</option>
                          <option value="+64">Pitcairn (+64)</option>
                          <option value="+48">Poland (+48)</option>
                          <option value="+351">Portugal (+351)</option>
                          <option value="+1-787, +1-939">
                            Puerto Rico (+1-787, +1-939)
                          </option>
                          <option value="+974">Qatar (+974)</option>
                          <option value="+242">
                            Republic of the Congo (+242)
                          </option>
                          <option value="+262">Reunion (+262)</option>
                          <option value="+40">Romania (+40)</option>
                          <option value="+7">Russia (+7)</option>
                          <option value="+250">Rwanda (+250)</option>
                          <option value="+590">Saint Barthelemy (+590)</option>
                          <option value="+290">Saint Helena (+290)</option>
                          <option value="+1-869">
                            Saint Kitts and Nevis (+1-869)
                          </option>
                          <option value="+1-758">Saint Lucia (+1-758)</option>
                          <option value="+590">Saint Martin (+590)</option>
                          <option value="+508">
                            Saint Pierre and Miquelon (+508)
                          </option>
                          <option value="+1-784">
                            Saint Vincent and the Grenadines (+1-784)
                          </option>
                          <option value="+685">Samoa (+685)</option>
                          <option value="+378">San Marino (+378)</option>
                          <option value="+239">
                            Sao Tome and Principe (+239)
                          </option>
                          <option value="+966" selected>
                            Saudi Arabia (+966)
                          </option>
                          <option value="+221">Senegal (+221)</option>
                          <option value="+381">Serbia (+381)</option>
                          <option value="+248">Seychelles (+248)</option>
                          <option value="+232">Sierra Leone (+232)</option>
                          <option value="+65">Singapore (+65)</option>
                          <option value="+1-721">Sint Maarten (+1-721)</option>
                          <option value="+421">Slovakia (+421)</option>
                          <option value="+386">Slovenia (+386)</option>
                          <option value="+677">Solomon Islands (+677)</option>
                          <option value="+252">Somalia (+252)</option>
                          <option value="+27">South Africa (+27)</option>
                          <option value="+992">Tajikistan (+992)</option>
                          <option value="+255">Tanzania (+255)</option>
                          <option value="+66">Thailand (+66)</option>
                          <option value="+670">Timor-Leste (+670)</option>
                          <option value="+228">Togo (+228)</option>
                          <option value="+690">Tokelau (+690)</option>
                          <option value="+676">Tonga (+676)</option>
                          <option value="+1">Trinidad and Tobago (+1)</option>
                          <option value="+216">Tunisia (+216)</option>
                          <option value="+90">Turkey (+90)</option>
                          <option value="+993">Turkmenistan (+993)</option>
                          <option value="+688">Tuvalu (+688)</option>
                          <option value="+256">Uganda (+256)</option>
                          <option value="+380">Ukraine (+380)</option>
                          <option value="+598">Uruguay (+598)</option>
                          <option value="+998">Uzbekistan (+998)</option>
                          <option value="+678">Vanuatu (+678)</option>
                          <option value="+58">Venezuela (+58)</option>
                          <option value="+84">Vietnam (+84)</option>
                          <option value="+967">Yemen (+967)</option>
                          <option value="+260">Zambia (+260)</option>
                          <option value="+263">Zimbabwe (+263)</option>
                        </select>
                        {errors.code && (
                          <small className="errorText  ">
                            {errors.code?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-6">
                        <label htmlFor="">Restaurant Address (en)</label>
                        <input
                          {...register("address", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.address,
                          })}
                          name="address"
                          placeholder="Enter Restaurant Address"
                        />
                        {errors.address && (
                          <small className="errorText  ">
                            {errors.address?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-6">
                        <label htmlFor="">{t("RestAddress")} (ar)</label>
                        <input
                          {...register("address_ar", { required: true })}
                          type="text"
                          lang="ar"
                          dir="rtl"
                          className={classNames("form-control", {
                            "is-invalid": errors.address_ar,
                          })}
                          name="address_ar"
                          placeholder="اطبع شيئا"
                        />
                        {errors.address_ar && (
                          <small className="errorText  ">
                            {errors.address_ar?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-6">
                        <label htmlFor="">Restaurant Description (en)</label>
                        <input
                          {...register("desc", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.desc,
                          })}
                          name="desc"
                          placeholder="Enter Restaurant Description"
                        />
                        {errors.desc && (
                          <small className="errorText  ">
                            {errors.desc?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group col-6">
                        <label htmlFor="">{t("RestDesc")} (ar)</label>
                        <input
                          {...register("desc_ar", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.desc_ar,
                          })}
                          name="desc_ar"
                          lang="ar"
                          dir="rtl"
                          placeholder="اطبع شيئا"
                        />
                        {errors.desc_ar && (
                          <small className="errorText  ">
                            {errors.desc_ar?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-4">
                        <label htmlFor="">Owner Name (en)</label>
                        <input
                          {...register("owner", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.owner,
                          })}
                          name="owner"
                          placeholder="Enter Owner Name"
                        />
                        {errors.owner && (
                          <small className="errorText  ">
                            {errors.owner?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-4">
                        <label htmlFor="">{t("RestOwn")} (ar)</label>
                        <input
                          {...register("owner_ar", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.owner_ar,
                          })}
                          name="owner_ar"
                          lang="ar"
                          dir="rtl"
                          placeholder="اطبع شيئا"
                        />
                        {errors.owner_ar && (
                          <small className="errorText  ">
                            {errors.owner_ar?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-4">
                        <label htmlFor="">{t("Email")}</label>
                        <input
                          {...register("email", { required: true })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.email,
                          })}
                          name="email"
                          placeholder="Enter Email Address"
                        />
                        {errors.email && (
                          <small className="errorText  ">
                            {errors.email?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-3">
                        <label htmlFor="">{t("No_")}</label>
                        <input
                          {...register("number", { required: true })}
                          type="number"
                          className={classNames("form-control", {
                            "is-invalid": errors.number,
                          })}
                          name="number"
                          placeholder="Enter contact number"
                        />
                        {errors.number && (
                          <small className="errorText  ">
                            {errors.number?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group col-3">
                        <label htmlFor="">{t("Password")}</label>
                        <input
                          {...register("password", { required: false })}
                          type="password"
                          className={classNames("form-control", {
                            "is-invalid": errors.password,
                          })}
                          name="password"
                          placeholder="*********"
                        />
                        {errors.password && (
                          <small className="errorText  ">
                            {errors.password?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group col-3">
                        <label htmlFor="">{t("OpenT")}</label>
                        <input
                          {...register("opTime", { required: false })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.opTime,
                          })}
                          name="opTime"
                          placeholder="Enter Opeinig Time"
                        />
                        {errors.opTime && (
                          <small className="errorText  ">
                            {errors.opTime?.message}
                          </small>
                        )}
                      </div>
                      <div className="form-group col-3">
                        <label htmlFor="">{t("CloseT")}</label>
                        <input
                          {...register("closeTime", { required: false })}
                          type="text"
                          className={classNames("form-control", {
                            "is-invalid": errors.closeTime,
                          })}
                          name="closeTime"
                          placeholder="Enter Closing Time"
                        />
                        {errors.closeTime && (
                          <small className="errorText  ">
                            {errors.closeTime?.message}
                          </small>
                        )}
                      </div>

                      <div className="form-group mb-0 col-12 text-center">
                        <button
                          className="comman_btn d-inline-flex"
                          type="submit">
                          <span>{t("Save")}</span>
                        </button>
                        <button
                          className="comman_btn d-inline-flex d-none"
                          id="reset1"
                          type="reset">
                          <span>Sreser</span>
                        </button>
                      </div>
                    </form>
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

export default ViewRestaurant;
