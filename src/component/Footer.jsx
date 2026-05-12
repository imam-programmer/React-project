import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="first-div">
            <div id="f-img-con">
              <img src="./image/footer.png" alt="" />
              <p>© Copyright Finsweet 2022</p>
            </div>
            <p>(480) 555-0103</p>
            <p>4517 Washington Ave. </p>
            <p>finsweet@example.com</p>
          </div>

          <div className="secont-div">
            <div>
              <h5>Quicklinks</h5>
              <ul>
                <li>About us</li>
                <li>Sermons</li>
                <li>Events</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h5>Connect</h5>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>

          <div className="third-div">
            <h2>Subscribe to get Latest Updates and News</h2>
            <div className="third-input">

            <input
              type="gmail"
              placeholder="Enter gmail"
              value={"Yourmail@gmail.com"}
            />
            <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
