import React from "react";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import logo from "../../assets/Dns Logo.png";
import logo1 from "../../assets/DEEP NET.png";
import logo2 from "../../assets/SOFT.png";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div>
      <footer className="footer_main">
        <div className="footer_contents">
          <Row className="colStyle">
            <Col md={4} className="colStyle">
              <div className="footer_connectWithUs">
                <h4 className="footer_connectWithUs_heading">
                  Connect with us
                </h4>
                <p style={{ color: "gold", marginBottom: "0px" }}>
                  <TbDeviceLandlinePhone />
                  <span style={{ color: "#857878", paddingLeft: "10px" }}>
                    +91 9567843340
                  </span>
                </p>
                <p>
                  <CiMail style={{ color: "gold" }} />{" "}
                  <span style={{ color: "#857878", paddingLeft: "10px" }}>
                    {" "}
                    info@deepnetsoft.com
                  </span>
                </p>
              </div>
            </Col>
            <Col md={4} className="colStyle">
              <div className="footer_companyname ">
                <img className="footer_companyname_logo" src={logo} alt="" />
                <div>
                  <img src={logo1} alt="" />
                  <img style={{ marginLeft: "10px" }} src={logo2} alt="" />
                  <div className="footer_companyname_socialMedia">
                    <FiFacebook />
                    <CiTwitter />
                    <FaInstagram />
                    <AiOutlineYoutube />
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4} className="colStyle">
              <div className="footer_companyLocation ">
                <h4 className="footer_connectWithUs_heading">find us</h4>
                <p style={{ color: "gold", marginBottom: "0px" }}>
                  <CiLocationOn />
                  <span style={{ color: "#857878", paddingLeft: "10px" }}>
                    First floor, Geo infopark,
                    <br /> Infopark EXPY, Kakkanad
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
      <div className="footer_base">
        <div className="footer_base_copyright">
          <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        </div>
        <div className="footer_base_terms ">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>

      <div className="footer_base1">
        <div className="footer_base_copyright1">
          <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        </div>

        <div className="footer_base_terms1">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
