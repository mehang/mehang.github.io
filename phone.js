$(document).ready(function() {
$("#content_dialer").show();
$("#content_list").hide();
$("#content_add").hide();
$("#btn_dialer").css("background", "white");
});

$("#btn_dialer").click(function(){
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $(this).css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
});
$("#btn_contact_list").click(function(){
    $("#content_dialer").hide();
    $("#content_list").show();
    $("#content_add").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_contact_add").css("background", "#E6E6E6");
});
$("#btn_contact_add").click(function(){
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").show();
    $("#btn_dialer").css("background", "#E6E6E6");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $(this).css("background", "white");
});