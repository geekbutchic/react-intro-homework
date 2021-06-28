import React, { Component } from "react";
import "./Sidebar.css";
export class Sidebar extends Component {
  state = {
    // SET STATE FOR LOOP
    colorArray: ["SILVER", "BISQUE", "SLATEGREY"],
    backgroundColorInput: "", // EMPTY STRING - CAN TEST WITH COLOR
  };
  //
  handleOnBackgroundColorChange = (color) => {
    this.setState({
      backgroundColorInput: color,
    });
  };
  render() {
    return (
      <div
        className="sidebar"// INLINE STYLE HOLDS MORE WEIGHT THAN CLASS - SETS COLOR TO BACK_GROUND_COLOR_INPUT : ""
        style={{ backgroundColor: this.state.backgroundColorInput }}
      >
        <ul className="ul-style">
          {this.state.colorArray.map((item, index) => {
            return (
              <li
                className="list-style"
                key={index} 
                onClick={() => this.handleOnBackgroundColorChange(item)}// CLICK HANDLER
              >
                {item}
              </li>// ITEM IS EACH COLOR
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Sidebar;

//