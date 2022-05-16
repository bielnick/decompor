export class NumberUseCase{
    constructor(number) {
        this.number = number;
    }

    getPrimes() {
         let primes = [];
         let divisors = this.getDivisors(); 
        for(let i = 0; i < divisors.length; i++) {
            let isPrime = true;
            for(let j = 2; j < divisors[i]; j++) {
                if(divisors[i] % j === 0) {
                    isPrime = false;
                }
            }
            if(isPrime) {
                primes.push(divisors[i]);
            }
        }
        return primes;
    }

    getDivisors() {
        let number = this.number;
        let divisors = [];
        for(let i = 1; i <= number; i++) {
            if(number % i === 0) {
                divisors.push(i);
            }
        }
        return divisors;
    }
}