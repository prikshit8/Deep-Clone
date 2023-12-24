/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
  const type = typeof value;
  if (type !== "object" || !value) return value;
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  } else {
    const valueArr = Object.entries(value);
    const deepClonedValueArr = valueArr.map((item) => {
      return [item[0], deepClone(item[1])];
    });
    return Object.fromEntries(deepClonedValueArr);
  }
}
