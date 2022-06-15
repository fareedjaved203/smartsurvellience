const btn1 = document.getElementById('btn1');//div id

const btn2 = document.getElementById('btn2');//button id

btn1.addEventListener('click', function handleClick() {
    debugger;
    if (btn1.style.display === 'none') {
        btn1.style.display = 'block';

        btn2.style.display = 'none';
    }
    else {
        btn1.style.display = 'none';
        btn2.style.display = 'block';
    }
});

btn2.addEventListener('click', function handleClick() {
    debugger;
    if (btn2.style.display === 'none') {
        btn2.style.display = 'block';
        btn1.style.display = 'none';
    }
    else {
        btn2.style.display = 'none';
        btn1.style.display = 'block';
    }
});

function openSideMenu() {
    document.getElementById('side-menu').style.width = '150px';
    document.getElementById('main').style.marginLeft = '150px';
}
function closeSideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
}

$(document).ready(function () {
    $(".user").click(function () {
        $(".logout-btn").slideToggle();
    });
});

$(document).ready(function () {
    $(".pact").hover(function () {
        $(".pact-h").toggle();
    });
});

$(document).ready(function () {
    $(".feedback").hover(function () {
        $(".feedback-h").toggle();
    });
});

let flag1 = "True";
window.localStorage.setItem("flag", "False");
flag1 = localStorage.getItem("flag");
let element = document.getElementById("mydiv");
if (flag1 == "False") {
    setTimeout(function () {
        $('#mydiv').fadeOut('fast');
    }, 10000);
    // window.localStorage.removeItem("flag");
    // window.localStorage.setItem("flag", "True");
    // flag1 = localStorage.getItem("flag");
    // console.log(localStorage);

}

else if (flag1 == "True") {
    element.style.display = "none";
    window.localStorage.removeItem("flag");
    window.localStorage.setItem("flag", "True");
    flag1 = localStorage.getItem("flag");

}
const startVideo = document.getElementById('videocc');

var video = document.getElementById('video')
var canvas = document.getElementById('canvas')
var context = canvas.getContext('2d');

var bottomm = document.getElementById('bottomm');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, streamWebCam, throwError);
}
function streamWebCam(stream) {
    video.srcObject = stream;
    video.play();
}
function throwError(e) {
    alert(e.name);
}

