'use strict'

const input1 = document.getElementById('value1')
const input2 = document.getElementById('value2')
const signInput = document.getElementById('sign')
const button = document.querySelector('button')
const result = document.getElementById('result')

button.addEventListener('click', () => {
    const value1 = input1.value.trim();
    const value2 = input2.value.trim();
    const sign = signInput.value.trim();

    if (value1 === '') {
        result.textContent = 'Первое число не указано';
    } else if (isNaN(value1)) {
        result.textContent = 'Некорректный ввод чисел';
    } else if (value2 === '') {
        result.textContent = 'Второе число не указано';
    } else if (isNaN(value2)) {
        result.textContent = 'Некорректный ввод чисел';
    } else if ((+value2 === 0 || -0) & (sign === '/')) {
        result.textContent = 'Делить на ноль нельзя';
    } else if (sign === '*') {
        result.textContent = value1 * value2;
        console.log(result.textContent);
    } else if (sign === '/') {
        result.textContent = value1 / value2;
        console.log(result.textContent);
    } else if (sign === '-') {
        result.textContent = value1 - value2;
        console.log(result.textContent);
    } else if (sign === '+') {
        result.textContent = +value1 + +value2;
        console.log(result.textContent);
    } else if (sign !== '+'||'-'||'/'||'*') {
        result.textContent = 'Знак не введен или введен некорректно';
    }
    
 });