"use strict";

/**
 * @class
 * @description - 計算クラス
 */
export class Calculator {
    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xとyを足した数字
     */
    sum(x, y) {
        return x + y;
    }

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xからyを引いた数字
     */
    subtract(x, y) {
        return x - y;
    }

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xとyを掛けた数字
     */
    multiply(x, y) {
        return x * y;
    }

    /**
     *
     * @param {Number} x - 数字1
     * @param {Number} y - 数字2
     * @returns {Number} - xからyを割った数字
     */
    divide(x, y) {
        return x / y;
    }
}
