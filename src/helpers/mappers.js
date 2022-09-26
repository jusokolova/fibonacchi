import { addColor } from './color';

export const mapInitialState = (state) => {
  const [first, second] = state;

  return [...state.map(addColor), addColor(first + second)];
};

export const mapDictionary = (nextNumber) => (dictionary) => {
  const isAlreadyInDictionary = dictionary.find((item) => item.number === nextNumber);

  if (isAlreadyInDictionary) return dictionary;

  return [...dictionary, addColor(nextNumber)];
};