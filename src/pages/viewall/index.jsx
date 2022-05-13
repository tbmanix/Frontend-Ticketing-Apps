import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Pagination from "react-paginate";

import "./index.css";

import Card from "../../components/card";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import { useSelector, useDispatch } from "react-redux";
import { getMovie } from "../../stores/actions/movie";
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";

function ViewAll() {
  document.title = "Tickitz | View All";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //params Url
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const [page, setPage] = useState(params.page ? params.page : "1");
  const [releaseDate, setReleaseDate] = useState(params.page ? params.releaseDate : null);

  const limit = 8;
  // const [page, setPage] = useState(1);
  // const [releaseDate, setReleaseDate] = useState();
  // const [releaseDate, setReleaseDate] = useState(null);
  // const [data, setData] = useState([]);
  // const [pageInfo, setPageInfo] = useState({});
  const [sort, setSort] = useState("name ASC");
  const [search, setSearch] = useState("");

  const month = [
    { number: 1, title: "Januari" },
    { number: 2, title: "Februari" },
    { number: 3, title: "Maret" },
    { number: 4, title: "April" },
    { number: 5, title: "Mei" },
    { number: 6, title: "Juni" },
    { number: 7, title: "Juli" },
    { number: 8, title: "Agustus" },
    { number: 9, title: "September" },
    { number: 10, title: "Oktober" },
    { number: 11, title: "November" },
    { number: 12, title: "Desember" }
  ];

  const movie = useSelector((state) => state.movie);

  useEffect(() => {
    getDataMovie();
  }, []);

  // with params url
  useEffect(() => {
    getDataMovie();

    const params = {};
    if (page !== "1") {
      params.page = page;
    }
    if (releaseDate) {
      params.releaseDate = releaseDate;
    }
    navigate({
      pathname: "/viewall",
      search: `?${createSearchParams(params)}`
    });
  }, [page, releaseDate, sort, search]);

  // useEffect(() => {
  //   getDataMovie();
  // }, [page, releaseDate, sort, search]);

  // const getDataMovie = async () => {
  //   try {
  //     console.log("GET DATA MOVIE");

  //     // Input
  //     //   console.log(limit);
  //     //   console.log(page);
  //     // Proses
  //     //   if (!releaseDate) {
  //     //     const resultMovie = await axios.get(`movie/?limit=${limit}`);
  //     //     console.log(resultMovie);
  //     //   } else {
  //     //     const resultMovie = await axios.get(
  //     //       `movie/?limit=${limit}&searchReleaseDate=${releaseDate}`
  //     //     );
  //     //     console.log(resultMovie);
  //     //   }
  //     const resultMovie = !releaseDate
  //       ? await axios.get(`movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}`)
  //       : await axios.get(
  //           `movie/?page=${page}&limit=${limit}&searchName=${search}&sort=${sort}&searchReleaseDate=${releaseDate}`
  //         );

  //     console.log(resultMovie);

  //     // Output
  //     setData(resultMovie.data.data);
  //     setPageInfo(resultMovie.data.pagination);
  //     // setPageInfo(resultMovie.data.pagination);
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };
  //   console.log(releaseDate);

  //   const handleMonth = (e) => {
  //     console.log(e);
  //     setReleaseDate(e);
  //     // getDataMovie();
  //   };

  const getDataMovie = async () => {
    try {
      await dispatch(getMovie(page, limit, search, sort, releaseDate));
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSorting = (e) => {
    setSort(e.target.value);
    // getDataMovie();
  };

  console.log(sort);
  console.log(releaseDate);
  console.log(search);

  const handlePagination = (data) => {
    setPage(data.selected + 1);

    // console.log(data.selected + 1);
    // setPage(data.selected + 1);
  };

  // console.log(data);
  // console.log(pageInfo);
  const handleDetailMovie = (id) => {
    console.log(id);
    navigate(`/movie/detail/${id}`);
  };

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="viewall">
        <div className="d-flex justify-content-between">
          <div>
            <span className="main__title">All Movie</span>
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
        <div className="d-flex flex-nowrap overflow-auto text-center my-5">
          {month.map((item) => (
            <button
              type="button"
              className="upcoming__btn"
              // className={`btn mx-1 my-2 ${
              //   item.number === releaseDate ? "btn-primary" : "btn-outline-primary"
              // }`}
              onClick={() => setReleaseDate(item.number)}
              key={item.number}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="d-flex flex-wrap text-center mt-5 justify-content-center">
          {movie.isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            movie.data.map((item) => (
              <Card
                className="viewall__card"
                key={item.id}
                data={item}
                handleDetail={handleDetailMovie}
              />
            ))
          )}
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
          initialPage={page - 1}
        />
      </div>
      <Footer />
    </div>
    //without redux
    // <div className="container-fluid">
    //   <Navbar />
    //   <div className="viewall">
    //     <div className="d-flex justify-content-between">
    //       <div>
    //         <span className="main__title">All Movie</span>
    //       </div>

    //       <div>
    //         <input
    //           type="text"
    //           className="me-3"
    //           placeholder="search"
    //           onKeyPress={(e) => {
    //             if (e.key === "Enter") {
    //               setSearch(e.target.value);
    //             }
    //           }}
    //         />
    //         <select name="sort" onChange={handleSorting}>
    //           <option value="">Sort</option>
    //           <option value="name ASC">A to Z</option>
    //           <option value="name DESC">Z to A</option>
    //         </select>
    //       </div>
    //     </div>
    //     <div className="d-flex flex-nowrap overflow-auto text-center my-5">
    //       {month.map((item) => (
    //         <button
    //           type="button"
    //           className="upcoming__btn"
    //           // className={`btn mx-1 my-2 ${
    //           //   item.number === releaseDate ? "btn-primary" : "btn-outline-primary"
    //           // }`}
    //           onClick={() => setReleaseDate(item.number)}
    //           key={item.number}
    //         >
    //           {item.title}
    //         </button>
    //       ))}
    //     </div>
    //     <div className="d-flex flex-wrap text-center mt-5 justify-content-center">
    //       {data.map((item) => (
    //         <Card
    //           className="viewall__card"
    //           key={item.id}
    //           data={item}
    //           handleDetail={handleDetailMovie}
    //         />
    //       ))}
    //     </div>
    //     <Pagination
    //       previousLabel={"Previous"}
    //       nextLabel={"Next"}
    //       breakLabel={"..."}
    //       pageCount={Math.ceil(pageInfo.totalPage)}
    //       onPageChange={handlePagination}
    //       containerClassName={"pagination"}
    //       subContainerClassName={"pages pagination"}
    //       activeClassName={"active"}
    //     />
    //   </div>
    //   <Footer />
    // </div>
  );
}

export default ViewAll;
