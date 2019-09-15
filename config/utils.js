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
 * 防抖函数（疯狂操作，最后一次才触发）
 * @param {function} fun 可执行函数
 * @param {number} delay 延迟时间
 * @param {any} params 函数参数
 */
export const debounce = (fun, delay = 1000, params) => {
  if (!fun || Object.prototype.toString.call(fun) !== '[object Function]') {
    return () => console.warn('参数没有可执行函数');
  }
  return function (args) {
    let that = this;
    clearTimeout(fun.timer);
    fun.timer = setTimeout(function () {
      fun.call(that, params || args);
    }, delay);
  };
};

/**
 * 节流函数（疯狂操作，第一次触发后一段时间内其他都不触发）
 * @param {function} fun 可执行函数
 * @param {number} delay 延迟时间
 * @param {any} params 函数参数
 */
export const throttle = (fun, delay = 1000, params) => {
  if (!fun || Object.prototype.toString.call(fun) !== '[object Function]') {
    return () => console.warn('参数没有可执行函数');
  }
  return function (args) {
    let that = this;
    let now = +new Date();
    if (fun.last && now < fun.last + delay) { // 对于input输入，还是需要再执行一次的
      clearTimeout(fun.timer);
      fun.timer = setTimeout(function () {
        fun.last = now;
        fun.apply(that, params || args);
      }, delay);
    } else {
      clearTimeout(fun.timer);
      fun.last = now;
      fun.apply(that, params || args);
    }
  };
};
