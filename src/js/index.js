'use strict';

import { Calculator } from "./calculator.js";


{
    const calc = new Calculator();

    console.log(calc.sum(10, 2));
    console.log(calc.subtract(10, 2));
    console.log(calc.multiply(10, 2));
    console.log(calc.divide(10, 2));
}
