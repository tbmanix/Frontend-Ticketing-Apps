import React, { useState } from "react";
import TitleBanner from "../../components/titlebanner";
import FormSignUp from "../../components/formsignup";

function SignUp() {
  document.title = "Tickitz | Home";
  const [click, setClick] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    console.log(click);
    setClick(!click);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 banner">
          <div className="background-img">
            <TitleBanner />
          </div>
        </div>
        <div className="col-4 form">
          <FormSignUp />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
