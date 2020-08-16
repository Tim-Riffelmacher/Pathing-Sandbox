import { addPathToSequence } from "../algorithms";

export const prim = (adjMatrix, startNode) => {
  let sequence = [];

  let markedNodes = new Array(adjMatrix.length).fill(false);
  markedNodes[startNode] = true;
  for (let i = 0; i < adjMatrix.length - 1; i++) {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let idxOfFirstNode = -1;
    let idxOfSecondNode = -1;
    for (let j = 0; j < adjMatrix.length; j++) {
      for (let k = 0; k < adjMatrix.length; k++) {
        if (adjMatrix[j][k] < minDistance) {
          if (
            j !== k &&
            (markedNodes[j] || markedNodes[k]) &&
            (!markedNodes[j] || !markedNodes[k])
          ) {
            minDistance = adjMatrix[j][k];
            idxOfFirstNode = j;
            idxOfSecondNode = k;
          }
        }
      }
    }
    if (idxOfFirstNode !== -1 && idxOfSecondNode !== -1) {
      markedNodes[idxOfFirstNode] = true;
      markedNodes[idxOfSecondNode] = true;
      addPathToSequence(sequence, idxOfFirstNode, idxOfSecondNode);
    }
  }

  return sequence;
};
