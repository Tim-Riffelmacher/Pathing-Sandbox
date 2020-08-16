import { addPathToSequence } from "../algorithms";

export const kruskal = (adjMatrix, startNode) => {
  let sequence = [];

  let disjointNodes = new Array(adjMatrix.length);
  for (let i = 0; i < disjointNodes.length; i++) {
    disjointNodes[i] = i;
  }
  for (let i = 0; i < adjMatrix.length - 1; i++) {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let idxOfFirstNode = -1;
    let idxOfSecondNode = -1;
    for (let j = 0; j < adjMatrix.length; j++) {
      for (let k = 0; k < adjMatrix.length; k++) {
        if (
          find(disjointNodes, j) !== find(disjointNodes, k) &&
          adjMatrix[j][k] < minDistance
        ) {
          minDistance = adjMatrix[j][k];
          idxOfFirstNode = j;
          idxOfSecondNode = k;
        }
      }
    }
    union(disjointNodes, idxOfFirstNode, idxOfSecondNode);
    if (idxOfFirstNode !== -1 && idxOfSecondNode !== -1) {
      addPathToSequence(sequence, idxOfFirstNode, idxOfSecondNode);
    }
  }

  return sequence;
};

const union = (disjointNodes, a, b) => {
  const c = find(disjointNodes, a);
  const d = find(disjointNodes, b);
  disjointNodes[c] = d;
};

const find = (disjointNodes, a) => {
  while (disjointNodes[a] !== a) {
    a = disjointNodes[a];
  }
  return a;
};
