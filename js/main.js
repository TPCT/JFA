
$(document).ready(function () {
// Footer
$("#cssmenu").menumaker({
  title: "",
  format: "multitoggle",
});

$(this).find(".fa-plus").show();
$(this).find(".fa-minus").hide();

$(".toggleButton").click(function () {
 
     // Check if the window width is less than or equal to 991px
     if ($(window).width() <= 991) {
      // Toggle the visibility of the target element using classes
      $(this).closest("div").next("ul").toggleClass("show");
      // Toggle the icon based on the presence of the 'show' class
      if ($(this).closest(".footer-item").find("ul").hasClass("show")) {
        $(this).find(".fa-plus").hide();
        $(this).find(".fa-minus").show();
      } else {
        $(this).find(".fa-plus").show();
        $(this).find(".fa-minus").hide();
      }
    }
  });

  // Back to top
  $(".backtotop-box").click(function() {
    $('html, body').animate({scrollTop: 0}, 'fast');
  });
});

// Navbar
// $(".nav-link").click(function () {
//   $(".nav-link").removeClass("active");
//   $(this).addClass("active");
// });

// $('.search-icon').click(function() {
//   $('.nav-search').addClass('active');
//   $('.navbar-search-bar-container').addClass('active');
// });

// $('.close-icon').click(function() {
//   $('.nav-search').removeClass('active');
//   $('.navbar-search-bar-container').removeClass('active');
// });