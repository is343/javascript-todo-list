// cross off items by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("done");
});

//delete items by clicking trash icon
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

//create new item from text box
$("input[type='text']").keypress(function(keypress) {
    // grabbing text from form
    var todoText = $(this).val();
    // if Enter is pressed and text is input
    if (keypress.which === 13 && todoText != "") {
        // adding content to the end of the ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
        // clearing input
        $(this).val("");
    }
});

// animate plus icon to hide/show input
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});