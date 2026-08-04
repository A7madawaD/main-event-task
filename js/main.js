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
const books = [
  // Romantic
  { name: "احبك اكثر", page: "romantic.html" },
  { name: "اصابك عشق", page: "romantic.html" },
  { name: "الاسود يليق بك", page: "romantic.html" },
  { name: "اين الملتقي", page: "romantic.html" },
  { name: "غربة الياسمين", page: "romantic.html" },
  { name: "فلتغفري", page: "romantic.html" },
  { name: "في بيتنا رجل", page: "romantic.html" },
  { name: "في قلبي انثى عبرية", page: "romantic.html" },
  { name: "لن اسالك", page: "romantic.html" },
  { name: "ماجدولين", page: "romantic.html" },
  { name: "مالا نبوح به", page: "romantic.html" },
  { name: "هيبتا", page: "romantic.html" },

  // Drama
  { name: "ارني انظر اليك", page: "drama.html" },
  { name: "اغتصاب ولكن تحت سقف واحد", page: "drama.html" },
  { name: "اكتشفت زوجي في الاتوبيس", page: "drama.html" },
  { name: "انت لي", page: "drama.html" },
  { name: "ايماجوا", page: "drama.html" },
  { name: "اين المفر", page: "drama.html" },
  { name: "قلب الطاووس", page: "drama.html" },
  { name: "كرسماس في مكة", page: "drama.html" },
  { name: "مع وقف التنفيذ", page: "drama.html" },
  { name: "وقالت لي", page: "drama.html" },

  // Crime
  { name: "005", page: "crime.html" },
  { name: "3110", page: "crime.html" },
  { name: "اكتب حتى لا ياكلني الشيطان", page: "crime.html" },
  { name: "اكتب حتى لا اصاب بالجنون", page: "crime.html" },
  { name: "الفيل الازرق", page: "crime.html" },
  { name: "تراب الماس", page: "crime.html" },
  { name: "دليل جديتي لقتل الاوغاد", page: "crime.html" },
  { name: "خطايا ادم", page: "crime.html" },
  { name: "صديقي السيكوباتي", page: "crime.html" },
  { name: "قضية ذيل القط", page: "crime.html" },
  { name: "قضية ست الحسن", page: "crime.html" },
  { name: "قضية عنب الثعلب", page: "crime.html" },
  { name: "قضية لوز مر", page: "crime.html" },
  { name: "مخالب القط", page: "crime.html" },
];
// ==========================================
// 1. مصفوفة جميع الكتب (تأكد من اسم صفحة الفانتازيا الصحيحة)
// ==========================================
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

// دالة لتنظيف النصوص العربية من الهمزات والتشكيل لضمان نجاح البحث
function normalizeText(text) {
  if (!text) return "";
  return text
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا") // توحيد الهمزات
    .replace(/ة/g, "ه") // توحيد التاء المربوطة
    .replace(/ـ/g, ""); // إزالة التطويل
}

function highlightCard(query) {
  // 1. التعديل المهم: استخدام كلاس يطابق أجزاء Bootstrap مثل col-12
  const cards = document.querySelectorAll('[class*="col-"]');
  let found = false;

  const cleanQuery = normalizeText(query);

  cards.forEach((card) => {
    // التأكد أن العنصر المُستهدف هو فعلاً كارت كتاب يحتوي على class book
    if (!card.querySelector(".book")) return;

    card.classList.remove("highlight");
    const title = card.querySelector("h5");

    const cleanTitle = title ? normalizeText(title.textContent) : "";
    const cleanCardId = card.id
      ? normalizeText(card.id.replace(/-/g, " "))
      : "";

    // 2. المطابقة
    if (
      (cleanTitle && cleanTitle.includes(cleanQuery)) ||
      (cleanCardId && cleanCardId.includes(cleanQuery))
    ) {
      found = true;
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("highlight");
    }
  });

  return found;
}

if (searchForm) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = searchInput.value.trim();
    if (!value) return;

    const foundInCurrentPage = highlightCard(value);

    if (!foundInCurrentPage) {
      // 3. البحث في المصفوفة العامة للكتب في حال وجود صفحات متعددة
      const cleanValue = normalizeText(value);
      const matchedBook = books.find((book) =>
        normalizeText(book.name).includes(cleanValue),
      );

      if (matchedBook) {
        const bookId = matchedBook.name.replace(/\s+/g, "-");
        window.location.href = `${matchedBook.page}#${encodeURIComponent(bookId)}`;
      } else {
        alert("الرواية غير موجودة");
      }
    }
  });
}

// التمرير التلقائي للرواية عند التحويل من صفحة أخرى
window.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash) {
    const targetBookId = decodeURIComponent(window.location.hash.substring(1));
    highlightCard(targetBookId.replace(/-/g, " "));
  }
});
