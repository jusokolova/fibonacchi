import { useCallback, useEffect, useMemo, useState } from 'react';

import { initialDictionary, initialState } from './helpers';
import { getBackgroundColor } from './helpers/color';
import { saveDictionary, saveNumbers } from './helpers/localStorage';
import { mapDictionary } from './helpers/mappers';

export const useFibonacci = () => {
  const [numbers, setNumbers] = useState(initialState);
  const [dictionary, setDictionary] = useState(initialDictionary);
  const nextNumber = numbers[0] + numbers[1];

  /* Обновления localStorage */
  useEffect(() => {
    saveNumbers(numbers);
    setDictionary(mapDictionary(nextNumber));
  }, [numbers]);

  useEffect(() => {
    saveDictionary(dictionary);
  }, [dictionary]);

  /* Обработчик клика на кнопку */
  const handleClick = useCallback((isForward) => {
    setNumbers(([first, second]) => {
      if (isForward) {
        return [second, first + second];
      }

      return [second - first, first];
    })
  }, [setNumbers]);

  /* Константы для использования в компоненте */
  const numbersToDisplay = useMemo(() => [...numbers, nextNumber], [numbers]);
  const handleForward = useCallback(() => handleClick(true), []);
  const handleBack = useCallback(() => handleClick(false), []);
  const prevButtonDisabled = useMemo(() => numbersToDisplay[0] === 0, [numbersToDisplay]);
  const backgroundColor = getBackgroundColor(dictionary);

  return { numbersToDisplay, handleForward, handleBack, prevButtonDisabled, backgroundColor };
};

