import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
export const Cardes = ({ Datacardes }) => {
  return (
    <Row>
      <Zoom>
        {Datacardes.length > 0 ? (
          Datacardes.map((items) => {
            return (
              <Col sm="12">
                <Card className="mt-3  flex-row">
                  <Card.Img
                    className="img-item"
                    variant="top"
                    src={items.imageURL}
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{items.title}</Card.Title>
                      <div>{items.price}</div>
                    </div>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <h1 className="text-center mt-5">No Data Existing</h1>
        )}
      </Zoom>
    </Row>
  );
};
