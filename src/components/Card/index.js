import React from "react";
import "./style.css";
import { Col, Row, Container } from "../Grid";


function Card(props) {
  return (
      <div className="card">
        <div className="img-container">
          {/* <img alt={props.name} src={props.image} /> */}
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Title:</strong> {props.title}
            </li>
            <li>
              <strong>Phone Number:</strong> {props.phone}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
            <li>
              <strong>Years Employed:</strong> {props.eDuration}
            </li>
          </ul>
        </div>
      </div> 
  );
}

export default Card;
