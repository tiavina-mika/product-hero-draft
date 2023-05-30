/**
 * check if it's null ( 0, '', null, undefined, {}, [] )
 * @param item
 * @returns {boolean}
 */
export const isNull = (item: string): boolean => {
  // NOTE : typeof null = 'object', typeof undefined = 'undefined'
  // see Loose Equality Comparisons With == at ( https://www.sitepoint.com/javascript-truthy-falsy )
  const typeOfValue = typeof item;
  switch (typeOfValue) {
    case "string":
      return item.trim() === "";
    case "object":
      return (
        Object.is(item, null) || Object.values(item).every((val) => isNull(val))
      );
    case "number":
      return !item;
    default:
      return item == null;
  }
};

/**
 * @param object
 * @param {array|Set} names
 * @returns {*}
 */
/* eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types */
export const filter = (
  object: Record<string, any>,
  names: Record<string, any>
): Record<string, any> => {
  return Object.keys(object)
    .filter((key) => (names.has ? names.has(key) : names.includes(key)))
    .reduce((obj, key) => {
      (obj as any)[key] = object[key];
      return obj;
    }, {});
};

const isCleanedString = (
  string: string | Record<string, any> | number
): boolean => {
  return !!(
    !string ||
    typeof string !== "string" ||
    (string && string.trim().length === 0)
  );
};

export const capitalizeFirstLetter = (string: string): string => {
  if (isCleanedString(string)) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * get full name abbreviation
 * ex: John Doe to JM
 * @param user
 * @returns
 */
export const getUserFullNameAbbreviation = (
  user: Record<string, any>
): string => {
  if (!user.lastName && !user.firstName) {
    return "US";
  }
  let abbreviatedName = user.lastName.charAt(0);
  if (user.firstName) {
    abbreviatedName += user.firstName.charAt(0);
  }
  return abbreviatedName.toUpperCase();
};
