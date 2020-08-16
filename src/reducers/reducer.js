import {
  SET_ALGORITHM_MODE_ACTIVE,
  ADD_NODE,
  ADD_PATH,
  SET_BUILD_MODE_ACTIVE,
  CLEAR_ALL,
  SELECT_ALGORITHM,
  SELECT_WEIGHT,
  HIGHLIGHT_PATH,
  UNHIGHLIGHT_ALL,
  SELECT_START_NODE,
} from "../actions/actions";
import { algorithms } from "../algorithms/algorithms";

const initState = {
  selectedAlgorithm: algorithms.DIJKSTRA,
  selectedWeight: 1,
  buildModeActive: -1,
  algorithmModeActive: false,
  startNode: 0,
  nodes: [],
  paths: [],
};

const reducer = (state = initState, action) => {
  const { payload, type } = action;
  switch (type) {
    case SELECT_START_NODE:
      return { ...state, startNode: payload.idx };
    case ADD_NODE:
      const copiedPathsForAddNode = copyPaths(state.paths);
      for (let i = 0; i < state.paths.length; i++) {
        copiedPathsForAddNode[i].push({ weight: -1, highlightColor: null });
      }
      copiedPathsForAddNode.push(
        new Array(state.paths.length + 1).fill({
          weight: -1,
          highlightColor: null,
        })
      );
      return {
        ...state,
        nodes: [...state.nodes, payload],
        paths: copiedPathsForAddNode,
      };
    case ADD_PATH:
      const copiedPathsForAddPath = copyPaths(state.paths);
      copiedPathsForAddPath[payload.idxOfFirstNode][payload.idxOfSecondNode] = {
        ...state.paths[payload.idxOfFirstNode][payload.idxOfSecondNode],
        weight: payload.weight,
      };
      copiedPathsForAddPath[payload.idxOfSecondNode][payload.idxOfFirstNode] = {
        ...state.paths[payload.idxOfSecondNode][payload.idxOfFirstNode],
        weight: payload.weight,
      };
      return { ...state, paths: copiedPathsForAddPath };
    case HIGHLIGHT_PATH:
      const copiedPathsForHighlight = copyPaths(state.paths);
      copiedPathsForHighlight[payload.idxOfFirstNode][
        payload.idxOfSecondNode
      ] = {
        ...state.paths[payload.idxOfFirstNode][payload.idxOfSecondNode],
        highlightColor: payload.color,
      };
      copiedPathsForHighlight[payload.idxOfSecondNode][
        payload.idxOfFirstNode
      ] = {
        ...state.paths[payload.idxOfSecondNode][payload.idxOfFirstNode],
        highlightColor: payload.color,
      };
      return { ...state, paths: copiedPathsForHighlight };
    case UNHIGHLIGHT_ALL:
      const copiedPathsForUnhighlight = [...state.paths];
      for (let i = 0; i < state.paths.length; i++) {
        copiedPathsForUnhighlight[i] = [...state.paths[i]];
        for (let j = 0; j < state.paths[i].length; j++) {
          copiedPathsForUnhighlight[i][j] = {
            ...state.paths[i][j],
            highlightColor: null,
          };
        }
      }
      return { ...state, paths: copiedPathsForUnhighlight };
    case CLEAR_ALL:
      return { ...state, nodes: [], paths: [] };
    case SELECT_ALGORITHM:
      return { ...state, selectedAlgorithm: payload.algorithm };
    case SELECT_WEIGHT:
      return { ...state, selectedWeight: payload.weight };
    case SET_ALGORITHM_MODE_ACTIVE:
      return { ...state, algorithmModeActive: payload.isActive };
    case SET_BUILD_MODE_ACTIVE:
      return { ...state, buildModeActive: payload.activeNode };
    default:
      return { ...state };
  }
};

const copyPaths = (paths) => {
  const copiedPaths = [...paths];
  for (let i = 0; i < paths.length; i++) {
    copiedPaths[i] = [...paths[i]];
    for (let j = 0; j < paths[i].length; j++) {
      copiedPaths[i][j] = { ...paths[i][j] };
    }
  }
  return copiedPaths;
};

export default reducer;
