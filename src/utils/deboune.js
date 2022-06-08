export const debounce = (cb, timer) => {
  let timerId;
  return function () {
    if (timerId) clearTimeout(timerId);
    const context = this;
    const args = arguments;
    setTimeout(() => cb.apply(context, args), timer);
  };
};
