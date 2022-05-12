import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Pagination from "react-paginate";

import "./index.css";

import CardAdmin from "../../components/cardadmin";
import Navbar from "../../components/navbaradmin";
import Footer from "../../components/footer";

function ManageMovie() {
  const limit = 8;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [sort, setSort] = useState("name ASC");
  const [search, setSearch] = useState("");

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    getDataMovie();
  }, [page, , sort, search]);

  const getDataMovie = async () => {
    try {
      console.log("GET DATA MOVIE");

      const resultMovie = await axios.get(
        `movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}`
      );

      console.log(resultMovie);

      // Output
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
      // setPageInfo(resultMovie.data.pagination);
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
                // onSubmit={handleSubmit}
                // onReset={handleReset}
                className=""
                action=""
              >
                <div className="row">
                  <div className="col-md-4">
                    <input type="file" name="image" />
                    <div className="card"></div>
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
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="wrap-input">
                          <label className="label-form">Password</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="password"
                              placeholder="Input Password"
                              name="password"
                            />
                          </div>
                        </div>
                        <div className="wrap-input">
                          <label className="label-form">Cast</label>
                          <div className="input-movie">
                            <input
                              className="input-form-movie"
                              type="password"
                              placeholder="Input Cast"
                              name="password"
                            />
                          </div>
                        </div>
                        <div className="row form-duration">
                          <div className="col-md-6">
                            <div className="wrap-input">
                              <label className="label-form">Duration Hour</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="password"
                                  placeholder="Input Cast"
                                  name="password"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="wrap-input">
                              <label className="label-form">Duration Minutes</label>
                              <div className="input-movie">
                                <input
                                  className="input-form-movie"
                                  type="password"
                                  placeholder="Input Cast"
                                  name="password"
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
                        <textarea className="form-control" rows="3" name="synopsis"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-button-movie">
                  <button type="submit" className="btn btn-reset">
                    Reset
                  </button>
                  <button type="submit" className="btn btn-submit">
                    Submit
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
                {data.map((item) => (
                  <CardAdmin
                    className="viewall__card"
                    key={item.id}
                    data={item}
                    handleDetail={handleDetailMovie}
                  />
                ))}
              </div>
            </div>
            <Pagination
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={Math.ceil(pageInfo.totalPage)}
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
