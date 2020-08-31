// Event Loop

// const timeout = setTimeout(() => {
//     console.log('after timeout');
// }, 2500)
// // clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log('after interval');
// }, 1000);
// clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay( () => {
//     console.log('after');
// }, 2000)

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {}, wait);
  });
  return promise;
};
