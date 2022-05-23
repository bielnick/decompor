import { NumberPresentation } from '../app/presentation/number.presentation';

test('Verify if the check method works', () => {
  let np = new NumberPresentation(5);
  let result = np.checkValue();
  expect(result).toBe(true);
});

test('Throw error when the value is a not number', () => {
  let np = new NumberPresentation('a');
  expect(np.checkValue).toThrow();
});

test('If the value is not a integer roundup it', () => {
  let np = new NumberPresentation(5.5);
  let result = np.checkValue();
  expect(result).toBe(true);
});
