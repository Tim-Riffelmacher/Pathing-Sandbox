import { dijkstra } from "./dijkstra/dijkstra";
import { prim } from "./prim/prim";
import { kruskal } from "./kruskal/kruskal";
import { globals } from "../globals/globals";

export const algorithms = {
  DIJKSTRA: {
    name: "Dijkstra",
    algorithm: (adjMatrix, startNode) => dijkstra(adjMatrix, startNode),
  },
  PRIM: {
    name: "Prim",
    algorithm: (adjMatrix, startNode) => prim(adjMatrix, startNode),
  },
  KRUSKAL: {
    name: "Kruskal",
    algorithm: (adjMatrix, startNode) => kruskal(adjMatrix, startNode),
  },
};

export const addPathToSequence = (
  sequence,
  idxOfFirstNode,
  idxOfSecondNode,
  color = globals.colors.orange
) => {
  sequence.push({
    idxOfFirstNode,
    idxOfSecondNode,
    color,
  });
};
