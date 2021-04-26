const readLineSync = require('readline-sync');

const showWelcomeMessage = () => {
  console.log('Welcome to the URL Encoder/Decoder App !!');
}

const exitApp = () => {
  console.log('\nExiting...');
  process.exit(0);
}

const encodeOptionSteps = () => {
  const urlToEncode = readLineSync.question('Please enter the url to be encoded:\n');
  const encodedURL = encodeURI(urlToEncode);
  console.log('After encoding:');
  console.log(encodedURL);
}

const decodeOptionSteps = () => {
  const urlToDecode = readLineSync.question('Please enter the url to be decoded:\n');
  const decodedURL = decodeURI(urlToDecode);
  console.log('After decoding:');
  console.log(decodedURL);
}

const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('1.\turlEncode');
  console.log('2.\turlDecode');
  console.log('3.\texit');
  const selection = readLineSync.question('Your selection: ');

  switch(selection) {
    case '1':
      encodeOptionSteps();
      break;
    case '2':
      decodeOptionSteps();
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