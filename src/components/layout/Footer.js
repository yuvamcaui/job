import React from "react";
const logo = require("../../assets/images/logo.png");
const logo2 = require("../../assets/images/logo2.png");

const Footer = () => {
  return (
    <>
      <div class="footer jb_cover">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footerNav jb_cover">
                <a href="#">
                  <img src={logo2} alt="img" className="background-img" />
                </a>
                <ul class="footer_first_contact">
                  <li>
                    <i class="flaticon-location-pointer"></i>
                    <p>
                      123 City Avenue, Floor 10,
                      <br /> malbourne, Australia.
                    </p>
                  </li>
                  <li>
                    <i class="flaticon-telephone"></i>
                    <p>
                      1 -234 -456 -7890
                      <br /> 1 -234 -456 -7890
                    </p>
                  </li>
                  <li>
                    <i class="flaticon-envelope"></i>
                    <a href="#">info@Jbdesks.com </a>
                    <br />
                    <a href="#">support@Jbdesks.com</a>
                  </li>
                </ul>

                <ul class="icon_list_news jb_cover">
                  <li>
                    <a href="#">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footerNav jb_cover footer_border_displ">
                <h5>features</h5>
                <ul class="nav-widget">
                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i>Job Management Billing
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i>Time Materials Tracking
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i>Standards Compliance{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i>Real Time GPS Tracking
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i>Client Portal
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i> Powerful Workflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footerNav jb_cover footer_border_displ">
                <h5>browse</h5>
                <ul class="nav-widget">
                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i>Freelancers by Category
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i> Freelancers in USA{" "}
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i> Freelancers in UK
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i> Freelancers in Canada
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i> Freelancers in india
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-square"></i> find jobs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-12">
              <div class="footerNav jb_cover footer_border_displ">
                <h5>app integration</h5>
                <ul class="nav-widget">
                  <li>
                    <a href="#">
                      <img src="images/ft1.png" alt="img" />
                      Xero
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src="images/ft2.png" alt="img" />
                      Reckon
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <img src="images/ft3.png" alt="img" />
                      Flexidocs
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/ft4.png" alt="img" />
                      Microsoft Exchange
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/ft5.png" alt="img" /> Mailchimp
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/ft6.png" alt="img" /> MYOB
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="copyright_left">
              <i class="fa fa-copyright"></i> 2022 <a href="#"> Taak. </a>{" "}
              All Rights Reserved.
            </div>
            <div class="clearfix"></div>
          </div>
        </div>

        <div class="waveWrapper waveAnimation">
          <div class="waveWrapperInner bgTop gradient-color">
            <div class="wave waveTop"></div>
          </div>
          <div class="waveWrapperInner bgMiddle">
            <div class="wave waveMiddle"></div>
          </div>
          <div class="waveWrapperInner bgBottom">
            <div class="wave waveBottom"></div>
          </div>
        </div>
      </div>

      <div id="chat-circle" class="btn btn-raised">
        <i class="fas fa-comment-alt"></i>
      </div>
      <div class="chat-box">
        <div class="chat-box-header">
          ChatBot
          <span class="chat-box-toggle">
            <i class="fas fa-times"></i>
          </span>
        </div>
        <div class="chat-box-body">
          <div class="chat-box-overlay"></div>
          <div class="chat-logs"></div>
        </div>
        <div class="chat-input">
          <form>
            <input
              type="text"
              id="chat-input"
              placeholder="Send a message..."
            />
            <button type="submit" class="chat-submit" id="chat-submit">
              <i class="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
