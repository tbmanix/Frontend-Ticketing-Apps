import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Pagination from "react-paginate";

import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { getMovie, postMovie, updateMovie, deleteMovie } from "../../stores/actions/movie";

import CardAdmin from "../../components/cardadmin";
import Navbar from "../../components/navbaradmin";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function ManageMovie() {
  document.title = "Tickitz | Manage Movie";

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const limit = 8;
  const [page, setPage] = useState(1);
  // const [data, setData] = useState([]);
  // const [pageInfo, setPageInfo] = useState({});
  const [sort, setSort] = useState("name ASC");
  const [search, setSearch] = useState("");
  // const [releaseDate, setReleaseDate] = useState(1);
  const movie = useSelector((state) => state.movie);

  const [form, setForm] = useState({
    name: "",
    category: "",
    releaseDate: "",
    cast: "",
    director: "",
    durationHour: "",
    durationMinute: "",
    synopsis: "",
    image: null
  });

  const [idMovie, setIdMovie] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    getDataMovie();
  }, [page, sort, search]);

  const getDataMovie = async () => {
    try {
      // console.log("GET DATA MOVIE");

      // const resultMovie = await axios.get(
      //   `movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}`
      // );

      // console.log(resultMovie);

      // // Output
      // setData(resultMovie.data.data);
      // setPageInfo(resultMovie.data.pagination);

      // setPageInfo(resultMovie.data.pagination);

      await dispatch(getMovie(page, limit, search, sort));
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSorting = (e) => {
    setSort(e.target.value);
    // getDataMovie();
  };

  console.log(sort);
  console.log(search);

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
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, [name]: files[0] });
      setImage(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };
  console.log(image);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { durationHour, durationMinute } = form;
    // setForm({ ...form, duration: `${durationHour}h ${durationMinute}m` });
    // delete form.durationHour;
    // delete form.durationMinute;
    const formData = new FormData();

    // formData.append("name", form.name);
    // formData.append("category", form.name);
    // formData.append("releaseDate", form.name);
    // formData.append("cast", form.name);
    // formData.append("director", form.name);
    // formData.append("duration", `${form.durationHour}h ${form.durationMinute}m`);
    // formData.append("synopsis", form.synopsis);
    // formData.append("image", form.image);

    for (const data in form) {
      formData.append(data, form[data]);
    }
    for (const data of formData.entries()) {
      console.log(data[0], ", " + data[1]);
      // name, "value"
    }
    console.log(formData);
    dispatch(postMovie(formData));

    // console.log(`${form.durationHour}h ${form.durationMinute}m`);
    getDataMovie();
    setImage(null);
    resetForm();
  };
  // console.log(form);

  const setUpdate = (data) => {
    const { id, name, category, releaseDate, cast, director, duration, synopsis, image } = data;

    // const durations = duration.split(" ")[0];
    // const durationHour = durations.slice(0, -1);
    setForm({
      ...form,
      name,
      category,
      releaseDate: releaseDate.split("T")[0],
      cast,
      director,
      // durationHour: duration.split(" ")[0].substring(0, duration.split(" ")[0].length - 1),
      // durationMinute: duration.split(" ")[1].substring(0, duration.split(" ")[1].length - 1),
      durationHour: duration.split(" ")[0].substring(0, duration.split(" ")[0].length - 1),
      durationMinute: duration.split(" ")[1].substring(0, duration.split(" ")[1].length - 1),
      synopsis,
      image
    });

    setIdMovie(id);
    setIsUpdate(true);
    console.log(form);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(idMovie);
    const formData = new FormData();
    for (const data in form) {
      formData.append(data, form[data]);
    }
    // formData.append("name", form.name)
    // axios.patch("...", formData)
    dispatch(updateMovie(idMovie, formData));

    getDataMovie();

    setIsUpdate(false);
    setImage(null);
    resetForm();
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
    console.log(id);
  };

  const resetForm = () => {
    setForm({
      name: "",
      category: "",
      releaseDate: "",
      cast: "",
      director: "",
      durationHour: "",
      durationMinute: "",
      synopsis: "",
      image: null
    });
  };

  return (
    <>
      {" "}
      <Navbar />
      <section className="main-payment">
        <div className="container-fluid">
          <div className="form__movie">
            <span className="main__title">Movie Selected</span>
            <div className="card card-order">
              <form
                onSubmit={isUpdate ? handleUpdate : handleSubmit}
                // onReset={handleReset}
                className=""
                action=""
              >
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="file"
                      name="image"
                      onChange={(e) => handleChangeForm(e)}
                      // value={form.image}
                    />
                    <div className="card image__preview">
                      {" "}
                      {image && (
                        <img
                          className="image__preview--item"
                          // src={image}
                          src={
                            isUpdate
                              ? `https://res.cloudinary.com/dx8zjtlv8/image/upload/v1651042190/${form.image}`
                              : image
                          }
                          alt="image movie preview"
                          // value={form.image}
                        />
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
                          <label className="label-form">Movie Name</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="text"
                              placeholder="Input Name"
                              name="name"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.name}
                            />
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Director</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="text"
                              placeholder="Input Director"
                              name="director"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.director}
                            />
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Release Date</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="date"
                              placeholder="Write your email"
                              name="releaseDate"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.releaseDate}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wrap-input">
                          <label className="label-form">Category</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="text"
                              placeholder="Input Category"
                              name="category"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.category}
                            />
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Cast</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="text"
                              placeholder="Input Cast"
                              name="cast"
                              onChange={(e) => handleChangeForm(e)}
                              value={form.cast}
                            />
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-md-6">
                            <div className="wrap-input form-duration">
                              <label className="label-form">Duration Hour</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="text"
                                  placeholder="Input Cast"
                                  name="durationHour"
                                  onChange={(e) => handleChangeForm(e)}
                                  value={form.durationHour}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wrap-input form-duration">
                              <label className="label-form">Duration Minutes</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="text"
                                  placeholder="Input Cast"
                                  name="durationMinute"
                                  onChange={(e) => handleChangeForm(e)}
                                  value={form.durationMinute}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="wrap-input">
                      <label className="label-form">Synopsis</label>
                      <div className="input-movie-synopsis">
                        <textarea
                          className="form-control"
                          rows="3"
                          name="synopsis"
                          onChange={(e) => handleChangeForm(e)}
                          value={form.synopsis}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-button-movie">
                  <button type="submit" className="btn btn-reset">
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
                <input
                  type="text"
                  className="me-3"
                  placeholder="search"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setSearch(e.target.value);
                    }
                  }}
                />
                <select name="sort" onChange={handleSorting}>
                  <option value="">Sort</option>
                  <option value="name ASC">A to Z</option>
                  <option value="name DESC">Z to A</option>
                </select>
              </div>
            </div>
            <div className="card card-order">
              <div className="d-flex flex-wrap text-center mt-5 justify-content-center">
                {movie.isLoading ? (
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  movie.data.map((item) => (
                    <CardAdmin
                      className="viewall__card"
                      key={item.id}
                      data={item}
                      handleDetail={handleDetailMovie}
                      setUpdate={setUpdate}
                      handleUpdate={handleUpdate}
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
              pageCount={Math.ceil(movie.pageInfo.totalPage)}
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

export default ManageMovie;
