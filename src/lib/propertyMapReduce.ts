type InputObject = {
  [key: string]: any;
};

export const properyMapReduce = <T extends InputObject>(
  inputObject: T,
  keysToKeep: (keyof T)[]
): Pick<T, keyof T> => {
  const mappedResult: Pick<T, keyof T> = keysToKeep.reduce((result, key) => {
    if (inputObject.hasOwnProperty(key)) {
      result[key] = inputObject[key];
    }
    return result;
  }, {} as Pick<T, keyof T>);

  const reducedResult: Pick<T, keyof T> = { ...mappedResult };

  return reducedResult;
}

export const propertyMapExclude = <T extends Record<string, any>>(
  inputObject: T,
  keysToRemove: (keyof T)[]
): Omit<T, keyof T> => {
  const reducedResult: Omit<T, keyof T> = Object.keys(inputObject).reduce(
    (result, key) => {
      if (!keysToRemove.includes(key as keyof T)) {
        result[key as keyof T] = inputObject[key];
      }
      return result;
    },
    {} as any
  );

  return reducedResult;
};