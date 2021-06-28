import React, { Component } from "react";

import Roma from "./images/Roma.jpeg";
import image1 from "./images/1.jpeg";
import image2 from "./images/2.jpeg";
import image3 from "./images/3.jpeg";

import Square from "../Square/Square";

import "./Body.css";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <div>
          <p>
            <img src={Roma} alt="Rome" />
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
              quis rerum voluptatibus quaerat qui culpa nisi hic voluptas quos
              eum! Ipsam, maiores fugit minima sequi numquam voluptatibus
              adipisci quos architecto? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Laboriosam maiores, non deserunt velit laborum
              dolorum nihil. Aspernatur natus placeat exercitationem dolor
              consequatur error id quo dolorem, blanditiis ut ad minima.
            </div>
          </p>
          <div style={{ display: "flex" }}>
            <Square name="image1" roma={image1} />
            <Square name="image2" roma={image2} />
            <Square name="image3" roma={image3} />
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
