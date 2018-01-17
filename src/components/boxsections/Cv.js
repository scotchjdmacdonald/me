import React from 'react';
import './styles/box-section.css';
import {Row, Col} from 'antd';
import { Link } from 'react-router-dom';


const title = (
  <div>
    <h1 className="title">Scotch<br/>Macdonald</h1>
    <br/>
    <p>I am a <Link to="/me" ><h2 className="title-text">  software developer  </h2></Link> living in Melbourne, Australia.
      Who is also a passionate<a href="https://www.instagram.com/scotch_and_rose/"><h2 className="title-text">  foodie  </h2></a>
      and a dabbler in<h2 className="title-text">  film photography  </h2>
    </p>
  </div>
);

const more = (
  <div>
    <h4 className="info-text">development</h4>
    <p className="info-text">loves: React.js + redux, Python, AWS, continuos integration, Docker, developing web applications, people</p>
    <p className="info-text">experience in: Javascript, html & css(sass), .NET, Docker, AWS, Jenkins, git, Visual Basic</p>
    <p className="info-text">wants to learn more about: AWS, Dev-Ops, machine learning, product life-cycle and management</p>
    <br/>
    <p className="info-text">contact: scotchjdmacdonald@gmail.com </p>
  </div>
);

const Cv = () => {
  return (
    <div className="cv-outer-div">
      <div className="cv-box">
        <Row type="flex" justify="start">
          <Col className="cv-col" span={12} offset={1}>{title}</Col>
        </Row>
      </div>
      <div className="cv-box btm">
        <Row type="flex" justify="start">
          <Col className="cv-col" span={12} offset={1}>{more}</Col>
        </Row>
      </div>
    </div>


  );
};

export default Cv;
