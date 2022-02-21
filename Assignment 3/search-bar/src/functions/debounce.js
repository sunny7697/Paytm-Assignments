export const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    console.log(context);
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};
