/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*this is the js code for the toast in Publicar.html*/
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


/*js for the modal button in the pay wall of the ficha.html*/

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})


/*js for the notifications bell, bc it ain't working arghhhh*/

const myOffcanvas = document.getElementById('myOffcanvas');

// Option 1: Using Bootstrap's Offcanvas Class (Recommended)

// Assuming you've initialized the offcanvas using Bootstrap:
const offcanvasInstance = new bootstrap.Offcanvas(myOffcanvas);

// Show the offcanvas programmatically:
offcanvasInstance.show();


document.getElementById("my-file").onchange = function() {
  if (this.files && this.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      // e.target.result is a base64-encoded url that contains the image data
      document.getElementById('profile-pic').setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(this.files[0]);
  }
}
