$(function () {
  $("#sidebar-open").on("click", function () {
    $(".sidebar, .overlay").addClass("active");
  });

  $("#sidebar-close, .overlay").on("click", function () {
    $(".sidebar, .overlay").removeClass("active");
  });

  $(".cart-btn").on("click", function () {
    $(".cart-panel, .overlay").addClass("active");
  });

  $("#cart-panel-close, .overlay").on("click", function () {
    $(".cart-panel, .overlay").removeClass("active");
  });

  $("body, .sidebar-content, .cart-panel-content").overlayScrollbars({
    scrollbars: {
      visibility: "auto",
      autoHide: "s",
      autoHideDelay: 800,
      dragScrolling: true,
      clickScrolling: false,
      touchSupport: true,
      snapHandle: false,
    },
  });
});
