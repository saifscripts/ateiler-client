export const pickValues = (obj: Record<string, unknown>, keys: string[]) => {
  return keys.reduce((acc: Record<string, unknown>, key: string) => {
    acc[key] = obj[key];
    return acc;
  }, {});
};
