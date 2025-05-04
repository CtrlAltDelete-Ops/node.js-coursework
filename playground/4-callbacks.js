const x = ((callback) => {
    setTimeout(() => {
        callback("Error!", 68);
    }, 2000)
})
x((Error, num) => {
    console.log(num);
})