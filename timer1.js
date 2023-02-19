// slice off the first two items in order to only work with the user's input
const input = process.argv.slice(2);

for (let item of input) {
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

// Test input:
// node timer1.js 1 2 -3 banana 5 3

// returned:
// It took this many seconds to trigger the beep: 1
// It took this many seconds to trigger the beep: 2
// It took this many seconds to trigger the beep: 3
// It took this many seconds to trigger the beep: 5

// ✅ Test passed