// Grabbing all buttons 
let arrButtons = document.querySelectorAll('.filter');
// Grabbing all images
let arrImages = document.querySelectorAll('.animal');

console.log(arrButtons);
console.log(arrImages);
// Creating a loop for all buttons 
for(counter=0; counter < arrButtons.length; counter++){
    // Grabbing indiviual button from array by the key
    let currentButton = arrButtons[counter];
    // console.log(currentButton);
    // Adding an Event Listener when button is clicked
    currentButton.addEventListener('click',function(){
         // console.log(this);
        // Grabbing the Current animal to show and hide
        let animalToShow = this.getAttribute('animal');
        console.log(animalToShow);
        // Looping through all images too show/hide them 
        for(imageCounter=0; imageCounter < arrImages.length; imageCounter++){
            //grabbing current image from array using key
            let currentImage = arrImages[imageCounter];
            console.log(currentImage)
            //if the image contains the animal name in it's classes
            if(currentImage.classList.contains(animalToShow)){
                //show image
                currentImage.parentNode.style.display = 'block';
                } else {
                // hide image
                currentImage.parentNode.style.display = 'none';
                }
                 //override for show all
                if(animalToShow == 'all'){
                currentImage.parentNode.style.display = 'block';
                }
        }
    });
}
