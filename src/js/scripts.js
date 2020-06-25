jQuery.validator.addMethod("checkMask", function (value, element) {
    return /\+\d{2}\(\d{3}\)\d{3}-\d{4}/g.test(value);
});

$('form').validate({
    rules: {
        user_phone: {
            checkMask: true
        }
    },
    messages: {
        user_phone: {
            checkMask: "Введите полный номер телефона"
        }
    }
});
$('.contact__form-input--phone').mask("+38(999)999-9999", { autoclear: false });


$(document).ready(function () {

    $("#ajax_form").submit(function () {
        $.ajax({
            type: "POST",
            url: "./form/telegram.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#ajax_form").trigger("reset");
        });
        return false;
    });

});
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        centerMode: true,
        asNavFor: '.slider-nav',
        responsive: [
          {
            breakpoint: 767, 
            settings: {
              arrows: true          
            }
          }
        ],
        mobileFirst: true,
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider',
        centerMode: true,
        focusOnSelect: true,        
        responsive: [
          {
            breakpoint: 767, 
            settings: {
              slidesToShow: 7,
              arrows: false
            }
          }
        ],
        mobileFirst: true,
    });
    });
    $(window).on("resize", function() {
      $(".slider-nav").slick("resize")
    })
$(document).ready(function () {
      $(".button__read-more").click(function () {
          $(this).prev().toggle();
      });
});