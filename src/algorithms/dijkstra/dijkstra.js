import { addPathToSequence } from "../algorithms";

export const dijkstra = (adjMatrix, startNode) => {
  let sequence = [];
  const pathsForSequenceAdd = [];

  let distances = new Array(adjMatrix.length).fill(Number.MAX_SAFE_INTEGER);
  distances[startNode] = 0;
  let markedNodes = new Array(adjMatrix.length).fill(false);
  for (let i = 0; i < adjMatrix.length; i++) {
    let idxOfMinDistance = -1;
    let minDistance = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < adjMatrix.length; j++) {
      if (distances[j] < minDistance && !markedNodes[j]) {
        minDistance = distances[j];
        idxOfMinDistance = j;
      }
    }
    markedNodes[idxOfMinDistance] = true;
    if (idxOfMinDistance === -1) {
      continue;
    }
    for (let j = 0; j < adjMatrix.length; j++) {
      const totalDistance =
        distances[idxOfMinDistance] + adjMatrix[idxOfMinDistance][j];
      if (
        distances[idxOfMinDistance] !== Number.MAX_SAFE_INTEGER &&
        !markedNodes[j] &&
        adjMatrix[idxOfMinDistance][j] !== 0 &&
        totalDistance < distances[j]
      ) {
        distances[j] = totalDistance;
        pathsForSequenceAdd.push({
          idxOfFirstNode: idxOfMinDistance,
          idxOfSecondNode: j,
          minDistance: totalDistance,
        });
      }
    }
  }
  pathsForSequenceAdd.sort((a, b) => compare(a, b));
  for (const singlePath of pathsForSequenceAdd) {
    addPathToSequence(
      sequence,
      singlePath.idxOfFirstNode,
      singlePath.idxOfSecondNode
    );
  }

  return sequence;
};

const compare = (a, b) => {
  if (a.minDistance < b.minDistance) {
    return -1;
  }
  if (a.minDistance > b.minDistance) {
    return 1;
  }
  return 0;
};
