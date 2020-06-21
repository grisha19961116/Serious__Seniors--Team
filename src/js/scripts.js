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