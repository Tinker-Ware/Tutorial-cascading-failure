import React from 'react';
import {Link, IndexLink} from 'react-router';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-middle">
        <div className="container">
          <div className="col-md-3 footer-middle-in">
            <a href="index.html"><img src="images/log.png" alt=""/></a>
            <p>Suspendisse sed accumsan risus. Curabitur rhoncus, elit vel tincidunt elementum, nunc urna tristique nisi, in interdum libero magna tristique ante. adipiscing varius. Vestibulum dolor lorem.</p>
          </div>
          <div className="col-md-3 footer-middle-in">
            <h6>Information</h6>
            <ul className=" in">
              <li><a href="404.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="contact.html">Site Map</a></li>
            </ul>
            <ul className="in in1">
              <li><a href="#">Order History</a></li>
              <li><a href="wishlist.html">Wish List</a></li>
              <li><a href="login.html">Login</a></li>
            </ul>
            <div className="clearfix"></div>
          </div>
          <div className="col-md-3 footer-middle-in">
            <h6>Tags</h6>
            <ul className="tag-in">
              <li><a href="#">Lorem</a></li>
              <li><a href="#">Sed</a></li>
              <li><a href="#">Ipsum</a></li>
              <li><a href="#">Contrary</a></li>
              <li><a href="#">Chunk</a></li>
              <li><a href="#">Amet</a></li>
              <li><a href="#">Omnis</a></li>
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
            <li><a href="#"><img src="images/f1.png" className="img-responsive" alt=""/></a></li>
            <li><a href="#"><img src="images/f2.png" className="img-responsive" alt=""/></a></li>
            <li><a href="#"><img src="images/f3.png" className="img-responsive" alt=""/></a></li>
          </ul>
          <p className="footer-class">&copy; 2016 Shopping. All Rights Reserved | Design by  <a href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
