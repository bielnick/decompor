import NumberUseCase from '../app/usecase/number.usecase';

test('Verify if values return diviors', () => {
   let usecase = new NumberUseCase(5);
   let divisors = usecase.getDivisors();
   expect(divisors).toEqual([1, 5]);
 });

 test('Verify if values return primes divisors', () => {
    let usecase = new NumberUseCase(5);
    let primes = usecase.getPrimes();
    expect(primes).toEqual([1, 5]);
});