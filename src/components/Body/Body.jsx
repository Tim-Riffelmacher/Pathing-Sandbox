import React, { Component } from "react";
import "./Body.css";
import Node from "../Node/Node";
import { globals } from "../../globals/globals";
import Edge from "../Edge/Edge";

export default class Body extends Component {
  render() {
    const { nodes, edges, buildModeActive, startNode } = this.props;
    return (
      <div className="body-content">
        <svg onClick={(e) => this.handleClickOnSvgArea(e)}>
          {edges.map((row, i) =>
            row.map((elem, j) => {
              if (elem.weight === -1 || i > j) {
                return null;
              }
              return (
                <Edge
                  key={`edge-${i}-${j}`}
                  posX1={nodes[i].posX}
                  posY1={nodes[i].posY}
                  posX2={nodes[j].posX}
                  posY2={nodes[j].posY}
                  weight={elem.weight}
                  highlightColor={elem.highlightColor}
                ></Edge>
              );
            })
          )}
          {nodes.map((elem, i) => (
            <Node
              key={`node-${i}`}
              onClick={(idxOfNode) => this.handleClickOnNode(idxOfNode)}
              idx={elem.idx}
              posX={elem.posX}
              posY={elem.posY}
              isSelected={elem.idx === buildModeActive}
              onDoubleClick={(idxOfNode) =>
                this.handleDoubleClickOnNode(idxOfNode)
              }
              isStartNode={elem.idx === startNode}
            ></Node>
          ))}
        </svg>
      </div>
    );
  }

  handleClickOnSvgArea(event) {
    const { onAddNode, nodes, algorithmModeActive } = this.props;
    if (algorithmModeActive) {
      return;
    }
    const posX = event.pageX;
    const posY = event.pageY - globals.toolbarHeight;
    for (const node of nodes) {
      if (node == null) {
        continue;
      }
      const nodeDist = Math.sqrt(
        Math.pow(posX - node.posX, 2) + Math.pow(posY - node.posY, 2)
      );
      if (nodeDist < globals.nodes.minDist) {
        return;
      }
    }
    const idx = nodes.length;
    onAddNode(idx, event.pageX, event.pageY - globals.toolbarHeight);
  }

  handleClickOnNode(idxOfNode) {
    const {
      onSetBuildModeActive,
      buildModeActive,
      onAddPath,
      selectedWeight,
      algorithmModeActive,
    } = this.props;
    if (algorithmModeActive) {
      return;
    }
    if (buildModeActive !== -1 && buildModeActive !== idxOfNode) {
      onAddPath(buildModeActive, idxOfNode, selectedWeight);
      onSetBuildModeActive(-1);
    } else {
      onSetBuildModeActive(idxOfNode);
    }
  }

  handleDoubleClickOnNode(idxOfNode) {
    const {
      onSetBuildModeActive,
      algorithmModeActive,
      onSelectStartNode,
    } = this.props;
    if (algorithmModeActive) {
      return;
    }
    onSelectStartNode(idxOfNode);
    onSetBuildModeActive(-1);
  }
}
