const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const len = alphabet.length;

function cypher(shift, code, str) {
  const result = str.split('');
  if (code === 'encode') {
    return result.map(el => {
      let index = alphabet.indexOf(el) + shift;
      if (index >= 0) {
        // if(index >= len){
        index = (index + shift) % len;
        // console.log(len)
        console.log(index);
        // }
        return alphabet[index];
      }
      throw new Error('shift must be positiv integer');
    });
  }
  //   else if (code === 'decode') {
  //   }
}

module.exports = { cypher };
