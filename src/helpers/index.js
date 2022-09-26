import { savedNumbers, savedDictionary } from './localStorage';
import { mapInitialState } from './mappers';

export const initialState = savedNumbers || [0, 1];
export const initialDictionary = savedDictionary || mapInitialState(initialState);
