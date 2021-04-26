const readLineSync = require('readline-sync');

const showWelcomeMessage = () => {
  console.log('Welcome to the Unit Converter App !!');
}

const exitApp = () => {
  console.log('\nExiting...');
  process.exit(0);
}

const celsiusToFahrenheit = (temp) => {
  return (temp * 9 / 5) + 32;
}

const fahrenheitToCelsius = (temp) => {
  return (temp - 32) * 5 / 9;
}


const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('0.\texit');
  console.log('1.\tCelsius to Fahrenheit');
  console.log('2.\tFahrenheit to Celsius');

  const selection = readLineSync.question('Your selection: ');

  switch (selection) {
    case '0':
      exitApp();
    case '1':
      const tempInC = readLineSync.question('\nEnter temperature (in °C): ');
      console.log(`Result: ${celsiusToFahrenheit(tempInC)} °F`);
      break;
    case '2':
      const tempInF = readLineSync.question('\nEnter temperature (in °F): ');
      console.log(`Result: ${fahrenheitToCelsius(tempInF)} °C`);
      break;
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
