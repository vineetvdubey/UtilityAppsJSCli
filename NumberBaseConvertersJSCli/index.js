const readLineSync = require('readline-sync');

const showWelcomeMessage = () => {
  console.log('Welcome to the Number Base Converters App !!');
}

const baseMap = {
  'BINARY': 2,
  'OCTAL': 8,
  'DECIMAL': 10,
  'HEX': 16
}

const baseList = Object.entries(baseMap);

const convertBase = (number, sourceBase, destinationBase) => {
  return parseInt(number, sourceBase).toString(destinationBase);
}

const baseSelector = (message) => {
  console.log();
  console.log(message);
  for (let index = 0; index < baseList.length; index++) {
    console.log(`${index}:\t${baseList[index][0]}`);
  }
  while(true) {
    const selectedIndex = readLineSync.question('Your selection: ');
    if (selectedIndex < baseList.length) {
      return baseList[selectedIndex][1];
    } else {
      console.log('Invalid input.');
    }
  }
}

const converterDriver = () => {
  const sourceBase = baseSelector('Select source base:');
  const destinationBase = baseSelector('Select destination base:');
  const number = readLineSync.question(`\nEnter number in base-${sourceBase}: `);
  const result = convertBase(number, sourceBase, destinationBase);
  console.log(`Result in base-${destinationBase}: ${result}`);
}


const main = () => {
  showWelcomeMessage();
  converterDriver();
}

main();