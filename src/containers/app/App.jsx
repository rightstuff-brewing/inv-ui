import React from 'react';
import {Col, Grid, Row} from 'react-bootstrap';
import Routes from '../routes';
import Navbar from '../navbar';

const App = () => (
  <Grid fluid={true}>
    <Row className="show-grid">
      <Col md={12}>
        <header>
          <Navbar />
        </header>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col md={12}>
        <main>
          <Routes />
        </main>
      </Col>
    </Row>
  </Grid>
);

export default App;