import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Pagination from "react-paginate";
import swal from "sweetalert";
import moment from "moment";
import { QRCodeSVG } from "qrcode.react";

import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { getMovie, postMovie, updateMovie, deleteMovie } from "../../stores/actions/movie";

import CardAdmin from "../../components/cardadmin";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Ebv from "../../assets/ebv.id 2.png";
import Cineone from "../../assets/cineonesponsor.png";
import Hiflix from "../../assets/hiflixspnsor.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { updateImage, updatePassword, updateProfile } from "../../stores/actions/user";
import { getBookingByUserId } from "../../stores/actions/booking";

function Profile() {
  document.title = "Tickitz | Profile";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dataUser = useSelector((state) => state.user);
  const dataBooking = useSelector((state) => state.booking);
  const [detailBooking, setDetailBooking] = useState([]);
  const [lookPassword, setLookPassword] = useState(false);
  const [info, setInfo] = useState("");
  const [image, setImage] = useState(null);
  const [formDetail, setFormDetail] = useState({
    firstName: dataUser.data[0].firstName,
    lastName: dataUser.data[0].lastName,
    noTelp: dataUser.data[0].noTelp,
    email: dataUser.data[0].email
  });
  const [formPassword, setFormPassword] = useState({
    newPassword: "",
    confirmPassword: ""
  });
  const [formImage, setFormImage] = useState({
    image: ""
  });

  useEffect(() => {
    getAllDataBooking();
  }, []);

  const getAllDataBooking = async () => {
    try {
      await dispatch(getBookingByUserId(dataUser.data[0].id));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(dataBooking);

  const handleChangeFormDetail = (e) => {
    setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
  };

  const handleUpdateDetail = async (e) => {
    try {
      e.preventDefault();
      setInfo("detail");
      const res = await dispatch(updateProfile(dataUser.data[0].id, formDetail));
      swal("Success update data", {
        icon: "success"
      });
      console.log(formDetail);
    } catch (error) {
      console.log(error.response);
      swal(error.response.data.message, {
        icon: "error"
      });
    }
  };

  const handleChangeFormPassword = (e) => {
    setFormPassword({ ...formPassword, [e.target.name]: e.target.value });
  };
  const handleUpdatePassword = async (e) => {
    try {
      e.preventDefault();
      setInfo("pass");
      if (formPassword.newPassword.length === 0 || formPassword.confirmPassword.length === 0) {
        return swal("Lengkapi data", {
          icon: "error"
        });
      }
      const res = await dispatch(updatePassword(dataUser.data[0].id, formPassword));
      swal("Success update password", {
        icon: "success"
      });
      setFormPassword({
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error.response);
      swal(error.response.data.message, {
        icon: "error"
      });
    }
  };
  const handleChangeImage = (e) => {
    setFormImage({ ...formImage, [e.target.name]: e.target.files[0] });
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const handleUpdateImage = async (e) => {
    try {
      e.preventDefault();
      setInfo("image");
      const formDataImage = new FormData();
      formDataImage.append("image", formImage.image);
      const res = await dispatch(updateImage(dataUser.data[0].id, formDataImage));
      swal(res.value.data.message, {
        icon: "success"
      });
      setFormImage({
        image: ""
      });
      setImage(null);
    } catch (error) {
      console.log(error.response);
      swal(error.response.data.message, {
        icon: "error"
      });
      setFormImage({
        image: ""
      });
      setImage(null);
    }
  };

  const handleLogout = () => {
    axios
      .post("auth/logout", localStorage.getItem("refreshToken"))
      .then((res) => {
        localStorage.clear();
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  console.log(detailBooking);

  return (
    <>
      <Navbar />
      <section className="main-profile">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <div className="border card-profile m-4">
                <div className="card-header profile-header">Info</div>
                <div className="card-profile d-flex align-items-center">
                  <div className="image-profile-page">
                    {dataUser.isLoading && info === "image" ? (
                      <div className="loading">
                        <div class="spinner-grow text-dark size-spinner-grow" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={
                          image
                            ? image
                            : dataUser.data[0].image
                            ? `https://res.cloudinary.com/dx8zjtlv8/image/upload/v1651042190/${dataUser.data[0].image}`
                            : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                        }
                        alt="image-profile"
                        // className="image-profile"
                        className="ava-profile"
                      />
                    )}

                    {!image ? (
                      <>
                        <label htmlFor="imageInput" className="btn">
                          <div className="circle">
                            <i className="bi bi-pencil-square "></i>
                          </div>
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          className="d-none"
                          name="image"
                          id="imageInput"
                          onChange={handleChangeImage}
                        />
                      </>
                    ) : (
                      <>
                        <label htmlFor="imageSubmit" className="btn">
                          <div className="circle">
                            <i className="bi bi-check-lg "></i>
                          </div>
                        </label>
                        <button
                          type="button"
                          className="d-none"
                          id="imageSubmit"
                          onClick={handleUpdateImage}
                        ></button>
                      </>
                    )}
                  </div>
                  <span>
                    {dataUser.data[0].firstName} {dataUser.data[0].lastName}
                  </span>
                  <span>Moviegoers</span>
                  <button onClick={handleLogout} className="btn btn-logout-profile">
                    Logout
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              {/* <div className="card d-flex flex-row">
                <Link className="profile-menu" to="">
                  Account Setting
                </Link>
                <Link className="profile-menu" to="">
                  Order History
                </Link>
              </div> */}
              <div className="m-4">
                <ul className="nav nav-tabs" id="myTab">
                  <li className="nav-item">
                    <a href="#home" className="nav-link active" data-bs-toggle="tab">
                      Account Setting
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#profile" className="nav-link" data-bs-toggle="tab">
                      Order History
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="home">
                    <form action="" onSubmit={handleUpdateDetail}>
                      <div className="card card-profile">
                        <div className="card-header profile-header">Details Informatin</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="wrap-input">
                              <label className="label-form">Firstname</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="text"
                                  placeholder="Input Name"
                                  value={formDetail.firstName}
                                  name="firstName"
                                  onChange={handleChangeFormDetail}
                                />
                              </div>
                            </div>
                            <div className="wrap-input">
                              <label className="label-form">Email</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="text"
                                  placeholder="Input Name"
                                  name="email"
                                  value={formDetail.email}
                                  onChange={handleChangeFormDetail}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wrap-input">
                              <label className="label-form">Lastname</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="text"
                                  placeholder="Input Name"
                                  name="lastName"
                                  value={formDetail.lastName}
                                  onChange={handleChangeFormDetail}
                                />
                              </div>
                            </div>
                            <div className="wrap-input">
                              <label className="label-form">No Telp</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="text"
                                  placeholder="Input Name"
                                  name="noTelp"
                                  value={formDetail.noTelp}
                                  onChange={handleChangeFormDetail}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="btn btn-update-profile">
                        {/* {!dataUser.isLoading ? (
                          "Update Changes"
                        ) : (
                          <div className="spinner-border text-light" role="status"></div>
                        )} */}
                        {dataUser.isLoading && info === "detail" ? (
                          <div className="spinner-border text-light" role="status"></div>
                        ) : (
                          "Update Changes"
                        )}
                      </button>
                    </form>
                    <form action="" onSubmit={handleUpdatePassword}>
                      <div className="card card-profile">
                        <div className="card-header profile-header">Account and Privacy</div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="wrap-input">
                              <label className="label-form">New Password</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  placeholder="Input Name"
                                  name="newPassword"
                                  type={!lookPassword ? "password" : "text"}
                                  value={formPassword.newPassword}
                                  onChange={handleChangeFormPassword}
                                />
                                {lookPassword ? (
                                  <i
                                    className="bi bi-eye-fill align-self-center"
                                    onClick={() => {
                                      setLookPassword(!lookPassword);
                                    }}
                                  ></i>
                                ) : (
                                  <i
                                    className="bi bi-eye-slash-fill align-self-center"
                                    onClick={() => {
                                      setLookPassword(!lookPassword);
                                    }}
                                  ></i>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wrap-input">
                              <label className="label-form">Confirm Password</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  placeholder="Input Name"
                                  name="confirmPassword"
                                  type={!lookPassword ? "password" : "text"}
                                  onChange={handleChangeFormPassword}
                                  value={formPassword.confirmPassword}
                                />
                                {lookPassword ? (
                                  <i
                                    className="bi bi-eye-fill align-self-center"
                                    onClick={() => {
                                      setLookPassword(!lookPassword);
                                    }}
                                  ></i>
                                ) : (
                                  <i
                                    className="bi bi-eye-slash-fill align-self-center"
                                    onClick={() => {
                                      setLookPassword(!lookPassword);
                                    }}
                                  ></i>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-update-profile">
                        {dataUser.isLoading && info === "pass" ? (
                          <div className="spinner-border text-light" role="status"></div>
                        ) : (
                          "Update Changes"
                        )}
                      </button>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="profile">
                    <div className="overflow-auto" style={{ maxHeight: "100vh" }}>
                      {dataBooking.data.map((item, index) => (
                        <div className="shadow my-5 " key={index}>
                          <div className="card-header d-flex justify-content-between align-items-center">
                            <div>
                              <h5>
                                {moment(item.dateBooking).format("LL")}, {item.timeBooking}
                              </h5>
                              <h3>{item.name}</h3>
                            </div>
                            <div>
                              <img
                                src={
                                  item.premiere === "ebv.id"
                                    ? Ebv
                                    : item.premiere === "cineone"
                                    ? Cineone
                                    : item.premiere === "hiflix"
                                    ? Hiflix
                                    : Ebv
                                }
                                alt=""
                              />
                            </div>
                          </div>
                          <div
                            className="card-body d-flex justify-content-between align-items-center"
                            style={{ minHeight: "8rem" }}
                          >
                            {item.statusUsed === "active" ? (
                              <button className="btn btn-success">Ticket Active</button>
                            ) : (
                              <button className="btn btn-secondary">Ticket Used</button>
                            )}

                            <button
                              type="button"
                              class="btn text-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              onClick={() => setDetailBooking(item)}
                            >
                              See Details
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div>...</div>
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                              Proof of Payment
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body d-flex justify-content-center align-items-center p-5 pt-5">
                            <div className="row g-0">
                              <div className="col-md-7 order-md-1 order-2">
                                <div className=" bg-light border">
                                  <div className="card-header bg-primary d-md-flex justify-content-between align-items-center px-5 text-white d-none">
                                    <h2>TICKETING</h2>
                                    <h5>Admit One</h5>
                                  </div>
                                  <div className="card-body px-5 py-5">
                                    <div className="row">
                                      <div className="col-md-12 col-6">
                                        <span className="text-secondary">Movie</span>
                                        <p className="fs-5">{detailBooking.name}</p>
                                      </div>
                                      <div className="col-md-4  col-6">
                                        <span className="text-secondary">Date</span>
                                        <p className="fs-5">
                                          {moment(detailBooking.dateBooking).format("LL")}
                                        </p>
                                      </div>
                                      <div className="col-md-4  col-6">
                                        <span className="text-secondary">Time</span>
                                        <p className="fs-5">{detailBooking.timeBooking}</p>
                                      </div>
                                      <div className="col-md-4  col-6">
                                        <span className="text-secondary">Category</span>
                                        <p className="fs-5 text-truncate">
                                          {" "}
                                          {detailBooking.category}
                                        </p>
                                      </div>
                                      <div className="col-md-4  col-6">
                                        <span className="text-secondary">Count</span>
                                        <p className="fs-5 text-truncate">
                                          {detailBooking.totalTicket}
                                        </p>
                                      </div>
                                      <div className="col-md-4  col-6">
                                        <span className="text-secondary">Seats</span>
                                        <p className="fs-5 text-truncate">
                                          {!detailBooking.seat
                                            ? null
                                            : detailBooking.seat.join(",")}
                                        </p>
                                      </div>
                                      <div className="col-md-4 col-6 d-none d-md-block">
                                        <span className="text-secondary">Price</span>
                                        <p className="fs-5 text-truncate">
                                          Rp.{detailBooking.totalPayment}
                                        </p>
                                      </div>
                                      <div
                                        className="border rounded d-flex justify-content-between align-items-center d-md-none"
                                        style={{ height: "50px" }}
                                      >
                                        <span className="fs-4">Price</span>
                                        <span className="fs-2">{detailBooking.totalPayment}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-5 order-md-2 order-1">
                                <div className=" bg-light border">
                                  <div className="card-header bg-primary d-md-flex justify-content-center align-items-center text-white d-none">
                                    <h2>TICKETING</h2>
                                  </div>
                                  <div className="card-body d-flex justify-content-center align-items-center py-5">
                                    <QRCodeSVG value={detailBooking.id} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                              onClick={() => setDetailBooking([])}
                            >
                              Close
                            </button>
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
      </section>
      <Footer />
    </>
  );
}

export default Profile;
