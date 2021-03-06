var nav_tab_index = 0;
$(document).ready(function () {
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_gestures").hide();
    $("#btn_dialer").css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_test_gestures").css("background", "#E6E6E6");
    nav_tab_index = 0;
});

$("#btn_dialer").click(function () {
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_gestures").hide();
    $(this).css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_test_gestures").css("background", "#E6E6E6");
    nav_tab_index = 0;
});

$("#btn_contact_list").click(function () {
    $("#content_dialer").hide();
    $("#content_list").show();
    $("#content_add").hide();
    $("#content_gestures").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_test_gestures").css("background", "#E6E6E6");
    nav_tab_index = 1;
});

$("#btn_contact_add").click(function () {
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").show();
    $("#content_gestures").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_test_gestures").css("background", "#E6E6E6");
    nav_tab_index = 2;
});

$("#btn_test_gestures").click(function () {
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_gestures").show();
    $("#btn_dialer").css("background", "#E6E6E6");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $(this).css("background", "white");
    nav_tab_index = 3;
});

$("#btn-1").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '1';
    $("#dial-number").val(dialNumber);
});
$("#btn-2").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '2';
    $("#dial-number").val(dialNumber);
});
$("#btn-3").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '3';
    $("#dial-number").val(dialNumber);
});
$("#btn-4").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '4';
    $("#dial-number").val(dialNumber);
});
$("#btn-5").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '5';
    $("#dial-number").val(dialNumber);
});
$("#btn-6").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '6';
    $("#dial-number").val(dialNumber);
});
$("#btn-7").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '7';
    $("#dial-number").val(dialNumber);
});
$("#btn-8").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '8';
    $("#dial-number").val(dialNumber);
});
$("#btn-9").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '9';
    $("#dial-number").val(dialNumber);
});
$("#btn-0").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '0';
    $("#dial-number").val(dialNumber);
});
$("#btn-astr").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '*';
    $("#dial-number").val(dialNumber);
});
$("#btn-hash").click(function () {
    let dialNumber = $("#dial-number").val();
    dialNumber += '#';
    $("#dial-number").val(dialNumber);
});

$("#btn-clear-dial").click(function () {
    $("#dial-number").val("");
});

$("#btn-clear-contact").click(function () {
    $("#frm-name").val("");
    $("#frm-phone").val("");
    $("#frm-email").val("");
});

$("#frm-dial").on("submit", function (event) {
    event.preventDefault()
});
$("#frm-contact-add").on("submit", function (event) {
    event.preventDefault()
});

var downX;
var downY;

$("#gesture_area").mousedown(function (e) {
    $("#gesture_output").text("mouse down");
    downX = e.pageX;
    downY = e.pageY;
});

$("#gesture_area").mouseup(function (e) {
    let output;
    if (downX > e.pageX) {
        output = "swipe left";
    } else if (downX < e.pageX) {
        output = "swipe right";
    } else {
        output = "mouse up";
    }

    if (downY > e.pageY) {
        output += " and swipe up";
    } else if (downY < e.pageY) {
        output += " and swipe down";
    }
    $("#gesture_output").text(output);
});



function activateTab() {
    switch (nav_tab_index) {
        case 0:
            $("#btn_dialer").click();
            break;
        case 1:
            $("#btn_contact_list").click();
            break;
        case 2:
            $("#btn_contact_add").click();
            break;
        case 3:
            $("#btn_test_gestures").click();
            break;
        default:
            $("#btn_dialer").click();
            break;
    }
}

var navDownX;
var navDownY;
$("#swipe_nav").mousedown(function (e) {
    navDownX = e.pageX;
    navDownY = e.pageY;
});
$("#swipe_nav").mouseup(function (e) {
    if (navDownX > e.pageX) {
        if (nav_tab_index > 0) {
            nav_tab_index = nav_tab_index - 1;
        }
    } else if (navDownX < e.pageX) {
        if (nav_tab_index < 3) {
            nav_tab_index = (nav_tab_index + 1);
        }
    }
    activateTab();
});

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: //left arrow
            if (nav_tab_index > 0) {
                nav_tab_index = nav_tab_index - 1;
            }
            break;
        case 39: //right arrow
            if (nav_tab_index < 3) {
                nav_tab_index = (nav_tab_index + 1);
            }
            break;
        default:
            break;
    }
    activateTab();
});