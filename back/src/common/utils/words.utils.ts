export const toCamelCase = (str: string) => {
  return str.replace(/([-_][a-z])/gi, $1 => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

export const getIfIncludes = (array: string[], textPartial: string) =>
  array.find((field: string) => field.includes(textPartial));
