import React from 'react';
//import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import './boxsections/styles/box-section.css';
import Cv from './boxsections/Cv.js';
import Photo from './boxsections/Photo.js';
import Food from './boxsections/Food.js';


const BoxSection = () => {
  return (
    <div id="container">
      <Row className="row-1" type="flex">
        <Col className="lg-box" xs={24} sm={24} xl={12}>
          <Cv/>
        </Col>
        <Col xs={24} sm={24} xl={12}>
          <Row className="row-2" type="flex">
            <Col className="sm-box-tp" >
              <Photo/>
            </Col>
          </Row>
          <Row className="row-3" type="flex">
            <Col className="sm-box-bt" >
              <Food/>
            </Col>
          </Row>
          <Row className="row-4" type="flex">
            <Col className="sm-box-bt" >
              <Food/>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default BoxSection;

