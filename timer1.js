const input = process.argv.slice(2);

// console.log(input[1])


for (let item of input) {
    setTimeout(() => {
      console.log("beep", item)
    }, 1000 * item)
}