import { useEffect, useState } from "react";
import Card from "../../../components/basic/Card";
import axios from "../../../utils/axios";
import Pagination from "react-paginate";

function Home() {
  const limit = 6;
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    getDataMovie();
  }, []);

  useEffect(() => {
    getDataMovie();
  }, [page]);

  const getDataMovie = async () => {
    try {
      console.log("get data movie");
      // input
      //   console.log(limit);
      //   console.log(page);
      // proses
      const resultMovie = await axios.get(`movie?page=${page}&limit=${limit}`);
      //   console.log(resultMovie);
      // output
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  //   console.log(data);
  //   console.log(pageInfo);

  const handleDetailMovie = (id) => {
    console.log(id);
  };

  const handlePagination = (data) => {
    console.log(data.selected + 1);
    setPage(data.selected + 1);
  };

  return (
    <div className="text-center container">
      <h1>Home Page</h1>
      <hr />
      <div className="row">
        {/* <div className="col-md-4"> */}
        {/* <div className="card">
            <img
              src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Movie Name</h5>
              <p className="card-text">Category</p>
              <a href="#" className="btn btn-primary">
                Detail
              </a>
            </div>
          </div> */}
        {data.map((item) => (
          <div className="col-md-4" key={item.id}>
            <Card data={item} handleDetail={handleDetailMovie} />
          </div>
        ))}

        {/* </div> */}
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
  );
}

export default Home;
