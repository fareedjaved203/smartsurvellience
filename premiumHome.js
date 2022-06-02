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

