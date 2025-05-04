const x = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1, 5, 6]);
        reject('Error!')
    }, 2000)
})

x.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})