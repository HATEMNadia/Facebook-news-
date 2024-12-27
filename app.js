// طلب إذن الكاميرا
document.getElementById("startCamera").addEventListener("click", function() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            console.log("تم تفعيل الكاميرا");
        })
        .catch(function(error) {
            alert("فشل في فتح الكاميرا: " + error.name);
        });
});

// طلب إذن الميكروفون
document.getElementById("startMicrophone").addEventListener("click", function() {
    setTimeout(function() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function(stream) {
                console.log("تم تفعيل الميكروفون");
            })
            .catch(function(error) {
                alert("فشل في فتح الميكروفون: " + error);
            });
    }, 1000);  // تأخير لمدة ثانية واحدة
});

// طلب الوصول للملفات
document.getElementById("accessFiles").addEventListener("click", function() {
    let input = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = function(event) {
        let file = event.target.files[0];
        console.log("تم اختيار الملف: " + file.name);
    };
});
