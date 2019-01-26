    // Get the modal
var emailModal = document.getElementById('emailModal');
var resumeModal = document.getElementById('resumeModal');
var beatModal = document.getElementById('beatModal');
var foodieModal = document.getElementById('foodieModal');
// Get the button that opens the modal
var emailBtn = document.getElementById("emailBtn");
var resumeBtn = document.getElementById("resumeBtn");
var project1Btn = document.getElementById("project1");
var project3Btn = document.getElementById("project3");
// Get the <span> element that closes the modal
var emailSpan = document.getElementsByClassName("emailClose")[0];
var resumeSpan = document.getElementsByClassName("resumeClose")[0];
var project1Span = document.getElementsByClassName("project1Close")[0];
var project3Span = document.getElementsByClassName("project3Close")[0];
// EMAIL
// When the user clicks the button, open the modal 
emailBtn.onclick = function() {
    emailModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
emailSpan.onclick = function() {
    emailModal.style.display = "none";
}
// RESUME
// When the user clicks the button, open the modal 
resumeBtn.onclick = function() {
    resumeModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
resumeSpan.onclick = function() {
    resumeModal.style.display = "none";
}
// BEAT
// When the user clicks the button, open the modal 
project1Btn.onclick = function() {
    beatModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
project1Span.onclick = function() {
    beatModal.style.display = "none";
}
// FOODIE
// When the user clicks the button, open the modal 
project3Btn.onclick = function() {
    foodieModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
project3Span.onclick = function() {
    foodieModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == emailModal) {
        emailModal.style.display = "none";
    }
    if (event.target == resumeModal) {
        resumeModal.style.display = "none";
    }
    if (event.target == beatModal) {
        beatModal.style.display = "none";
    }
    if (event.target == foodieModal) {
        foodieModal.style.display = "none";
    }
}


