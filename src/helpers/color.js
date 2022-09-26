export const generateColor = () => {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const addColor = (number) => ({ number, color: generateColor() });

export const getBackgroundColor = dictionary => number => dictionary.find((item) => item.number === number)?.color;
