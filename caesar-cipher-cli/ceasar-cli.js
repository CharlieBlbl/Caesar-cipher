const { cypher } = require('./modules/caesar_cypher');

const res = cypher(52, 'encode', 'abz');
console.log(res);
