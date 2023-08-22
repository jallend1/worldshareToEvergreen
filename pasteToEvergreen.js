const titleInput = document.querySelector('#title-input');
const callNumberInput = document.querySelector('#call-number-input');
const patronBarcodeInput = document.querySelector('#patron-barcode-input');
const kclsBarcodeInput = document.querySelector('#item-barcode-input');

const updateTitle = () => {
    titleInput.value = 'Hello There';
    const event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    titleInput.dispatchEvent(event);
};

const extractArrayFromClipboard = () => {
    navigator.clipboard.readText().then((text) => {
        console.log(text);
        console.log(array);
    });
}
