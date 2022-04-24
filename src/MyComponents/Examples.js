import React,{useState} from 'react'; 
import {Carousel} from'react-bootstrap';
import img1 from '../asset/temp1.png';
import img2 from '../asset/temp2.png';
import img3 from '../asset/temp3.png';
import './Examples.css';

function Examples() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block "
            src={img1}
            alt="First slide"
            height="360px"
            width="640px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={img2}
            alt="Second slide"
            height="360px"
            width="640px"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={img3}
            alt="Third slide"
            height="360px"
            width="640px"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default Examples;