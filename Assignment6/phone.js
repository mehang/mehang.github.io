var nav_tab_index = 0;
var contrast_mode = 0;

$(document).ready(function () {
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_about_this_project").hide();
    $("#btn_dialer").css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_about_this_project").css("background", "#E6E6E6");
    nav_tab_index = 0;
});

$("#btn_dialer").click(function () {
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_about_this_project").hide();
    $(this).css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_about_this_project").css("background", "#E6E6E6");
    nav_tab_index = 0;
});

$("#btn_contact_list").click(function () {
    $("#content_dialer").hide();
    $("#content_list").show();
    $("#content_add").hide();
    $("#content_about_this_project").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_about_this_project").css("background", "#E6E6E6");
    nav_tab_index = 1;
});

$("#btn_contact_add").click(function () {
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").show();
    $("#content_about_this_project").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_about_this_project").css("background", "#E6E6E6");
    nav_tab_index = 2;
});

$("#btn_about_this_project").click(function () {
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_about_this_project").show();
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
            $("#btn_about_this_project").click();
            break;
        default:
            $("#btn_dialer").click();
            break;
    }
}

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


$("#btn-increase-font").click(function () {
    let fontSize = parseInt($("#main_body").css("font-size"));
    fontSize = fontSize + 1 + "px";
    $("#main_body").css({'font-size': fontSize});

    fontSize = parseInt($(".dial-btn-div").css("font-size"));
    fontSize = fontSize + 1 + "px";
    $(".dial-btn-div").css({'font-size': fontSize});

    fontSize = parseInt($(".dial-func-btns").css("font-size"));
    fontSize = fontSize + 1 + "px";
    $(".dial-func-btns").css({'font-size': fontSize});
});

$("#btn-decrease-font").click(function () {
    let fontSize = parseInt($("#main_body").css("font-size"));
    fontSize = fontSize - 1 + "px";
    $("#main_body").css({'font-size': fontSize});

    fontSize = parseInt($(".dial-btn-div").css("font-size"));
    fontSize = fontSize - 1 + "px";
    $(".dial-btn-div").css({'font-size': fontSize});

    fontSize = parseInt($(".dial-func-btns").css("font-size"));
    fontSize = fontSize - 1 + "px";
    $(".dial-func-btns").css({'font-size': fontSize});
});

$("#btn-change-contrast").click(function () {
    if (contrast_mode == 0) {
        $("#main_body").addClass('inverted_main_body');
        $("#vision_control").addClass("inverted_button button");
        $(".tab-bar").addClass("inverted_button button");
        $(".dial-btn-div").addClass("inverted_button button");
        $("img").addClass('invert-img');
        $(".contact-input").addClass('inverted input');
        $("#frm-dial").addClass('inverted input');
        $(".tab-bar").addClass('inverted-tab-bar');
        $("#btn-add-contact").addClass('inverted-success-btn');
        contrast_mode = 1;
    } else {
        $("#main_body").removeClass('inverted_main_body');
        $("#vision_control").removeClass("inverted_button button");
        $(".tab-bar").removeClass("inverted_button button");
        $(".dial-btn-div").removeClass("inverted_button button");
        $("img").removeClass('invert-img');
        $(".contact-input").removeClass('inverted input');
        $("#frm-dial").removeClass('inverted input');
        $(".tab-bar").removeClass('inverted-tab-bar');
        $("#btn-add-contact").addClass('inverted-success-btn');
        contrast_mode = 0;
    }
});

