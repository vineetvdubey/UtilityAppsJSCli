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

const poundToKilogram = (weight) => {
  return (weight / 2.20462);
}

const kilogramToPound = (weight) => {
  return (weight * 2.20462);
}

const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('0.\texit');
  console.log('1.\tCelsius to Fahrenheit');
  console.log('2.\tFahrenheit to Celsius');
  console.log('3.\tKilogram to Pound');
  console.log('4.\tPound to Kilogram');

  const selection = readLineSync.question('Your selection: ');

  switch (selection) {
    case '0':
      exitApp();
    case '1':
      const tempInC = readLineSync.question('\nEnter temperature (in °C): ');
      console.log(`Result: ${celsiusToFahrenheit(tempInC).toFixed(2)} °F`);
      break;
    case '2':
      const tempInF = readLineSync.question('\nEnter temperature (in °F): ');
      console.log(`Result: ${fahrenheitToCelsius(tempInF).toFixed(2)} °C`);
      break;
    case '3':
      const weightInKg = readLineSync.question('\nEnter weight (in Kg): ');
      console.log(`Result: ${kilogramToPound(weightInKg).toFixed(4)} lb`);
      break;
    case '4':
      const weightInLb = readLineSync.question('\nEnter weight (in lb): ');
      console.log(`Result: ${poundToKilogram(weightInLb).toFixed(4)} Kg`);
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
