import React, { Component } from "react";
import { getIndexedHexColor } from "../../helpers/helpers";
import "./Node.css";
import { globals } from "../../globals/globals";

export default class Node extends Component {
  render() {
    const {
      onClick,
      idx,
      posX,
      posY,
      isSelected,
      onDoubleClick,
      isStartNode,
    } = this.props;
    return (
      <React.Fragment>
        <circle
          cx={posX}
          cy={posY}
          r={globals.nodes.radius}
          stroke={isSelected ? globals.colors.orange : globals.colors.black}
          fill={getIndexedHexColor(idx)}
          onClick={() => onClick(idx)}
          onDoubleClick={() => onDoubleClick(idx)}
        ></circle>
        {isStartNode && (
          <text
            x={posX - 25}
            y={posY + 7}
            pointerEvents="none"
            fontSize="25px"
            fill="white"
          >
            Start
          </text>
        )}
      </React.Fragment>
    );
  }
}
