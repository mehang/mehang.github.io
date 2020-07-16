$(document).ready(function() {
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_gestures").hide();
    $("#btn_dialer").css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_test_gestures").css("background", "#E6E6E6");
});

$("#btn_dialer").click(function(){
    $("#content_dialer").show();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_gestures").hide();
    $(this).css("background", "white");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_test_gestures").css("background", "#E6E6E6");
});

$("#btn_contact_list").click(function(){
    $("#content_dialer").hide();
    $("#content_list").show();
    $("#content_add").hide();
    $("#content_gestures").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $("#btn_test_gestures").css("background", "#E6E6E6");
});

$("#btn_contact_add").click(function(){
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").show();
    $("#content_gestures").hide();
    $("#btn_dialer").css("background", "#E6E6E6");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $(this).css("background", "white");
    $("#btn_test_gestures").css("background", "#E6E6E6");
});

$("#btn_test_gestures").click(function(){
    $("#content_dialer").hide();
    $("#content_list").hide();
    $("#content_add").hide();
    $("#content_gestures").show();
    $("#btn_dialer").css("background", "#E6E6E6");
    $("#btn_contact_list").css("background", "#E6E6E6");
    $("#btn_contact_add").css("background", "#E6E6E6");
    $(this).css("background", "white");
});

$("#btn-1").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '1';
    $("#dial-number").val(dialNumber);
});
$("#btn-2").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '2';
    $("#dial-number").val(dialNumber);
});
$("#btn-3").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '3';
    $("#dial-number").val(dialNumber);
});
$("#btn-4").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '4';
    $("#dial-number").val(dialNumber);
});
$("#btn-5").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '5';
    $("#dial-number").val(dialNumber);
});
$("#btn-6").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '6';
    $("#dial-number").val(dialNumber);
});
$("#btn-7").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '7';
    $("#dial-number").val(dialNumber);
});
$("#btn-8").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '8';
    $("#dial-number").val(dialNumber);
});
$("#btn-9").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '9';
    $("#dial-number").val(dialNumber);
});
$("#btn-0").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '0';
    $("#dial-number").val(dialNumber);
});
$("#btn-astr").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '*';
    $("#dial-number").val(dialNumber);
});
$("#btn-hash").click(function(){
    let dialNumber = $("#dial-number").val();
    dialNumber += '#';
    $("#dial-number").val(dialNumber);
});

$("#btn-clear-dial").click(function(){
    $("#dial-number").val("");
});

$("#btn-clear-contact").click(function(){
    $("#frm-name").val("");
    $("#frm-phone").val("");
    $("#frm-email").val("");
});

$("#frm-dial").on("submit",function(event){event.preventDefault()});
$("#frm-contact-add").on("submit",function(event){event.preventDefault()});

var downX;
var downY;

$("#gesture_area").mousedown(function(e){
   $("#gesture_output").text("mouse down");
   console.log(e);
   downX = e.pageX;
   downY = e.pageY;
});

$("#gesture_area").mouseup(function(e){
    let output;
    if (downX > e.pageX) {
        output = "swipe left";
    } else if (downX < e.pageX) {
        output = "swipe right";
    } else if (downX == e.pageX) {
        output = "mouse up"
    }
    $("#gesture_output").text(output);
});