import React from 'react';
// import {Card, Row, Col} from 'react-bootstrap';
import './ChooseTemplate.css';
import img1 from '../asset/temp1.png';
import img2 from '../asset/resumepic.jpeg';
import img3 from '../asset/temp3.png';
import axios from "axios"
import { useNavigate } from "react-router-dom"

function ChooseTemplate(){
    return(
      <div className='contain'>
<div className='heading'>
  Choose Template
</div>
      <div className='wrapper'>
        <Card
              src={img1}
              alt= "template1"
              title="Classic"
              description="Template 1"/> 
        <Card
              src={img2}
              alt= "template2"
              title="Professional"
              description="Template 2"/>
        <Card
              src={img3}
              alt= "template3"
              title="Popup"
              description="Template 3"/>
      </div>
      </div>
    )
}

function Card(props){

  let navigate = useNavigate();
  return(
    <div className='card'>
      <div className='card_body'>
        <img src={props.src} alt={props.alt} className="card_img"/>
        <h2 className='title'>{props.title}</h2>
        <p className='description'>{props.description}</p>
      </div>
      <button className='btn' onClick={ () => navigate("/createresume")}>Generate Resume</button>
    </div>
  )
}

export default ChooseTemplate;