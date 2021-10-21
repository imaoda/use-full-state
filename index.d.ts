export default function useOldState<T>(
  initialState: T
): [T, (state: Partial<T>) => T];
