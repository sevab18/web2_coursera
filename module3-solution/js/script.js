(function ($) {
  if (!$) {
    return;
  }

  $("#nav-list a").on("click", function () {
    if ($(".navbar-toggle").is(":visible")) {
      $("#collapsable-nav").collapse("hide");
    }
  });
})(window.jQuery);
