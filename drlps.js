function show_hide_menu(screen_width) {
  if (screen_width <= 768) {
    $("#menu").hide();
  } else {
    $("#menu").show();
  }
}

$(window).resize(function () {
  show_hide_menu($(window).width());
});


$("#menu-btn").click(function () {
  $("#menu").toggle();
});
