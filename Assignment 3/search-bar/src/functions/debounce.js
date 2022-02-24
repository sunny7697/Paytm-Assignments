export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    let context = this;

    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      timer = null;
      func.apply(context, args); // func -> handleInputChange
    }, delay);
  };
};
