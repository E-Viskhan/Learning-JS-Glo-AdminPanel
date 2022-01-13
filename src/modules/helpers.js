export const debounce = (func, ms = 300) => {

  let timer;

  return (...args) => {
    clearTimeout(timer);

    timer = setTimeout(() => { func.apply(this, args); }, ms);
  };
};

export const showError = (str) => {
  const errorBlock = document.querySelector('.error-text');
  errorBlock.textContent = str;
};