export const debounce = (func, fn, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    fn(args[0].target.value);
    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};
