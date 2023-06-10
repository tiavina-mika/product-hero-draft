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
 * transform position to flex value
 */
export const getAlignment = (
  alignment: "left" | "center" | "right"
): "flex-start" | "flex-end" | "center" => {
  if (alignment === "left") {
    return "flex-start";
  }
  if (alignment === "right") {
    return "flex-end";
  }

  return "center";
};

/**
 * transform position to flex value
 */
export const getVerticalAlignment = (
  alignment: "top" | "center" | "bottom"
): "flex-start" | "flex-end" | "center" => {
  if (alignment === "top") {
    return "flex-start";
  }
  if (alignment === "bottom") {
    return "flex-end";
  }

  return "center";
};

/**
 * for ulr name
 * my Site => my-site
 * @param {*} text
 * @param {*} separator
 * @returns
 */
export const slugify = (text: string, separator = "-"): string => {
  text = text.trim();
  text = text.toLowerCase();

  // remove accents, swap ñ for n, etc
  const from = "åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;";
  const to = "aaaaaaeeeeiiiioooouuuunc------";

  for (let i = 0, l = from.length; i < l; i++) {
    text = text.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  return text
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes
    .replace(/^-+/, "") // trim - from start of text
    .replace(/-+$/, "") // trim - from end of text
    .replace(/-/g, separator);
};
