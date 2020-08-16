import React, { Component } from "react";
import { has } from "../../helpers/helpers";
import { globals } from "../../globals/globals";

export default class Edge extends Component {
  render() {
    const { posX1, posY1, posX2, posY2, weight, highlightColor } = this.props;
    return (
      <React.Fragment>
        <line
          x1={posX1}
          y1={posY1}
          x2={posX2}
          y2={posY2}
          stroke={has(highlightColor) ? highlightColor : globals.colors.blue}
          strokeWidth={has(highlightColor) ? "6" : "4"}
        ></line>
        <text
          x={(posX1 + posX2) / 2}
          y={(posY1 + posY2) / 2}
          fill="black"
          fontSize="35px"
        >
          {weight}
        </text>
      </React.Fragment>
    );
  }
}
