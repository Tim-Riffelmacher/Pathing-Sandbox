export const getIndexedHexColor = (idx) => {
  const colors = [
    "#da7373",
    "#daad73",
    "#d3da73",
    "#8bda73",
    "#73dab8",
    "#73cbda",
    "#7397da",
    "#7a73da",
    "#b973da",
    "#da73bb",
    "#da7373",
  ];
  return colors[idx % colors.length];
};

export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const has = (obj) => {
  if (obj === undefined || obj === null) {
    return false;
  }
  return true;
};
