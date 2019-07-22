export const getRandomColorFromPalette = () => {
  const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };
  const colors = ["#e3ded9", "#bba686", "#416270", "#8aa4ab"];
  return colors[getRandomInt(colors.length)];
};

export const getColorFromPalette = index => {
  const colors = ["#e3ded9", "#bba686", "#416270", "#8aa4ab"];
  return colors[index % colors.length];
};
