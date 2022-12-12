const args = process.argv.slice(2);

const alarm = function() {
  for (let arg of args) {
    arg = parseInt(arg);
    if (arg >= 0 && typeof arg === "number") {
      setTimeout(()=> {
        process.stdout.write('\x07');
      }, parseInt(arg) * 1000);
    }
  }
};

alarm();