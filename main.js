function validateForm(event) {
    event.preventDefault();

    let errors = [];

    // التحقق من اسم المستخدم
    let name = document.getElementById('name').value;
    if (name === "") {
        errors.push("Name is required.");
    }

    // التحقق من البريد الإلكتروني
    let email = document.getElementById('email').value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errors.push("Email is not valid.");
    }

    // التحقق من كلمة المرور
    let password = document.getElementById('password').value;
    if (password.length < 8) {
        errors.push("Password must be 8 chars at least.");
    }

    // التحقق من اختيار الجنس
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        errors.push("Please select your gender.");
    }

    // التحقق من اختيار الرياضات
    let sports = document.querySelectorAll('input[name="sports"]:checked');
    if (sports.length < 2) {
        errors.push("Please select at least two sports.");
    }

    // التحقق من اختيار الدولة
    let country = document.getElementById('country').value;
    if (country === "") {
        errors.push("Please select your country.");
    }

    // عرض رسائل الخطأ
    let errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = "";
    if (errors.length > 0) {
        errors.forEach(function (error) {
            let p = document.createElement('p');
            p.textContent = error;
            errorMessages.appendChild(p);
        });
    } else {
        alert("Form submitted successfully!");
        document.getElementById('validatorForm').reset();
    }
}
