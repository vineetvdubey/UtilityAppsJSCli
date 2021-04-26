const readLineSync = require('readline-sync');

const showWelcomeMessage = () => {
  console.log('Welcome to the RGB/Hex Colour Converter App !!');
}

const exitApp = () => {
  console.log('\nExiting...');
  process.exit(0);
}

const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

const hexToRgb = (hex) => {
  let h = parseInt(hex, 16)
  const rgb = {
      r: (h >> 16) & 0xFF,        // or `(i & 0xFF0000) >> 16`
      g: (h >>  8) & 0xFF,        // or `(i & 0x00FF00) >>  8`
      b:  h        & 0xFF         // or ` i & 0x0000FF       `
  };
  return rgb;
}

const rgbToHexSteps = () => {
  console.log('Enter RGB values individually:')
  const r = parseInt(readLineSync.question('Red: '));
  const g = parseInt(readLineSync.question('Green: '));
  const b = parseInt(readLineSync.question('Blue: '));
  console.log('HEX result:');
  console.log(rgbToHex(r, g, b));
}

const hexToRgbSteps = () => {
  const hex = readLineSync.question('Enter HEX value: #')
  const rgb = hexToRgb(hex);
  console.log('RGB result:');
  console.log(rgb);
}

const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('1.\trgbToHex');
  console.log('2.\thexToRgb');
  console.log('3.\texit');
  const selection = readLineSync.question('Your selection: ');

  switch(selection) {
    case '1':
      rgbToHexSteps();
      break;
    case '2':
      hexToRgbSteps();
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
