import { LOWERCASE_CHARS, NUMBERS, SYMBOLS, UPPERCASE_CHARS } from "../constants/Constants";

export default function usePasswordGenerator() {
  
  function randomIndexGenerator(target){
    const length = target.length;
    const index = Math.floor(Math.random()*length);
    return index;
  }

  function charcaterGenerator(id) {
    switch(id) {
      case 'lowercase':
        const lowIndex = randomIndexGenerator(LOWERCASE_CHARS);
        return LOWERCASE_CHARS[lowIndex];
         
      case 'uppercase':
        const upIndex = randomIndexGenerator(UPPERCASE_CHARS);
        return UPPERCASE_CHARS[upIndex];
      case 'number':
        const numIndex = randomIndexGenerator(NUMBERS);
        return NUMBERS[numIndex];
      case 'symbol':
        const symbIndex = randomIndexGenerator(SYMBOLS)
        return SYMBOLS[symbIndex];
    }
  }

  function generatePass(checkboxOptions , length) {
    if(length === 0){
      return '';
    }

    let checkedEntries = [];

    Object.keys(checkboxOptions).forEach((key) => {
      if(checkboxOptions[key]){
        checkedEntries.push(key);
      }
    })

    if(!checkedEntries.length){
      return '';
    }

    let password = '';
    let currentLength = 0;;

    for (let i = 0; i < checkedEntries.length; i++) {
      const id = checkedEntries[i];
      const charToConcat = charcaterGenerator(id);
      password = password.concat(charToConcat);
      currentLength++;
      if (currentLength >= length) {
        break; // Exits the loop when the condition is met
      }
    }

    while(currentLength < length){
      const toGenerateIndex = randomIndexGenerator(checkedEntries);
      const charToConcat = checkedEntries[toGenerateIndex];
      password = password.concat(charcaterGenerator(charToConcat));
      currentLength++;
    }

    return password;
  }

  return {
    generatePass 
  }

}