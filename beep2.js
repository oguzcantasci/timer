const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', (input) => {
  if (isNaN(parseInt(input))) {
    console.log(`I don't think it is possible to set a timer for ${input} seconds!`);
  }

  if (input === 'b') {
    process.stdout.write('\x07');
  }

  if (input < 0 || input > 9) {
    console.log('This program is too cheap to set a timer for more than 9 seconds. Please upgrade to Timer Pro Max.');
  }
  if (input < 10 && input > 0 && typeof parseInt(input) === "number") {
    console.log(`Setting a timer for ${input} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, input * 1000);
  }

});

process.on('exit', function() {
  console.log('"Thanks for using me, ciao!"');
});


