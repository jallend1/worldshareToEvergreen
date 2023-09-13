const titleInput = document.querySelector('#title-input');
const callNumberInput = document.querySelector('#callnumber-input');
const patronBarcodeInput = document.querySelector('#patron-barcode-input');
const kclsBarcodeInput = document.querySelector('#item-barcode-input');
const addressInput = document.querySelector('textarea');

let title;
let requestNumber;
let patronID;
let addressString;

const updateTitle = (title) => {
  titleInput.value = 'ILL Title - ' + title;
  const event = new Event('input', {
    bubbles: true,
    cancelable: true
  });
  titleInput.dispatchEvent(event);
};

const updateCallNumber = (requestNumber) => {
  callNumberInput.value = 'IL' + requestNumber;
  const event = new Event('input', {
    bubbles: true,
    cancelable: true
  });
  callNumberInput.dispatchEvent(event);
};

const updatePatronBarcode = (patronID) => {
  patronBarcodeInput.value = patronID;
  const event = new Event('input', {
    bubbles: true,
    cancelable: true
  });
  patronBarcodeInput.dispatchEvent(event);
};

const updatePatronAddress = (addressString) => {
  addressInput.value = addressString;
  const event = new Event('input', {
    bubbles: true,
    cancelable: true
  });
  addressInput.dispatchEvent(event);
};

const extractArrayFromClipboard = () => {
  navigator.clipboard.readText().then((text) => {
    console.log(text);
    console.log(addressInput);
    const array = JSON.parse(text);
    console.log(array[0].addressString);
    updateTitle(array[2].title);
    updateCallNumber(array[1].requestNumber);
    updatePatronBarcode(array[3].patronID);
    updatePatronAddress(array[0].addressString);
  });
};

extractArrayFromClipboard();
