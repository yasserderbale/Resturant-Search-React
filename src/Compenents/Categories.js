import React from "react";
import { Col, Row } from "react-bootstrap";
import {  Rotate } from "react-reveal";

export const Categories = ({ newArray, Allarray, Alltitle }) => {
  const onefilter = (cat) => {
    newArray(cat);
  };
  const filterAll = () => {
    Allarray();
  };
  return (
    <Row>
      <Rotate >
        {" "}
        <Col className="mt-3 text-center" sm="12">
          <button
            onClick={() => {
              filterAll();
            }}
            className="categories"
          >
            All
          </button>
          {Alltitle.map((items) => {
            return (
              <button
                onClick={() => {
                  onefilter(items);
                }}
                className="categories"
              >
                {items}
              </button>
            );
          })}
        </Col>
      </Rotate>
    </Row>
  );
};
