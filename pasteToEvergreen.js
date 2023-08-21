const titleInput = document.querySelector('#precat-title-input');
const callNumberInput = document.querySelector('#precat-call-number-input');
const patronBarcodeInput = document.querySelector('#precat-patron-barcode-input');
const kclsBarcodeInput = document.querySelector('#precat-kcls-barcode-input');

const updateTitle = () => {
    titleInput.value = 'Hello There';
    const event = new Event('input', {
        bubbles: true,
        cancelable: true,
    });
    titleInput.dispatchEvent(event);
};

