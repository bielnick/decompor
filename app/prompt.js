import {NumberPresentation} from './presentation/number.presentation.js';
import prompt from 'prompt';
prompt.start();

prompt.get(['number'], function (err, result) {
  if (err) {
    console.log(err);
  }
  let np = new NumberPresentation(result.number);
  let response = np.buildResult();

  console.log(response);
});

