var sectionHeight = function () {
    var total = $(window).height(),
        $section = $("section").css("height", "auto");

    if ($section.outerHeight(true) < total) {
        var margin = $section.outerHeight(true) - $section.height();
        $section.height(total - margin - 20);
    } else {
        $section.css("height", "auto");
    }
};

$(window).resize(sectionHeight);

const LI_SIDEBAR = `<li class='sidebar-guide py-1'>
    <a class="pl-4 pr-2 py-2 f6 text-uppercase d-block flex-auto mr-3"/>
</li>`;
$(function () {
    $("section h1, section h2, section h3").each(function () {
        let $title = $(LI_SIDEBAR);
        $title
            .find("a")
            .attr(
                "href",
                "#" +
                    $(this)
                        .text()
                        .toLowerCase()
                        .replace(/ /g, "-")
                        .replace(/[^\w-]+/g, "")
            )
            .text($(this).text());

        $(".sidebar-products").append($title);
        $(this).attr(
            "id",
            $(this)
                .text()
                .toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "")
        );
    });

    $(".sidebar-products li").on("click", "a", function (event) {
        var position = $($(this).attr("href")).offset().top - 190;
        $("#content-wrapper").animate({ scrollTop: position }, 400);
        $(".sidebar-products li a").parent().removeClass("active");
        $(this).parent().addClass("active");
        // event.preventDefault();
    });

    sectionHeight();

    $("img").on("load", sectionHeight);
});
