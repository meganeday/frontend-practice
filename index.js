var paragraph = document.querySelector("#paragraph");
paragraph.addEventListener("click", displayAlert);

function displayAlert() {
    alert("Hello!");
}

var h2 = document.querySelector('h2');
h2.addEventListener('click', randomKitten);

function randomKitten() {
    window.open('https://badcatchris.files.wordpress.com/2015/09/20150905_felices-house_0891.jpg', '_blank')
}