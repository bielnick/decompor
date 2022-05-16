const prompt = require('prompt');

prompt.start();

prompt.get(['number'], function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('number: ' + result.number);
});

