$("#comment_post").click(function(){
    let name = $("#comment_name").val();
    let comment = $("#comment_content").val();
    if ((name==="") && (comment==="")){
        $("#message-body").text("Please provide name and comment!");
        $("#message-body").css("color", "red");
    } else if (name==="") {
        $("#message-body").text("Please provide name!");
        $("#message-body").css("color", "red");
    } else if (comment==="") {
        $("#message-body").text("Please provide comment!");
        $("#message-body").css("color", "red");
    } else {
        $("#message-body").text("Comment has been posted.");
        $("#message-body").css("color", "limegreen");
    }
    document.getElementById("message").className="";
});

$("#btn-message-close").click(function(){
    document.getElementById("message").className = "alert-message";
});

$("#frm_comment").on("submit",function(event){event.preventDefault()});