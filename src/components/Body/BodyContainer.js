import { connect } from "react-redux";
import Body from "./Body";
import {
  addNode,
  setBuildModeActive,
  addPath,
  selectStartNode,
} from "../../actions/actions";

const mapStateToProps = (state) => {
  return {
    buildModeActive: state.buildModeActive,
    nodes: state.nodes,
    edges: state.paths,
    selectedWeight: state.selectedWeight,
    algorithmModeActive: state.algorithmModeActive,
    startNode: state.startNode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNode: (idx, posX, posY) => {
      dispatch(addNode(idx, posX, posY));
    },
    onSetBuildModeActive: (activeNode) => {
      dispatch(setBuildModeActive(activeNode));
    },
    onAddPath: (idxOfFirstNode, idxOfSecondNode, weight) => {
      dispatch(addPath(idxOfFirstNode, idxOfSecondNode, weight));
    },
    onSelectStartNode: (idx) => {
      dispatch(selectStartNode(idx));
    },
  };
};

const BodyContainer = connect(mapStateToProps, mapDispatchToProps)(Body);

export default BodyContainer;
