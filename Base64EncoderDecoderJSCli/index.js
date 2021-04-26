const readLineSync = require('readline-sync');

const showWelcomeMessage = () => {
  console.log('Welcome to the Base64 Encoder/Decoder App !!');
}

const exitApp = () => {
  console.log('\nExiting...');
  process.exit(0);
}

const encodeOptionSteps = () => {
  const contentToEncode = readLineSync.question('Please enter the content to be encoded:\n');
  const encoded = Buffer.from(contentToEncode).toString('base64');
  console.log('After encoding:');
  console.log(encoded);
}

const decodeOptionSteps = () => {
  const contentToDecode = readLineSync.question('Please enter the content to be decoded:\n');
  const decoded = Buffer.from(contentToDecode, 'base64').toString('ascii');
  console.log('After decoding:');
  console.log(decoded);
}

const optionSelector = () => {
  console.log('\nPlease select an option:');
  console.log('1.\tbase64Encode');
  console.log('2.\tbase64Decode');
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