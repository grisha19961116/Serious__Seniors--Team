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