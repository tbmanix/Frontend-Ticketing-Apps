import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import Pagination from "react-paginate";
import { Line } from "react-chartjs-2";
import chart from "chart.js/auto";

import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { getMovie, postMovie, updateMovie, deleteMovie } from "../../stores/actions/movie";

import CardAdmin from "../../components/cardadmin";
import Navbar from "../../components/navbaradmin";
import Footer from "../../components/footer";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  document.title = "Tickitz | Manage Movie";

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sortMovie = "id ASC";
  const searchMovie = "";
  const page = 1;
  const limit = 99;
  const [dataDashboard, setDataDashboard] = useState([]);
  const [dataMovie, setDataMovie] = useState([]);
  const [income, setIncome] = useState([]);
  const [form, setForm] = useState({
    premiere: "",
    movieId: "",
    location: ""
  });

  const dataIncome = (e) => {
    let resultIncome = [];
    // console.log(e.lenght);
    for (let n = 0; n < 12; n++) {
      for (let i = 0; i < e.length; i++) {
        for (let j = 0; j < 12; j++) {
          if (j === e[i].month) {
            resultIncome.push(e[i].total);
            j = 12;
          }
        }
        // i = e.length;
      }
      if (resultIncome.length === 12) {
        n = 12;
      }
    }
    return resultIncome;
  };

  console.log(dataIncome(income));

  const premiere = [
    { name: "Ebv.id", value: "Ebu.id" },
    { name: "Hiflix", value: "hiflix" },
    { name: "CineOne", value: "cineone" }
  ];
  const location = [
    { name: "Bogor", value: "bogor" },
    { name: "Jakarta", value: "jakarta" },
    { name: "Parung", value: "parung" },
    { name: "Jakarta", value: "jakarta" }
  ];

  useEffect(() => {
    getDataMovie();
  }, []);

  const getDataMovie = async () => {
    try {
      const result = await dispatch(getMovie(page, limit, searchMovie, sortMovie));
      setDataMovie(result.value.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSumbit = async (e) => {
    try {
      e.preventDefault();
      console.log("active");
      const result = await axios.get(
        `booking/dashboard?premiere=${form.premiere}&movieId=${form.movieId}&location=${form.location}`,
        form
      );
      setDataDashboard(result.data.data);
      setIncome(
        result.data.data.map((item, index) => {
          return item.total;
        })
        // result.data.data.map((item) => {
        //   let result = [];
        //   for (let i = 0; i < 12; i++) {
        //     if (item.month !== i) {
        //       result.push(0);
        //     } else {
        //       result.push(item.total);
        //     }
        //     console.log(result);
        //   }
        //   return result;
        // })
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    setForm({
      premiere: "",
      movieId: "",
      location: ""
    });
    setIncome([]);
  };
  console.log(income);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: false,
        text: "Chart.js Line Chart"
      }
    }
  };

  // console.log(dataDashboard);

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Agustus",
    "September",
    "October",
    "November",
    "Desember"
  ];
  // const income = dataDashboard.map((item) => {
  //   return item.total;
  // });

  const dataChart = {
    labels,
    datasets: [
      {
        label: "Income",
        data: income,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)"
      }
    ]
  };

  return (
    <>
      <Navbar />
      <section className="main-dashboard nb-5">
        <div className="container-fluid">
          <div className="form__movie">
            <div className="row">
              <div className="col-md-8">
                <span className="main__title">Dashboard</span>
                <div className="card card-order">
                  <Line options={options} data={dataChart} />
                </div>
              </div>
              <div className="col-md-4 ">
                <span className="main__title">Filtered</span>
                <div className="card ">
                  <form onSubmit={handleSumbit} onReset={handleReset}>
                    <div className="d-flex flex-column justify-content-space-around">
                      <div className="d-flex flex-column">
                        <select
                          name="movieId"
                          className="select__filter--dashboard"
                          onChange={(e) => handleChangeForm(e)}
                          value={form.movieId}
                        >
                          <option value="">Select Movie</option>
                          {dataMovie.map((item, index) => (
                            <option value={item.id} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <select
                          name="premiere"
                          className="select__filter--dashboard"
                          onChange={(e) => handleChangeForm(e)}
                          value={form.premiere}
                        >
                          <option value="">Select Premiere</option>
                          {premiere.map((item, index) => (
                            <option value={item.value} key={index}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                        <select
                          name="location"
                          className="select__filter--dashboard"
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
                      <div className="d-flex flex-column">
                        {" "}
                        <button className="btn__filter--dashboard primary " type="submit">
                          Filter
                        </button>
                        <button className="btn__filter--dashboard secondary" type="reset">
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
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

export default Dashboard;
