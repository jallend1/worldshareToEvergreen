javascript:navigator.clipboard.readText().then((e=>{const t=JSON.parse(e);(e=>{const t=document.querySelector("#title-input");t.value="ILL Title - "+e;const n=new Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(n)})(t[2].title),(e=>{const t=document.querySelector("#callnumber-input");t.value="IL"+e;const n=new Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(n)})(t[1].requestNumber),(e=>{const t=document.querySelector("#patron-barcode-input");t.value=e;const n=new Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(n)})(t[3].patronID),(e=>{const t=document.querySelector("textarea");t.value=e;const n=new Event("input",{bubbles:!0,cancelable:!0});t.dispatchEvent(n)})(t[0].addressString),document.querySelector("#item-barcode-input").focus(),console.log(t)}));