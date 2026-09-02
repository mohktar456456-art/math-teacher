// ========================================
// تشغيل الموقع بعد تحميل الصفحة
// ========================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("موقع أبو حمزة يعمل بنجاح ✅");

  // ========================================
  // روابط القائمة
  // ========================================

  const navLinks = document.querySelectorAll(".nav a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("تم الضغط على:", link.textContent);
    });
  });

  // ========================================
  // أزرار واتساب
  // ========================================

  const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

  whatsappButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("فتح واتساب 📱");
    });
  });
});
