import { useState } from 'react';

export default function useOldState(initialState) {
  const [state, setState] = useState(initialState);
  function partiallySetState(newState) {
    setState({ ...state, ...newState });
  }
  const suit = [state, partiallySetState];
  return suit;
}
