var img = document.getElementsByTagName('img'),
    fondo = document.querySelectorAll(".bgimg");

for (var i = 0; i < img.length; i++) {
    img[i].src = "https://i.ytimg.com/vi/wR-Y_AzNYy8/maxresdefault.jpg";
}

for (var i = 0; i < fondo.length; i++) {
    fondo[i].style.backgroundImage =
        "url('https://i.ytimg.com/vi/wR-Y_AzNYy8/maxresdefault.jpg')";
}

var x, i, l;
x = document.getElementsByTagName("*");
l = x.length;
console.log(l);
for (i = 0; i < l; i++) {
    console.log(x[i].tagName);

}

// (function() {
//     "use strict";
//     /* Start of your code */
//     function greetMe(yourName) {
//         alert('Hello ' + yourName);
//     }

//     greetMe('Carlos');
//     /* End of your code */
// })();