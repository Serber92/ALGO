let a = function() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('PIDR');
    }, 1000);
  })
}

let b = function() {
  return Promise.resolve('GNIDA')
}

try {
  const c = await a();
  console.log(c)
} catch(err) {
  console.log(`ERROR: ${err}`)
}






