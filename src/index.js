
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';

import checkPrice from './modules/checkPrice'; // оптимизировано
import formSend from './modules/formSend'; //оптимизировано
import accordPrice from './modules/accordPrice'; //оптимизировано
import accordQuestion from './modules/accordQuestion';
import popups from './modules/popups'; //оптимизировано
import validator from './modules/validator'; //оптимизировано

checkPrice(); //калькулятор 
popups(); //открытие модальных окон
accordQuestion(); //аккордеон для блока с вопросами
accordPrice(); //аккордеон для блока с ценой
formSend(); // отправка форм
validator(); //валидация 
