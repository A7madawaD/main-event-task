// زر "اقرأ الاقتباس"
document.querySelectorAll(".flip-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const book = this.closest(".book");
    book.querySelector(".book-inner").style.transform = "rotateY(180deg)";
  });
});

// زر "رجوع"
document.querySelectorAll(".back-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const book = this.closest(".book");
    book.querySelector(".book-inner").style.transform = "rotateY(0deg)";
  });
});
const scrollBtn = document.getElementById("scrollTopBtn");

// إظهار وإخفاء الزر
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// الرجوع لأعلى الصفحة
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//  اضغط زر
//       ↓
// addEventListener يلتقط الضغط
//       ↓
// this
// يعرف أي زر ضغطت عليه
//       ↓
// closest(".book")
// يصل للكارت الحالي
//       ↓
// querySelector(".book-inner")
// يصل للجزء الذي سيدور
//       ↓
// style.transform
// يغير قيمة transform
//       ↓
// rotateY(180deg)
// فيظهر ظهر الكارت
