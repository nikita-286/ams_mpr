document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.querySelector('#email');
    var passwordInput = document.querySelector('#password');
    var studentImg = document.querySelector('#student-img');
    var leftArm = document.querySelector('#left-arm');
    var rightArm = document.querySelector('#right-arm');

    function updateImageBasedOnInput() {
        var emailValue = emailInput.value;
        var cursorPosition = emailInput.selectionStart;

        // Determine whether eyes should look left or right
        if (emailValue.length > 0) {
            var isLookingLeft = cursorPosition < emailValue.length / 2;

            if (isLookingLeft) {
                studentImg.src = 'images/eyes-left.png';
            } else {
                studentImg.src = 'images/eyes-right.png';
            }
        } else {
            studentImg.src = 'images/neutral.png';
        }
    }

    function coverEyes() {
        studentImg.src = 'images/neutral.png'; // Ensure eyes are neutral initially
        leftArm.style.display = 'block';
        rightArm.style.display = 'block';
    
        // Adjust arms to cover eyes and align them equally
        leftArm.style.transform = 'translateX(50px) translateY(20px)'; // Move left arm to cover eyes and lower it
        rightArm.style.transform = 'translateX(10px) translateY(29px)'; // Move right arm to cover eyes and lower it
    }
    
    function uncoverEyes() {
        leftArm.style.transform = 'translateX(-123px) translateY(0px)'; // Move left arm back out of view and reset Y position
        rightArm.style.transform = 'translateX(137px) translateY(0px)'; // Move right arm back out of view and reset Y position
        setTimeout(() => {
            leftArm.style.display = 'none';
            rightArm.style.display = 'none';
        }, 500); // Hide after animation
    }
    
    emailInput.addEventListener('input', updateImageBasedOnInput);

    // Detect if backspace is pressed
    emailInput.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace' && emailInput.value.length > 0) {
            studentImg.src = 'images/eyes-left.png';
        }
    });
    

    emailInput.addEventListener('keyup', function(event) {
        if (event.key !== 'Backspace') {
            updateImageBasedOnInput();
        }
    });

    passwordInput.addEventListener('focus', coverEyes);
    passwordInput.addEventListener('blur', uncoverEyes);
});



document.addEventListener('DOMContentLoaded', function () {
    var emailInput = document.querySelector('#email');
    var studentImg = document.querySelector('#student-img');

    function updateImageBasedOnInput() {
        var emailValue = emailInput.value;
        var cursorPosition = emailInput.selectionStart;

        // Determine whether eyes should look left or right
        if (emailValue.length > 0) {
            var isLookingLeft = cursorPosition < emailValue.length / 2;

            if (isLookingLeft) {
                studentImg.src = 'images/eyes-left.png';
            } else {
                studentImg.src = 'images/eyes-right.png';
            }
        } else {
            studentImg.src = 'images/neutral.png';
        }
    }

    emailInput.addEventListener('input', updateImageBasedOnInput);

    // Track the input length to handle backspace
    emailInput.addEventListener('keydown', function(event) {
        if (event.key === 'Backspace') {
            // Only update to eyes-left if there is input
            if (emailInput.value.length > 0) {
                setTimeout(() => {
                    studentImg.src = 'images/eyes-left.png';
                }, 0); // Set a timeout to ensure it updates after the character is removed
            }
        }
    });

    emailInput.addEventListener('keyup', function(event) {
        if (event.key !== 'Backspace') {
            updateImageBasedOnInput();
        }
    });
});
