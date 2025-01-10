document.addEventListener("DOMContentLoaded", function () {
    // Password Validation
    var pwdInput = document.getElementById("pwd");
    var confirmPwdInput = document.getElementById("confirm-password");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
  var samePwd = document.getElementById("samePwd");

    pwdInput.addEventListener("keyup", function () {
        // Validate lowercase letters
        var lowerCaseLetters = /[a-z]/g;
        if (pwdInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }

        // Validate capital letters
        var upperCaseLetters = /[A-Z]/g;
        if (pwdInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
        } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
        }

        // Validate numbers
        var numbers = /[0-9]/g;
        if (pwdInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
        }

        // Validate length
        if (pwdInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
        }
      
       checkPasswordMatch();
    });
  
  
  
  confirmPwdInput.addEventListener("keyup", function () {
  checkPasswordMatch();
});
  
  function checkPasswordMatch() {
  if (pwdInput.value === confirmPwdInput.value) {
    samePwd.classList.remove("invalid");
    samePwd.classList.add("valid");
  } else {
    samePwd.classList.remove("valid");
    samePwd.classList.add("invalid");
  }
}
  

    // jQuery for Toggle Password Visibility
    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
});
