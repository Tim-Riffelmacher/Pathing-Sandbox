import { connect } from "react-redux";
import Toolbar from "./Toolbar";
import {
  clearAll,
  selectAlgorithm,
  selectWeight,
  hightlightPath,
  unhighlightAll,
  setAlgorithmModeActive,
  selectStartNode,
} from "../../actions/actions";

const mapStateToProps = (state) => {
  return {
    selectedAlgorithm: state.selectedAlgorithm,
    selectedWeight: state.selectedWeight,
    algorithmModeActive: state.algorithmModeActive,
    paths: state.paths,
    startNode: state.startNode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClearAll: () => {
      dispatch(clearAll());
    },
    onSelectAlgorithm: (algorithm) => {
      dispatch(selectAlgorithm(algorithm));
    },
    onSelectWeight: (weight) => {
      dispatch(selectWeight(weight));
    },
    onSetAlgorithmModeActive: (isActive) => {
      dispatch(setAlgorithmModeActive(isActive));
    },
    onHighlightPath: (idxOfFirstNode, idxOfSecondNode, color) => {
      dispatch(hightlightPath(idxOfFirstNode, idxOfSecondNode, color));
    },
    onUnhighlightAll: () => {
      dispatch(unhighlightAll());
    },
    onSelectStartNode: (idx) => {
      dispatch(selectStartNode(idx));
    },
  };
};

const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default ToolbarContainer;
