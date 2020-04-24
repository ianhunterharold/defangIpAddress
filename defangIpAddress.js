const defangIPaddr = function(address) {
  let turnIntoArray = address.split('');

  for (let j =0; j <turnIntoArray.length; j++){
    if (turnIntoArray[j] === '.'){
      let replacing = turnIntoArray.splice(j,1,'[.]')
    }
  }
  let joined = turnIntoArray.join('');

  return joined;
};
const str1=  "255.100.50.0";
defangIPaddr(str1); 