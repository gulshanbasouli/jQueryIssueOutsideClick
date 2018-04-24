jQuery(document).ready(function() {
    $("#wbc-menu").click(function(e) {
        $("#wbc-menu-list").toggle();
        e.stopPropagation();
    });

    $(document).click(function(e) {
        if (!$(e.target).is('#wbc-menu-list, #wbc-menu-list *')) {
            $("#wbc-menu-list").hide();
        }
    });
});
