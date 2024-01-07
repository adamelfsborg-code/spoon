type SumArrayProps<T> = {
  array: T[],
  keys: (keyof T)[]
}

export const sumArray = <T extends Record<string, any>>({ array, keys }: SumArrayProps<T>) => {
  return array.reduce((result, item) => {
    keys.forEach((key) => {
      result[key] = (result[key] || 0) + (item[key] || 0);
    });
    return result;
  }, {} as Record<keyof T, number>);
}