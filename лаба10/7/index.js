$(document).ready(function () {
    $(".square").mousedown(function (event) {
        var square = $(this);
        var offset = square.offset();
        var x = event.pageX - offset.left;
        var y = event.pageY - offset.top;

        $(document).mousemove(function (event) {
            var newX = event.pageX - x;
            var newY = event.pageY - y;

            var container = $(".container");
            var containerWidth = container.width() - square.width();
            var containerHeight = container.height() - square.height();

            // Обмеження руху в межах контейнера
            newX = Math.min(Math.max(newX, 0), containerWidth);
            newY = Math.min(Math.max(newY, 0), containerHeight);

            square.css({
                left: newX + "px",
                top: newY + "px"
            });
        });

        $(document).mouseup(function () {
            $(document).off("mousemove");
            $(document).off("mouseup");
        });
    });
});