window.$ = window.jQuery = require("jquery");

$(function () {
  $(".main").css("color", "Red");
});

//form file
$(function () {
  $(".file").on("change", function () {
    let file = $(this).prop("files")[0];
    let label = $(this).next();
    if (!$(this).children(".filename").length) {
      $(this).parent(".form__file").append('<span class="filename"></span>');
      label.addClass("changed");
    }
    label.next().html(file.name);
  });
});
