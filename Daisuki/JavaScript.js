document.getElementById("clickMe").onclick = doFunction;
document.getElementById("reveal").onclick = revealContent;

var posts = "";

function doFunction() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://jsonplaceholder.typicode.com/posts/1', false);
    request.send();
    var json = JSON.parse(request.responseText);
    document.querySelector(".notice").textContent = json.title;
};

function itFunction() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://jsonplaceholder.typicode.com/posts', false);
    request.send();
    posts = JSON.parse(request.responseText);
};

itFunction();

function revealContent() {
    document.querySelector(".memes").classList.toggle("memes-open");
};

var para = document.querySelectorAll("p");

for (var i = 0; 1 < para.length; i++) {
    para[i].textContent = posts[i].title;
};