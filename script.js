var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzX8auQwPyXGt--lLFizDM6sODdP4W0EBOAlD92eGaT8imFQM4bLydYyS2ZGCgIPRaG5w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
})