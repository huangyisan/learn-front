function timeout(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, ms, 'done');
    });
  }
  
  timeout(1000).then((value) => {
    console.log(value);
  });


function test(data) {
    return new Promise((resolve, reject) => {
        const c = Object
        c.onload = function() {
            console.log('c onload')
            resolve(data)
        }
        c.onerror = function() {
            reject(console.log('err'))
        }
    })
}

test('123')

let a = new Promise((resolve, reject) => {
    function success(res) {
        console.log('1123123')
    }
    function faild(err) {
        console.log('err')
    }
})