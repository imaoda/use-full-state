import { useState } from "react";

export default function useOldState(initialState) {
  const [state, setState] = useState(initialState);
  function partiallySetState(newState) {
    const newState = { ...state, ...newState };
    setState(newState);
    return newState;
  }
  const suit = [state, partiallySetState];
  return suit;
}
