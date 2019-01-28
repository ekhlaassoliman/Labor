$(document).ready(function(){
    
    /*navbar*/
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if (scroll > 50) {
            $("#navbar").addClass("backgroundnav");
            $(".changecolor").addClass("colorli");
          }

          else{
              $("#navbar").removeClass("backgroundnav");
              $(".changecolor").removeClass("colorli");
          }
      });
    
    /* Smoth scroll */
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
    });
    
    /* Sign Up & Login Buttons */
    $("#login").on("click", function (){
        $("#signUp_form").slideUp(1000);
        $("#login_form").slideDown(1000);
        $("#login").addClass("button_active");
        $("#signUp").removeClass("button_active");
    });
    $("#signUp").on("click", function (){
        $("#login_form").slideUp(1000);
        $("#signUp_form").slideDown(1000);
        $("#signUp").addClass("button_active");
        $("#login").removeClass("button_active");
    });
    
});