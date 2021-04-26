const readLineSync = require('readline-sync');
const crypto = require('crypto');

const showWelcomeMessage = () => {
  console.log('Welcome to the String Hashing App !!');
}

const hashingAlgorithms = {
  '1': 'md5',
  '2': 'sha1',
  '3': 'sha256',
  '4': 'sha512'
}

const hashingAlorithmsKeys = Object.keys(hashingAlgorithms);

const exitApp = () => {
  console.log('\nExiting...');
  process.exit(0);
}

const hashingOptionSteps = (algorithm) => {
  const stringToHash = readLineSync.question('Please enter the string to be hashed:\n');
  const hashed = crypto.createHash(algorithm).update(stringToHash).digest('hex');
  console.log(`After hashing using ${algorithm}:`);
  console.log(hashed);
}

const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('0:\texit');
  for (const [key, value] of Object.entries(hashingAlgorithms)) {
    console.log(`${key}:\t${value}`);
  }
  const selection = readLineSync.question('Your selection: ');

  switch(selection) {
    case '0':
      exitApp();    
    default:
      if (hashingAlorithmsKeys.includes(selection)) {
        hashingOptionSteps(hashingAlgorithms[selection]);
      } else {
        console.log('Invalid option.');
      }
  }
}

const main = () => {
  showWelcomeMessage();
  while (true) {
    optionSelector();
  }
}

main();