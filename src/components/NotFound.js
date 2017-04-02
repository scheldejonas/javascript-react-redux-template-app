/**
 * Created by scheldejonas on 02/04/2017.
 */
import React from 'react';
import { Row, Col } from 'react-materialize';

const NotFound = () => (
  <Row>
    <Col s={12}>
      <br/>
      <br/>
      <br/>
      <br/>
      <i className="material-icons icn-error">error_outline</i>
      <h2>Page Not Found</h2>
    </Col>
  </Row>
);

export default NotFound;