const localStorageNumbersKey = 'numbers';
const localStorageDictionaryKey = 'dictionary';

const getFromLS = (key) => JSON.parse(localStorage.getItem(key));
const setInLS = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const savedNumbers = getFromLS(localStorageNumbersKey)?.map((item) => Number(item));

export const savedDictionary = getFromLS(localStorageDictionaryKey);

export const saveNumbers = (numbers) => { setInLS(localStorageNumbersKey, numbers); };
export const saveDictionary = (dictionary) => setInLS(localStorageDictionaryKey, dictionary);
