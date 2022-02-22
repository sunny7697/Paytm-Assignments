export const debounce = (func, fn, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    // taking text out of input box
    const text = args[0].target.value;
    // setting text in inputText state which is in App.js
    fn(text); // fn -> setInputText

    if (timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      timer = null;
      func.apply(context, args); // func -> handleInputChange
    }, delay);
  };
};
