import React from 'react';
import {Row, Col} from 'antd';
import './mesections/styles/me-sections.css';

const MePage = () => {
  return (
    <div className="me-container">
      <Row className="sec-1 me-row" type="flex" >
        <Col className="me-box" xs={24} sm={24} xl={12}>
        lol
        </Col>
        <Col className="me-box" xs={24} sm={24} xl={12}>
        lol
        </Col>
      </Row>
      <Row className="sec-2 me-row" type="flex" >
        <Col className="me-box" xs={24} sm={24} xl={12}>
        lol
        </Col>
        <Col className="me-box" xs={24} sm={24} xl={12}>
        lol
        </Col>
      </Row>
    </div>
  );
};

export default MePage;
