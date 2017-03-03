// if you use CSS/SCSS stack
import './sass/main.scss';
import './css/main.css';
import jQuery from 'jquery';

/**
 * Just a Test for  ES6...
 */
import Message from './es';
console.clear();
const bonjour = new Message('Bonjour Wild Code Scool', 'Enjoy ES6 ^^');
console.warn(bonjour);

/**
 * Just a test for Jquery...
 */
jQuery(() => console.log('JQuery is ready...'));
