import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer_section pt-5">
            <div className="container footer_logo pt-5 pb-2 d-flex" style={{align:"center"}}>
              <img src="images/supernebr_logo.png" className="img-fluid mx-auto d-block" alt="SuperNebr_logo" />
            </div>
            <div className="col-lg-6 footer_legal pl-5">
              <h6>
                <b>Legal</b>
              </h6>
              <ul>
                <li>
                  <a href>Terms &amp; Condition</a>
                </li>
                <li>
                  <a href>Privacy Policy</a>
                </li>
                <li>
                  <a href>License Agreement</a>
                </li>
              </ul>
            </div>
            <div className="container pb-5">  
              <div className="row footer_list pb-5">
                <div className="col-lg-6 footer_cmpny pr-5">
                  <h6><b>Our Company</b></h6>
                  <ul>
                    <li><Link to={'/aboutUs'} href>About Us</Link></li>
                    <li><Link to={'/Careers'} href>Careers</Link></li>
                    <li><Link to={'/Investors'} href>Investors</Link></li>
                    <li><Link to={'/createBlogs'} href>Blogs</Link></li>
                  </ul>
                </div>
                <div className="col-lg-6 footer_legal pl-5">
                  <h6><b>Legal</b></h6>
                  <ul>
                    <li><Link to={'/TermsCondition'} href>Terms &amp; Condition</Link></li>
                    <li><Link to={'/PrivacyPolicy'} href>Privacy Policy</Link></li>
                    <li><Link to={'/LicenseAgreement'} href>License Agreement</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="container-fluid pt-3 footer_back">
              <p>Copyright <i className="fa fa-copyright" aria-hidden="true" /> 2020. All Right Reserved</p>
            </div>
          </footer>
          
        )
    }
}
