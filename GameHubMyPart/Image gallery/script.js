    
const colorButtons = document.querySelectorAll('.theme-button');
const colorSwitcher = document.querySelector('.color-swicher');

// Add click event listeners to color buttons
colorButtons.forEach(button => {
button.addEventListener('click', () => {
  const color = button.dataset.color;
  document.documentElement.style.setProperty('--main-color', color);
});
});

// Toggle color switcher visibility
const switcherButton = document.querySelector('.color-swicher-btn');
switcherButton.addEventListener('click', () => {
colorSwitcher.classList.toggle('active');
});

window.onload = function() {

const galleryImages = document.querySelectorAll('.gallery img');
const featuredImage = document.querySelector('.featured-image img');
const featuredCaption = document.querySelector('.featured-image-info .image-caption');

galleryImages.forEach(function(image) {
image.addEventListener('click', function() {
const clickedImageSrc = this.getAttribute('src');
const clickedCaption = this.nextElementSibling.textContent;
featuredImage.setAttribute('src', clickedImageSrc);
featuredCaption.textContent = clickedCaption;
});
});
};


//this for change font size

 function fontchange(n){
            var paragraph = document.getElementById('gall');
            paragraph.style.fontSize = n + "px";
        }

        var buttons = document.querySelector(".buttons");
        var button = buttons.querySelectorAll(".button");

        for(var i = 0; i < button.length; i++){
            button[i].addEventListener('click', function(){
                var current = document.getElementsByClassName('active');
                current[0].className = current[0].className.replace("active", "");
                this.className += " active"
            })
        }
