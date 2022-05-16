import {isNumber, isInteger, roundUp} from '../application/number.application';
import { NumberUseCase } from '../usecase/number.usecase';
export class NumberPresentation {
    constructor(number) {
        this.number = number;
    }

    getNumber() {
        return this.number;
    }

    isNumber() {
        return isNumber(this.number);
    }

    isInteger() {
        return isInteger(this.number);
    }

    roundUp() {
        return roundUp(this.number);
    }

    checkValue() {
        if (!this.isNumber(this.number)) {
            throw new Error('The value is not a number');
        }
        if(!this.isInteger(this.number)) {
            this.number = this.roundUp(this.number)
        }
        
        return true;
    }

    validate() {
        if(this.checkValue()) 
            return this.number;
    }

    getResult() {
        if(this.validate())
            return this.buildResult();
    }

    buildResult() {
    
       const usecase = new NumberUseCase(this.number);
       const primes = usecase.getPrimes();
       const divisors = usecase.getDivisors();

       return  `\n Valor de entrada:${this.number} \n Numeros Divisores: ${divisors} \n Numeros Primos: ${primes}`;
    }
}
