import React from 'react';
import {Link, IndexLink} from 'react-router';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="col-md-3 footer-middle-in">
            <Link to={'/'}><img src={require("../images/log.png")} alt=""/></Link>
            <p>Suspendisse sed accumsan risus. Curabitur rhoncus, elit vel tincidunt elementum, nunc urna tristique nisi, in interdum libero magna tristique ante. adipiscing varius. Vestibulum dolor lorem.</p>
          </div>
          <div className="col-md-3 footer-middle-in">
            <h6>Information</h6>
            <ul className=" in">
              <li><a href="javascript:void(0)">About</a></li>
              <li><a href="javascript:void(0)">Contact Us</a></li>
              <li><a href="javascript:void(0)">Returns</a></li>
              <li><a href="javascript:void(0)">Site Map</a></li>
            </ul>
            <ul className="in in1">
              <li><a href="javascript:void(0)">Order History</a></li>
              <li><a href="javascript:void(0)">Wish List</a></li>
              <li><a href="javascript:void(0)">Login</a></li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-3 footer-middle-in">
            <h6>Tags</h6>
            <ul className="tag-in">
              <li><a href="javascript:void(0)">Lorem</a></li>
              <li><a href="javascript:void(0)">Sed</a></li>
              <li><a href="javascript:void(0)">Ipsum</a></li>
              <li><a href="javascript:void(0)">Contrary</a></li>
              <li><a href="javascript:void(0)">Chunk</a></li>
              <li><a href="javascript:void(0)">Amet</a></li>
              <li><a href="javascript:void(0)">Omnis</a></li>
            </ul>
          </div>
          <div className="col-md-3 footer-middle-in">
            <h6>Newsletter</h6>
            <span>Sign up for News Letter</span>
            <form>
              <input type="text" placeholder="Enter your E-mail"/>
              <input type="submit" value="Subscribe"/>	
            </form>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <ul className="footer-bottom-top">
            <li><a href="javascript:void(0)"><img src={require("../images/f1.png")} className="img-responsive" alt=""/></a></li>
            <li><a href="javascript:void(0)"><img src={require("../images/f2.png")} className="img-responsive" alt=""/></a></li>
            <li><a href="javascript:void(0)"><img src={require("../images/f3.png")} className="img-responsive" alt=""/></a></li>
          </ul>
          <p className="footer-class">&copy; 2016 Shopping. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
