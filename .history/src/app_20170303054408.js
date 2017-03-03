// if you use CSS/SCSS stack
import './styles.scss';
import './css/main.css';

import jQuery from 'jquery';
/**
 * Just a Test for  ES6...
 */
import Message from './es';
console.clear();
const bonjour = new Message('Bonjour Wild Code Scool', 'Welcome');
console.warn(bonjour);

/**
 * Just a test for Jquery...
 */
jQuery(() => console.log('JQuery is ready...'));
