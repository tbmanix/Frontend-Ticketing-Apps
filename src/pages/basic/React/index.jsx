import React, { useState } from "react";
import "./index.css";
import styles from "./React.module.css";
import Navbar from "../../../components/basic/Navbar";
import Card from "../../../components/basic/Card";

import { useSelector } from "react-redux";

function BasicReact() {
  const counter = useSelector((state) => state.counter);

  const data = [
    { id: 1, name: "Spiderman" },
    { id: 2, name: "Batman" },
    { id: 3, name: "Lego" }
  ];
  const [email, setEmail] = useState("");
  // const [keyword, setKeyword] = useState("");
  const [showDate, setShowDate] = useState(false);
  // const [selectedSeat, setSelectedSeat] = useState([]);
  const [showInputTime, setShowInputTime] = useState(false);
  const [form, setForm] = useState({
    time: []
  });

  const [formSchedule, setFormSchedule] = useState({
    movieId: ""
  });
  const [image, setImage] = useState("");
  const dataSchedule = [
    {
      premiere: "ebu.id",
      movieId: 1
      // image: "spiderman.png"
    },
    {
      id: 2,
      name: "batman",
      image: "batman.png"
    }
  ];
  const dataMovie = [
    {
      id: 1,
      name: "spiderman",
      image: "spiderman.png"
    },
    {
      id: 2,
      name: "batman",
      image: "batman.png"
    },
    {
      id: 3,
      name: "lego",
      image: "lego.png"
    }
  ];

  const handleChangeForm = (event) => {
    console.log(event.target.value);
    if (event.target.name === "movie") {
      const allDataMovie = dataMovie.find((item) => {
        if (item.id == event.target.value) {
          return true;
        }
      });
      setFormSchedule({ ...formSchedule, movieId: event.target.value });
      setImage(allDataMovie.image);
    }
  };
  const setUpdate = (data) => {
    console.log(data);
    setFormSchedule({
      ...formSchedule,
      movieId: data.movieId
    });
    setImage(data.image);
  };

  const handleClick = (age, name) => {
    alert("Button clicked !");
    console.log(name, age);
  };
  const handleSubmit = (event, data) => {
    event.preventDefault();
    console.log("Submit", data);
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("Reset");
  };

  // const handleChangeEmail = (event) => {
  //   console.log(event.target.value);
  //   setEmail(event.target.value);
  // };
  const handleSearch = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      console.log("User Press Enter !");
      console.log("Keyword : ", event.target.value);
    }
  };
  const handleDetailMovie = (id, data) => {
    console.log("Detail Clicked", id);
    console.log(data);
  };
  const handleAddTime = (event) => {
    if (event.key === "Enter") {
      setShowInputTime(false);
      setForm({
        ...form,
        time: [...form.time, event.target.value]
      });
    }
  };

  const handleSubmitSchedule = () => {
    const setData = {
      ...form,
      time: form.time.join()
    };
    console.log(setData);
  };

  return (
    <div className="text-center">
      <h1>Basic React Page</h1>
      <div>
        <hr />
        {/* Data Counter redux {counter.count} */}
        <hr />
        <h3>Component</h3>
        <Navbar />
        <hr />
        {/* <Card name="Spiderman" category="Action" handleDetail={handleDetailMovie} /> */}
        <hr />
        <h3>Mapping</h3>
        {/* {data.map(() => ())} */}
        {data.map((item, index) => (
          <div key={item.id}>
            <button>
              {item.name} {index}
            </button>
          </div>
        ))}
        <hr />
        <h3>Event</h3>
        <h5>Button</h5>
        {/* onClick */}
        <button onClick={handleClick} className="btn btn-primary">
          Click Me !
        </button>
        <button onClick={() => handleClick(1, "Bagus")}>Click Me !</button>
        {/* onSubmit & onReset digunakan untuk handling di dalam tag form dimana harus menambahkan event.preventDefault() supaya page tidak ke reload */}
        <form
          // onSubmit={(event) => handleSubmit(event, "data")}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          {/* INPUT EMAIL */}
          <button onClick={handleClick}>onClick</button>
          <button type="submit">onSubmit</button>
          <button type="reset">onReset</button>
        </form>
        <hr />
        <h5>Input</h5>
        {/* onChange */}
        <input
          type="email"
          placeholder="Input your email ..."
          // [1]
          // onChange={handleChangeEmail}
          // [2]
          onChange={(event) => setEmail(event.target.value)}
        />
        <h6>Your email is {email}</h6>
        {/* onKeyPress */}
        <input type="text" placeholder="Search ..." onKeyPress={handleSearch} />
        <hr />
        <hr />
        <h3>Conditional Rendering</h3>
        <h5>Short Logic</h5>
        {/* Type Data Boolean setShowDate(!showDate) */}
        <button onClick={() => setShowDate(!showDate)}>Show Date</button>
        {showDate && <h1>{new Date().toLocaleDateString()}</h1>}
        <h5>Ternary Operator</h5>
        {/* {data.length > 0 ? () : ()} */}
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={item.id}>
              <button>
                {item.name} {index}
              </button>
            </div>
          ))
        ) : (
          <h6>Data Not Found</h6>
        )}
        <hr />
        <h3>Style In React</h3>
        {/* global */}
        <h1 className="heading">Hello World</h1>
        {/* react module */}
        <h1 className={`${styles.heading} ${styles.textUnderline} text-center`}>Hello World</h1>
        <h1 className={(styles.heading, styles.textUnderline)}>Hello World</h1>
        <h1 className={styles.heading2}>Hello World</h1>
        <hr />
        <h3>Handle Input Time</h3>
        {showInputTime ? (
          <input type="text" onKeyPress={handleAddTime} />
        ) : (
          <button onClick={() => setShowInputTime(true)}>+</button>
        )}
        <hr />
        {form.time.map((item) => (
          <div key={item}>{item}</div>
        ))}
        <button onClick={handleSubmitSchedule}>Submit</button>
        <hr />
      </div>
      <h3>Handle Update Schedule</h3>
      <select name="movie" onChange={handleChangeForm} value={formSchedule.movieId}>
        <option value="">Select Movie</option>
        {dataMovie.map((item) => (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <p>GAMBAR HERE : {image}</p>
      <hr />
      {dataSchedule.map((item, index) => (
        <div className="card" key={index}>
          {item.premiere}
          <button onClick={() => setUpdate(item)}>Update</button>
        </div>
      ))}
      <div style={{ height: "500px" }}></div>
    </div>
  );
}

export default BasicReact;

// import React, { useState } from "react";
// import "./index.css";
// import styles from "./React.module.css";
// import Navbar from "../../../components/basic/Navbar";

// function BasicReact() {
//   const data = [
//     { id: 1, name: "Spiderman" },
//     { id: 2, name: "Batman" },
//     { id: 3, name: "Lego" }
//   ];

//   const [email, setEmail] = useState();
//   const [keyword, setKeyword] = useState();
//   const [showDate, setShowDate] = useState(false);

//   const handleClick = (no, name) => {
//     alert("Button clicked!");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); //agar tidak reload page menggunakan event
//     console.log("Submit");
//   };

//   const handleReset = (event) => {
//     event.preventDefault();
//     console.log("reset");
//   };

//   const handleChangeEmail = (event) => {
//     console.log(event.target.value);
//     setEmail(event.target.value);
//   };

//   const handleSearch = (event) => {
//     console.log(event.target.value);
//     if (event.key === "Enter") {
//       console.log("User Press Enter!");
//       console.log("keyword: ", event.target.value);
//     }
//   };

//   return (
//     <>
//       <h1>Basic React Page</h1>
//       <hr />
//       <h3>Component</h3>
//       <Navbar />
//       <hr />
//       <h3>Mapping</h3>
//       {data.map((item, index) => (
//         <div key={item.id}>
//           <button>{item.name}</button>
//         </div>
//       ))}
//       <h3>Event</h3>
//       <h5>Button</h5>
//       <button onClick={handleClick} className="btn btn-primary">
//         Click Me!
//       </button>
//       <button onClick={() => handleClick(1, "Tubagus")}>Click Me!</button>

//       <form onSubmit={handleSubmit} onReset={handleReset}>
//         <button onClick={handleClick}>Click Me!</button>
//         <button type="submit">Submit</button>
//         <button type="reset">Reset</button>
//       </form>
//       <h5>Input</h5>
//       <input
//         type="email"
//         placeholder="Input your email ..."
//         //   onChange={(event) => setEmail(event.target.value)}
//         onChange={handleChangeEmail}
//       />
//       <h6>Your email is {email}</h6>

//       <input type="text" placeholder="search ..." onKeyPress={handleSearch} />

//       <h3>Conditional Rendering</h3>
//       <h5>Short Logic</h5>
//       <button onClick={() => setShowDate(!showDate)}>Show Date</button>
//       {showDate && <h1>{new Date().toLocaleDateString()}</h1>}
//       <h5>Ternary Operator</h5>
//       {data.length > 0 ? (
//         data.map((item, index) => (
//           <div key={item.id}>
//             <button>{item.name}</button>
//           </div>
//         ))
//       ) : (
//         <h6>Data Not Found</h6>
//       )}
//       <h3>Style in React</h3>
//       {/* react module */}
//       <h1 className={`${styles.heading} ${styles.textUnderline} text-center`}>Hello World</h1>
//       <h1 className={(styles.heading, styles.textUnderline)}>Hello World</h1>
//       <h1 className={styles.heading2}>Hello World</h1>
//     </>
//   );
// }

// export default BasicReact;
