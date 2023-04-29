// Can also be used with $(document).ready()
$(window).on("load", function() {
    $('.flexslider').flexslider({
      animation: "slide",
      controlsContainer: $(".custom-controls-container"),
      customDirectionNav: $(".custom-navigation a")
    });
  });