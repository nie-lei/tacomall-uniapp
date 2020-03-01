<<<<<<< HEAD
export function isDef(value) {
    return value !== undefined && value !== null;
}
export function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
export function isNumber(value) {
    return /^\d+$/.test(value);
}
export function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
export function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
=======
export function isDef(value) {
    return value !== undefined && value !== null;
}
export function isObj(x) {
    const type = typeof x;
    return x !== null && (type === 'object' || type === 'function');
}
export function isNumber(value) {
    return /^\d+$/.test(value);
}
export function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
export function nextTick(fn) {
    setTimeout(() => {
        fn();
    }, 1000 / 30);
}
>>>>>>> b91c49eff5514b9c4f77ed2f16338bc86fcaa1e9
