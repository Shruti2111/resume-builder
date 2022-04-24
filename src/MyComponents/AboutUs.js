import React  from 'react';
//import './AboutUs.css';
import contactus_img from '../asset/contact-banner.jpg';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AboutUs(){
    let navigate = useNavigate();
  return( 
    // const element = (<div> </div>)
    <div className="comptext">
        <center>
            <h1>About Us</h1>
        </center>
    <center>
    <h3>A better way to build your resume</h3>
    {/* </center>
        {this.props.displaytext}
        {element}

    <center> */}
     <p>
       Let's face it: writing a resume isn't fun. It takes hours to put your text into a table layout in Word and
       every page break, re-formatting or layout change is just plain frustrating.
      </p>
    </center>

    <center>
     <p>
       There's got to be a better way - after all, so many aspects of our lives became that much easier during the
       past decades: dating through apps like Tinder, traveling through Airbnb and the same goes for discovering
       and enjoying music or movies.
      </p>
    </center>

    <center>
     <p>
       Yet, when it comes to one of the most important aspects of our adult lives - finding  and getting a job we
       actually like - we mostly use tools that were created in an era were Friends or Seinfeld still aired on TV.
      </p>
    </center>

    <center>
     <p>
       We believe that creating an effective resume should feel more like browsing music on Spotify, chatting on
       Tinder or editing pictures with VSCO than working on a thesis.
       That's why we created our resume builder: not only does it help you with inputting your text in a cohesive and readable
       way, it also makes it really easy to wrap your resume into an eye-popping and professional design. Basically
       like you hired a designer but without the price tag.

       Speaking of price tag - our product is actually free to use. And on top of that we don't sell your data nor
       will we ever do so. Simply because that's not something we would want as users ourselves.
      </p>
      </center>

      <center>
          <h3>
            We hope that we helped you to save your time and that you have as much fun using it as we had building it! 😊
          </h3>
      </center>
    </div>)
  
}
export default AboutUs;