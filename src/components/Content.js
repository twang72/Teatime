import React, { Component } from "react";

import { Container, Card, CardBody, CardTitle, Row, Col} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Categories</h2>
        <Container style={{whiteSpace: "nowrap"}}>
          <Row>
            <Col>
          <Card
            style={{
              maxWidth: '200px',
            }}
          >
            <CardBody>
              <CardTitle tag="h5" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                Coffee
              </CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
          </Card>
          </Col>

          <Col>
          <Card
            style={{
              maxWidth: '200px'
            }}
          >
            <CardBody>
              <CardTitle tag="h5" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                Coffee
              </CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
          </Card>
          </Col>

          <Col>
          <Card
            style={{
              maxWidth: '200px'
            }}
          >
            <CardBody>
              <CardTitle tag="h5" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                Coffee
              </CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
          </Card>
          </Col>
          
          <Col>
          <Card
            style={{
              maxWidth: '200px'
            }}
          >
            <CardBody>
              <CardTitle tag="h5" style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                Coffee
              </CardTitle>
            </CardBody>
            <img
              alt="Card cap"
              src="https://picsum.photos/318/180"
              width="100%"
            />
          </Card>
          </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Content;
