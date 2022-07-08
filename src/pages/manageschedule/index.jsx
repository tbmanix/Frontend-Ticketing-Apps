import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Pagination from "react-paginate";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { getMovie, postMovie, updateMovie, deleteMovie } from "../../stores/actions/movie";
import {
  deleteSchedule,
  getSchedule,
  postSchedule,
  updateSchedule
} from "../../stores/actions/schedule";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import cardSchedule from "../../components/cardschedule";
import CardScheduleAdmin from "../../components/cardscheduleadmin";

import logoebv from "../../assets/ebv.id 2.png";
import logocineone from "../../assets/cineonesponsor.png";
import logohiflix from "../../assets/hiflixspnsor.png";

function ManageSchedule() {
  document.title = "Tickitz | Manage Movie";

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const limitMovie = 99;
  const sortMovie = "name ASc";
  const searchMovie = "";
  const pageMovie = 1;
  const limit = 6;
  const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);
  // const [pageInfo, setPageInfo] = useState({});
  const [sort, setSort] = useState("premiere ASC");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchById, setSearchById] = useState(null);
  // const [releaseDate, setReleaseDate] = useState(1);
  const movie = useSelector((state) => state.movie);
  const schedule = useSelector((state) => state.schedule);

  const premiereInput = [
    { name: "ebv.id", title: logoebv },
    { name: "hiflix", title: logohiflix },
    { name: "cineone", title: logocineone }
  ];
  const location = [
    { value: "bogor", name: "Bogor" },
    { value: "jakarta", name: "Jakarta" },
    { value: "tangerang", name: "Tangerang" }
  ];

  const [form, setForm] = useState({
    movieId: "",
    premiere: "",
    price: "",
    location: "",
    dateStart: "",
    dateEnd: "",
    time: []
  });

  const [idMovie, setIdMovie] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [image, setImage] = useState(null);
  const [idSchedule, setIdSchedule] = useState("");

  const [showInputTime, setShowInputTime] = useState(false);

  useEffect(() => {
    getDataMovie();
    getDataSchedule();
  }, []);

  useEffect(() => {
    getDataMovie();
    getDataSchedule();
  }, [page, sort, searchLocation, searchById]);

  const getDataMovie = async () => {
    try {
      await dispatch(getMovie(pageMovie, limitMovie, searchMovie, sortMovie));
    } catch (error) {
      console.log(error.response);
    }
  };

  const getDataSchedule = async () => {
    try {
      const result = await dispatch(getSchedule(page, limit, searchLocation, sort, searchById));

      // setDataMovie(result.value.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  console.log(movie);

  const handleSorting = (e) => {
    setSort(e.target.value);
    // getDataMovie();
  };
  const handleFilterLocation = (e) => {
    setSearchLocation(e.target.value);
    // getDataMovie();
  };
  const handleFilterMovie = (e) => {
    setSearchById(e.target.value);
    // getDataMovie();
  };

  console.log(sort);
  // console.log(search);

  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  // console.log(data);
  // console.log(pageInfo);
  const handleDetailMovie = (id) => {
    console.log(id);
  };

  const handleChangeForm = (e) => {
    console.log(e.target.value);
    if (e.target.name === "movieId") {
      const allDataMovie = movie.data.find((item) => {
        if (item.id == e.target.value) {
          return true;
        }
      });
      setForm({ ...form, [e.target.name]: e.target.value });
      setImage(allDataMovie.image);
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(form);

      // setForm({ ...form, time: form.time.join(",") });

      const res = await dispatch(postSchedule(form));
      swal(res.value.data.message, {
        icon: "success"
      });
      // console.log(`${form.durationHour}h ${form.durationMinute}m`);
      getDataSchedule();
      resetForm();
    } catch (error) {
      console.log(error.response);
      swal(error.response.data.message, {
        icon: "error"
      });
    }
  };
  // console.log(form);

  const handleAddTime = (event) => {
    if (event.key === "Enter") {
      setShowInputTime(false);
      setForm({
        ...form,
        time: [...form.time, event.target.value]
      });
    }
  };

  const handleSetPremiere = (e) => {
    console.log(e);
    setForm({ ...form, premiere: e });
  };

  const setUpdate = (data) => {
    setForm({
      ...form,
      movieId: data.movieId,
      location: data.location,
      premiere: data.premiere,
      price: data.price,
      dateStart: data.dateStart.split("T")[0],
      dateEnd: data.dateEnd.split("T")[0],
      time: data.time
    });
    setImage(data.image);
    setIsUpdate(true);
    setIdSchedule(data.id);
  };
  // console.log(idSchedule);

  // const setUpdate = (data) => {
  //   // const { id, name, category, releaseDate, cast, director, duration, synopsis, image } = data;
  //   // // const durations = duration.split(" ")[0];
  //   // // const durationHour = durations.slice(0, -1);
  //   // setForm({
  //   //   ...form,
  //   //   name,
  //   //   category,
  //   //   releaseDate: releaseDate.split("T")[0]
  //   // });
  //   // setIdMovie(id);
  //   // setIsUpdate(true);
  //   // setImage(image);
  //   // console.log(form);
  // };

  const handleUpdate = async (e) => {
    try {
      e.preventDefault();
      const res = await dispatch(updateSchedule(idSchedule, form));
      swal(res.value.data.message, {
        icon: "success"
      });
      getDataSchedule();
      setIsUpdate(false);
      setImage(null);
      resetForm();
    } catch (error) {
      console.log(error.response);
      resetForm();
    }
  };

  const handleDelete = (data) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteSchedule(data.id))
          .then((res) => {
            console.log(res);
            swal(res.value.data.message, {
              icon: "success"
            });
            getDataSchedule();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        swal("Your schedule file is safe!");
      }
    });
    // try {
    //   swal({
    //     title: "Are you sure?",
    //     text: "You wan to delete this?",
    //     icon: "warning",
    //     dangerMode: true
    //   }).then(willDelete=>{
    //     if(willDelete){
    //       await dispatch(deleteSchedule(data.id));
    //       swal({
    //         title: "Done!",
    //         text: "Schedule is deleted",
    //         icon: "success",
    //         timer:2000,
    //         button:false
    //       })
    //       getDataSchedule();
    //     }
    //   })
    // } catch (error) {
    //   console.log(error.response);
    //   swal({
    //     title: "Done!",
    //     text: "Schedule is deleted",
    //     icon: "",
    //     timer:2000,button:false
    //   })
    // }
  };

  const resetForm = () => {
    setForm({
      movieId: "",
      premiere: "",
      price: "",
      location: "",
      dateStart: "",
      dateEnd: "",
      time: []
    });
    setIsUpdate(false);
    setImage(null);
  };

  return (
    <>
      <Navbar />
      <section className="main-payment">
        <div className="container-fluid">
          <div className="form__movie">
            <span className="main__title">Movie Selected</span>
            <div className="card card-order">
              <form
                onSubmit={isUpdate ? handleUpdate : handleSubmit}
                // onSubmit={handleSubmit}
                // onReset={handleReset}
                className=""
                action=""
              >
                <div className="row">
                  <div className="col-md-4">
                    <div className="card image__preview">
                      {/* {form.image} */}
                      {image ? (
                        <img
                          className="backgroundFoto"
                          // src={image}
                          src={`https://res.cloudinary.com/dx8zjtlv8/image/upload/v1651042190/${image}`}
                          alt="image movie preview"
                          // value={form.image}
                        />
                      ) : (
                        <div className="backgroundFoto"></div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-8">
                    {/* {!message ? null : isError ? (
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    ) : (
                      <div className="alert alert-primary" role="alert">
                        {message}
                      </div>
                    )} */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="wrap-input">
                          <label className="label-form">Movie</label>
                          <div className="input-movie">
                            {/* <input
                              className="input-form-movie"
                              type="text"
                              placeholder="Input Name"
                              name="name"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.name}
                            /> */}
                            <select
                              name="movieId"
                              className="selectMovie"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.movieId}
                            >
                              <option value="">Select Movie</option>
                              {movie.data.map((item, index) => (
                                <option value={item.id} key={index}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Price</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="number"
                              placeholder="Input Price"
                              name="price"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.price}
                            />
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Premiere</label>
                          {/* <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="date"
                              placeholder="Write your email"
                              name="releaseDate"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.releaseDate}
                            />
                          </div> */}
                          <div className="row">
                            {premiereInput.map((item) => (
                              <div className="col-md-4" key={item.name}>
                                <button
                                  type="button"
                                  className={
                                    form.premiere !== item.name
                                      ? "button-premiere"
                                      : "button-premiere-active"
                                  }
                                  name="premiere"
                                  value={form.premiere}
                                  // onChange={(e) => handleChangeForm(e)}
                                  onClick={() => handleSetPremiere(item.name)}
                                >
                                  <img className="img-fluid" src={item.title} alt="" />
                                </button>
                              </div>
                            ))}
                            {/* <div className="col-md-4">
                              <button name="premiere" value="ebv.id">
                                ubv.id
                              </button>
                            </div>
                            <div className="col-md-4">
                              <button name="premiere" value="hiflix">
                                hiflix
                              </button>
                            </div>
                            <div className="col-md-4">
                              <button name="premiere" value="cineone21">
                                CinenOne21
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wrap-input">
                          <label className="label-form">Location</label>
                          <div className="input-movie">
                            <select
                              name="location"
                              className="select-location"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.location}
                            >
                              <option value="">Select Location</option>
                              {location.map((item, index) => (
                                <option value={item.value} key={index}>
                                  {item.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-md-6">
                            <div className="wrap-input form-duration">
                              <label className="label-form">Date Start</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="date"
                                  placeholder="Input Cast"
                                  name="dateStart"
                                  onChange={(e) => handleChangeForm(e)}
                                  value={form.dateStart}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wrap-input form-duration">
                              <label className="label-form">Date End</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="date"
                                  placeholder="Input Cast"
                                  name="dateEnd"
                                  onChange={(e) => handleChangeForm(e)}
                                  value={form.dateEnd}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Time</label>
                          <div className="row">
                            <div className="col-md-3">
                              {showInputTime ? (
                                <input
                                  type="text"
                                  className="time-schedule"
                                  onKeyPress={handleAddTime}
                                />
                              ) : (
                                <button
                                  className="time-schedule"
                                  onClick={() => setShowInputTime(true)}
                                >
                                  +
                                </button>
                              )}
                            </div>
                            {form.time.map((item) => (
                              <div className="col-md-3 ">
                                <div className="time-schedule" key={item}>
                                  {item}
                                </div>
                              </div>
                            ))}
                            <div>
                              <button
                                type="button"
                                className="time-schedule"
                                onClick={() => setForm({ ...form, time: [] })}
                              >
                                reset
                              </button>
                            </div>

                            {/* <div className="col-md-3 ">
                              <div className="time-schedule">11:00</div>
                            </div>
                            <div className="col-md-3 ">
                              <div className="time-schedule">11:00</div>
                            </div>
                            <div className="col-md-3 ">
                              <div className="time-schedule">11:00</div>
                            </div>
                            <div className="col-md-3 ">
                              <div className="time-schedule">11:00</div>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-button-movie">
                  <button type="button" onClick={resetForm} className="btn btn-reset">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-submit">
                    {isUpdate ? "Update" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="movie__data">
            <div className="d-flex justify-content-between">
              <div>
                <span className="main__title">Data Movie</span>
              </div>
              <div>
                {/* <input
                  type="text"
                  className="me-3 search"
                  placeholder="search"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setSearch(e.target.value);
                    }
                  }}
                /> */}
                <select className="sort" name="sort" onChange={handleSorting}>
                  <option value="">Sort</option>
                  <option value="name ASC">A to Z</option>
                  <option value="name DESC">Z to A</option>
                </select>
                <select className="sort" name="location" onChange={handleFilterLocation}>
                  <option value="">Location</option>
                  {location.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
                <select className="sort" name="movie" onChange={handleFilterMovie}>
                  <option value="">Movie</option>
                  {movie.data.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="card card-order">
              <div className="d-flex flex-wrap text-center mt-5 justify-content-center">
                {schedule.isLoading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  schedule.data.map((item) => (
                    <CardScheduleAdmin
                      key={item.id}
                      data={item}
                      // handleDetail={handleDetailMovie}
                      setUpdate={setUpdate}
                      // handleUpdate={handleUpdate}
                      handleDelete={handleDelete}
                    />
                  ))
                )}
              </div>
            </div>
            <Pagination
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(schedule.pageInfo.totalPage)}
              onPageChange={handlePagination}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManageSchedule;
