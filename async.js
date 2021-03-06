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
    setTimeout(() => {
      //   resolve();
      reject("Something went wrong. Try again");
    }, wait);
  });
  return promise;
};

// delay(2500)
// .then(() => {
//     console.log('after 2 sec');
// })
// .catch(err => {
//     console.error('error:', err);
// })
// .finally(() => {
//     console.log('finally');
// })

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

// getData().then((data) => console.log(data));

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log("data", data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("finally");
  }
}
asyncExample();
