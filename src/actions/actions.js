export const ADD_NODE = "ADD_NODE";
export const ADD_PATH = "ADD_PATH";
export const SET_BUILD_MODE_ACTIVE = "SET_BUILD_MODE_ACTIVE";
export const CLEAR_ALL = "CLEAR_ALL";
export const SELECT_ALGORITHM = "SELECT_ALGORITHM";
export const SELECT_WEIGHT = "SELECT_WEIGHT";
export const HIGHLIGHT_PATH = "HIGHLIGHT_PATH";
export const SELECT_START_NODE = "SELECT_START_NODE";
export const UNHIGHLIGHT_ALL = "UNHIGHLIGHT_ALL";
export const SET_ALGORITHM_MODE_ACTIVE = "SET_ALGORITHM_MODE_ACTIVE";

export const addNode = (idx, posX, posY) => {
  return {
    type: ADD_NODE,
    payload: {
      idx,
      posX,
      posY,
    },
  };
};

export const setBuildModeActive = (activeNode) => {
  return {
    type: SET_BUILD_MODE_ACTIVE,
    payload: {
      activeNode,
    },
  };
};

export const addPath = (idxOfFirstNode, idxOfSecondNode, weight) => {
  return {
    type: ADD_PATH,
    payload: {
      idxOfFirstNode,
      idxOfSecondNode,
      weight,
      highlightColor: null,
    },
  };
};

export const clearAll = () => {
  return {
    type: CLEAR_ALL,
    payload: {},
  };
};

export const selectAlgorithm = (algorithm) => {
  return {
    type: SELECT_ALGORITHM,
    payload: {
      algorithm,
    },
  };
};

export const selectWeight = (weight) => {
  return {
    type: SELECT_WEIGHT,
    payload: {
      weight,
    },
  };
};

export const hightlightPath = (idxOfFirstNode, idxOfSecondNode, color) => {
  return {
    type: HIGHLIGHT_PATH,
    payload: {
      idxOfFirstNode,
      idxOfSecondNode,
      color,
    },
  };
};

export const selectStartNode = (idx) => {
  return {
    type: SELECT_START_NODE,
    payload: {
      idx,
    },
  };
};

export const unhighlightAll = () => {
  return {
    type: UNHIGHLIGHT_ALL,
    payload: {},
  };
};

export const setAlgorithmModeActive = (isActive) => {
  return {
    type: SET_ALGORITHM_MODE_ACTIVE,
    payload: {
      isActive,
    },
  };
};
