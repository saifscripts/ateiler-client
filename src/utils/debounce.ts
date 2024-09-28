/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (func: (...args: any[]) => any, delay: number) => {
  let timeoutId: number;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
