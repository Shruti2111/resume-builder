import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>MakeMyResume</h2>
                  <ul>
                  <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Create Resume</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Contact</h2>
                  <ul>
                    <li>
                      <a href="#">Write to Us</a>
                    </li>
                    <li>
                      <a href="#">Email</a>
                    </li>
                    
                  </ul>
                </div>

                

                
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2022 MakeMyResume. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;