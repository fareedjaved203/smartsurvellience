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

