export const invoke = (fn, ...args) => typeof fn === 'function' ? fn(...args) : fn;
