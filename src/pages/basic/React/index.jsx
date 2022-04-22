import React, { useState } from "react";
import "./index.css";
import styles from "./React.module.css";

function BasicReact() {
  const data = [
    { id: 1, name: "Spiderman" },
    { id: 2, name: "Batman" },
    { id: 3, name: "Lego" },
  ];

  const [email, setEmail] = useState();
  const [keyword, setKeyword] = useState();
  const [showDate, setShowDate] = useState(false);

  const handleClick = (no, name) => {
    alert("Button clicked!");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //agar tidak reload page menggunakan event
    console.log("Submit");
  };

  const handleReset = (event) => {
    event.preventDefault();
    console.log("reset");
  };

  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
    if (event.key === "Enter") {
      console.log("User Press Enter!");
      console.log("keyword: ", event.target.value);
    }
  };

  return (
    <>
      <h1>Basic React Page</h1>
      <hr />
      <h3>Mapping</h3>
      {data.map((item, index) => (
        <div key={item.id}>
          <button>{item.name}</button>
        </div>
      ))}
      <h3>Event</h3>
      <h5>Button</h5>
      <button onClick={handleClick} className="btn btn-primary">
        Click Me!
      </button>
      <button onClick={() => handleClick(1, "Tubagus")}>Click Me!</button>

      <form onSubmit={handleSubmit} onReset={handleReset}>
        <button onClick={handleClick}>Click Me!</button>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <h5>Input</h5>
      <input
        type="email"
        placeholder="Input your email ..."
        //   onChange={(event) => setEmail(event.target.value)}
        onChange={handleChangeEmail}
      />
      <h6>Your email is {email}</h6>

      <input type="text" placeholder="search ..." onKeyPress={handleSearch} />

      <h3>Conditional Rendering</h3>
      <h5>Short Logic</h5>
      <button onClick={() => setShowDate(!showDate)}>Show Date</button>
      {showDate && <h1>{new Date().toLocaleDateString()}</h1>}
      <h5>Ternary Operator</h5>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={item.id}>
            <button>{item.name}</button>
          </div>
        ))
      ) : (
        <h6>Data Not Found</h6>
      )}
      <h3>Style in React</h3>
      {/* react module */}
      <h1 className={`${styles.heading} ${styles.textUnderline} text-center`}>
        Hello World
      </h1>
      <h1 className={(styles.heading, styles.textUnderline)}>Hello World</h1>
      <h1 className={styles.heading2}>Hello World</h1>
    </>
  );
}

export default BasicReact;
