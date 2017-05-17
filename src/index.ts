import arrify = require('arrify');
import { set } from 'lodash';

const myObj = {};
set(myObj, 'hello', 'world');

console.log(arrify(1));
console.log(myObj);
console.log('OK');
