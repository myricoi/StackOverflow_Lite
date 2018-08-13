function goToComments() {
	window.location.assign("comments.html");
}

function goToAnswers() {
	window.location.assign("answers.html");
}

function signUp() {
	window.location.assign("index.html");
}
function logIn() {
	window.location.assign("profile.html");
}

function mobileMenu() {
    var x = document.getElementById("mobileLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

 