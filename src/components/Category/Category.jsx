import React, { Component } from "react";

import { Container, Card, CardBody, CardTitle, Row, Col } from "reactstrap";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        <h2 className="my-5 text-center">Categories</h2>
        <Container style={{ whiteSpace: "nowrap" }}>
          <Row>
            <Col>
              <Card
                style={{
                  maxWidth: "200px",
                }}
              >
                <CardBody>
                  <CardTitle
                    tag="h5"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Coffee
                  </CardTitle>
                </CardBody>
                <img
                  alt="Coffee"
                  src={require("../../assets/coffee.png")}
                  width="200px"
                  height="200px"
                />
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  maxWidth: "200px",
                }}
              >
                <CardBody>
                  <CardTitle
                    tag="h5"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Milktea
                  </CardTitle>
                </CardBody>
                <img
                  alt="Milktea"
                  src={require("../../assets/milktea.png")}
                  width="200px"
                  height="200px"
                />
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  maxWidth: "200px",
                }}
              >
                <CardBody>
                  <CardTitle
                    tag="h5"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Tea
                  </CardTitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src={require("../../assets/tea.png")}
                  width="200px"
                  height="200px"
                />
              </Card>
            </Col>

            <Col>
              <Card
                style={{
                  maxWidth: "200px"
                }}
              >
                <CardBody>
                  <CardTitle
                    tag="h5"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Smoothies
                  </CardTitle>
                </CardBody>
                <img
                  alt="Card cap"
                  src={require("../../assets/smoothies.png")}
                  width="200px"
                  height="200px"
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
