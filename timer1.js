// slice off the first two items in order to only work with the user's input
const userInput = process.argv.slice(2);

for (let item of userInput) {
  // skip over these edge cases:
  // if the item is not a number || if the item is less than 0
  if (isNaN(item) || item < 0) {
    continue;
  }
  setTimeout(() => {
    console.log("It took this many seconds to trigger the beep:", item);
    // use "\x07" to generate the beep sound
    return process.stdout.write('\x07');
    // use the number the user enters to set the timer:
  }, 1000 * item);
}