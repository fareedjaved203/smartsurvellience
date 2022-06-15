const btn1 = document.getElementById('btn1');//div id

const btn2 = document.getElementById('btn2');//button id

const stopBtn = document.getElementById('btn-stop');
const startBtn = document.getElementById('btn-start');

const carousell = document.getElementById('carouselExampleSlidesOnly');
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


startBtn.addEventListener('click', function handleClick() {
    if (stopBtn.style.display === 'none') {
        startBtn.style.display = 'none';
        carousell.style.display = 'none';
        bottomm.style.display = 'none';
        stopBtn.style.display = 'block';
        startVideo.style.display = 'block';

        console.log("great working");
    }
    else {
        stopBtn.style.display = 'none';
        startVideo.style.display = 'none';
        video.stop();
        startBtn.style.display = 'block';
        carousell.style.display = 'block';
        bottomm.style.display = 'block';

    }
})

stopBtn.addEventListener('click', function handleClick() {
    if (startBtn.style.display === 'none') {
        stopBtn.style.display = 'none';
        startVideo.style.display = 'none';
        startBtn.style.display = 'block';
        carousell.style.display = 'block';
        bottomm.style.display = 'block';


    }
    else {
        startBtn.style.display = 'none';
        carousell.style.display = 'none';
        bottomm.style.display = 'none';
        stopBtn.style.display = 'block';
        startVideo.style.display = 'block';
    }
})

btn1.addEventListener('click', function handleClick() {
    if (btn1.style.display === 'none') {
        btn1.style.display = 'block';
        btn2.style.display = 'none';
        startVideo.style.width = '100%';
        video.style.width = '55%';
        startVideo.style.marginLeft = '0%';
        startVideo.style.marginTop = '0%';
    }
    else {
        btn1.style.display = 'none';
        btn2.style.display = 'block';
        startVideo.style.width = '90%';
        video.style.width = '50%';
        startVideo.style.marginLeft = '5%';
        startVideo.style.marginTop = '3%';
        stopBtn.style.marginLeft = '25%';

    }
});

btn2.addEventListener('click', function handleClick() {
    if (btn2.style.display === 'none') {
        btn2.style.display = 'block';
        btn1.style.display = 'none';
        startVideo.style.width = '90%';
        video.style.width = '50%';
        startVideo.style.marginLeft = '5%';
        startVideo.style.marginTop = '3%';
    }
    else {
        btn2.style.display = 'none';
        btn1.style.display = 'block';
        startVideo.style.width = '100%';
        video.style.width = '55%';
        startVideo.style.marginLeft = '0%';
        startVideo.style.marginTop = '0%';
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

