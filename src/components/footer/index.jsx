import React from "react";

import "./index.css";

import ebvsponsor from "../../assets/ebvsponsor.png";
import cineonesponsor from "../../assets/cineonesponsor.png";
import hiflixsponsor from "../../assets/hiflixspnsor.png";
import logo from "../../assets/logo2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img className="footer__image--logo" src={logo} alt="image-logo" />
            <p className="footer__text--secondary">Stop waiting in line. Buy tickets</p>
            <p className="footer__text--secondary">conveniently, watch movies quietly.</p>
          </div>
          <div className="col-md mt-3">
            <p className="footer__text--heading">Explore</p>
            <a href="" className="footer__text--link">
              Home
            </a>
            <Link to="/viewall" className="footer__text--link">
              List Movie
            </Link>
          </div>
          <div className="col-md mt-3">
            <p className="footer__text--heading">Our Sponsor</p>
            <img className=" footer__image--sponsor" src={ebvsponsor} alt="image-sponsor" />
            <img className=" footer__image--sponsor" src={cineonesponsor} alt="image-sponsor" />
            <img className=" footer__image--sponsor" src={hiflixsponsor} alt="image-sponsor" />
          </div>
          <div className="col-md mt-3">
            <p className="footer__text--heading">Follow us</p>
            <div className="footer__image--follow bi-facebook mt-3">
              <a href="" className="footer__text--follow">
                {" "}
                Tickitz Cinema Id
              </a>
            </div>

            <div className="footer__image--follow bi-instagram mt-2">
              <a href="" className="footer__text--follow">
                {" "}
                tickitz.id
              </a>
            </div>
            <div className="footer__image--follow bi-twitter mt-2">
              <a href="" className="footer__text--follow">
                {" "}
                tickitz.id
              </a>
            </div>

            <div className="footer__image--follow bi-youtube mt-2">
              <a href="" className="footer__text--follow">
                {" "}
                Tickitz Cinema Id
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="footer__copyright col pt-3">
            <p>
              Tubagus Manix Hara<i className="bi bi-heart-fill ms-2"></i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
