import React, { Component } from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./Toolbar.css";
import { algorithms } from "../../algorithms/algorithms";
import { sleep } from "../../helpers/helpers";
import { globals } from "../../globals/globals";

export default class Toolbar extends Component {
  render() {
    const {
      selectedAlgorithm,
      selectedWeight,
      algorithmModeActive,
    } = this.props;
    return (
      <div className="toolbar-content">
        <Navbar expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>Pathing Sandbox</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                className="ml-5"
                title={`Algorithm: ${selectedAlgorithm.name}`}
                id="basic-nav-dropdown"
              >
                {Object.keys(algorithms).map((key, i) => (
                  <NavDropdown.Item
                    key={`algorithm-${i}`}
                    onClick={() =>
                      this.handleClickOnAlgorithmSelect(algorithms[key])
                    }
                  >
                    {algorithms[key].name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Button
                onClick={async () => await this.handleClickOnAlgorithmStart()}
                variant={algorithmModeActive ? "outline-warning" : "primary"}
              >
                {algorithmModeActive ? "Runs.." : "Go"}
              </Button>
              <NavDropdown
                className="ml-5"
                title={`Weight: ${selectedWeight}`}
                id="basic-nav-dropdown"
              >
                {new Array(5).fill(null).map((elem, i) => (
                  <NavDropdown.Item
                    key={`weight-${i + 1}`}
                    onClick={() => this.handleClickOnWeightSelect(i + 1)}
                  >
                    {i + 1}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <Button
                className="ml-5"
                onClick={() => this.handleClickOnClearAll()}
              >
                Clear all
              </Button>
              <Nav.Link
                className="ml-5"
                href="https://github.com/Tim-Riffelmacher/Pathing-Sandbox"
              >
                Github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  handleClickOnAlgorithmSelect(algorithm) {
    const { onSelectAlgorithm, algorithmModeActive } = this.props;
    if (algorithmModeActive) {
      return;
    }
    onSelectAlgorithm(algorithm);
  }

  async handleClickOnAlgorithmStart() {
    const {
      algorithmModeActive,
      onSetAlgorithmModeActive,
      paths,
      startNode,
      onHighlightPath,
      onUnhighlightAll,
      selectedAlgorithm,
    } = this.props;
    if (algorithmModeActive) {
      return;
    }
    onSetAlgorithmModeActive(true);
    onUnhighlightAll();
    const pathsToAdjMatrix = [];
    for (let i = 0; i < paths.length; i++) {
      pathsToAdjMatrix.push([]);
      for (let j = 0; j < paths[i].length; j++) {
        pathsToAdjMatrix[i].push(
          paths[i][j].weight === -1
            ? selectedAlgorithm === algorithms.DIJKSTRA
              ? 0
              : Number.MAX_SAFE_INTEGER
            : paths[i][j].weight
        );
      }
    }
    const sequence = selectedAlgorithm.algorithm(pathsToAdjMatrix, startNode);
    for (const elem of sequence) {
      await sleep(globals.animations.sleepTime);
      onHighlightPath(elem.idxOfFirstNode, elem.idxOfSecondNode, elem.color);
    }
    onSetAlgorithmModeActive(false);
  }

  handleClickOnWeightSelect(weight) {
    const { onSelectWeight } = this.props;
    onSelectWeight(weight);
  }

  handleClickOnClearAll() {
    const { onClearAll, algorithmModeActive, onSelectStartNode } = this.props;
    if (algorithmModeActive) {
      return;
    }
    onSelectStartNode(0);
    onClearAll();
  }
}
