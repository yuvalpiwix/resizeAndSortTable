$(document).ready(function () {
    resize()

    $("table tr").sortable(
        {
            stop: function (event,ui) {
                $(".JCLRgrips").remove();
                $(".JColResizer").attr("id","")
                $(".JColResizer").removeClass("JColResizer");
                resize()
              }
        }
    )
});

function resize() {
    $("table").colResizable({
        liveDrag: true,
    });
}