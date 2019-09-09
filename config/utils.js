/**
 * 默认值校验
 * @param {any} value 原本要取得值
 * @param {any} alternate 原值不满足时的替换值
 */
export const typevalue = (value, alternate) => {
  if (typeof value === typeof alternate) {
    if (typeof value === 'object') {
      const valueInstructor = value instanceof Array;
      const alternateInstructor = alternate instanceof Array;
      if (valueInstructor === alternateInstructor) {
        throw new Error(`你需要的是${value.constructor}，但是你得到的是${alternateInstructor.constructor}`)
      }
    }
  } else {
    throw new Error(`你需要的是${typeof value}，但是你得到的是${typeof alternate}`);
  }
  if (!value) {
    return alternate;
  } else {
    return value;
  }
}

/**
 * 防抖
 */

/**
 * 节流
 */