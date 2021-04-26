const readLineSync = require('readline-sync');

const showWelcomeMessage = () => {
  console.log('Welcome to the Epoch Converters App !!');
}

const exitApp = () => {
  console.log('\nExiting...');
  process.exit(0);
}

const toHumanDateSteps = () => {
  const epochInMillis = readLineSync.question('Please enter the epoch (in milliseconds):\n');
  const date = new Date(parseInt(epochInMillis));
  console.log('Human readable format:');
  console.log(date.toGMTString());
}

const toEpochSteps = () => {
  console.log('Please enter the following details (in GMT):');
  const year = readLineSync.question('Year: ');
  const month = readLineSync.question('Month: ');
  const day = readLineSync.question('Day (of month): ');
  const hours = readLineSync.question('Hours (24-hr format): ');
  const minutes = readLineSync.question('Minutes: ');
  const seconds = readLineSync.question('Seconds: ');
  const date = new Date(year, month - 1, day, hours, minutes, seconds);
  console.log('Epoch (in millis):');
  console.log(date.getTime());
}

const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('1.\ttoHumanDate');
  console.log('2.\ttoEpoch');
  console.log('3.\texit');
  const selection = readLineSync.question('Your selection: ');

  switch(selection) {
    case '1':
      toHumanDateSteps();
      break;
    case '2':
      toEpochSteps();
      break;
    case '3':
      exitApp();
    default:
      console.log('Invalid option.');
  }
}

const main = () => {
  showWelcomeMessage();
  while (true) {
    optionSelector();
  }
}

main();