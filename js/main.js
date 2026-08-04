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
// ==========================================
// 1. مصفوفة جميع الكتب
// ==========================================
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

  // Horror
  { name: "IT", page: "horror.html" },
  { name: "ارض السافلين", page: "horror.html" },
  { name: "أرض السافلين", page: "horror.html" },
  { name: "خلف ستار الموت", page: "horror.html" },
  { name: "اسطوره النداهة", page: "horror.html" },
  { name: "أسطورة النداهة", page: "horror.html" },
  { name: "لوكانده بير الوطاويط", page: "horror.html" },
  { name: "لوكاندة بير الوطاويط", page: "horror.html" },
  { name: "ابتسم فانت ميت", page: "horror.html" },
  { name: "ابتسم فأنت ميت", page: "horror.html" },
  { name: "الناسخ", page: "horror.html" },
  { name: "انتيخريستوس", page: "horror.html" },

  // Fantasy
  { name: "أرض زيكولا", page: "fantasy.html" },
  { name: "ارض زيكولا", page: "fantasy.html" },
  { name: "جنة في بيت الدودو", page: "fantasy.html" },
  { name: "امارييتا", page: "fantasy.html" },
  { name: "اماريتيا", page: "fantasy.html" },
  { name: "كيارا", page: "fantasy.html" },
  { name: "توك توك الجحيم", page: "fantasy.html" },
  { name: "داو", page: "fantasy.html" },
  { name: "ظل النعيم", page: "fantasy.html" },

  // Self Development
  { name: "انت اقوي", page: "development.html" },
  { name: "أنت أقوى", page: "development.html" },
  { name: "احببت وغدا", page: "development.html" },
  { name: "أحببت وغداً", page: "development.html" },
  { name: "لعبه التعلم", page: "development.html" },
  { name: "لعبة التعلم", page: "development.html" },
  { name: "علاج الاحتراق الوظيفي", page: "development.html" },
  { name: "فن الكتابه", page: "development.html" },
  { name: "فن الكتابة", page: "development.html" },
  { name: "تنهيدة", page: "development.html" },
  { name: "تنهيده", page: "development.html" },
  { name: "انت مدين لنفسك", page: "development.html" },
  { name: "أنت مدين لنفسك", page: "development.html" },
  { name: "فن تفويت الفرص", page: "development.html" },
];

// ==========================================
// 2. دالة توحيد الحروف
// ==========================================
function normalizeText(text) {
  if (!text) return "";
  return text
    .trim()
    .toLowerCase()
    .replace(/[أإآ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ـ/g, "");
}

// ==========================================
// 3. دالة تحديد الكارت في الصفحة الحالية
// ==========================================
function highlightCard(query) {
  const cards = document.querySelectorAll('[class*="col-"]');
  let found = false;

  const cleanQuery = normalizeText(query);

  cards.forEach((card) => {
    if (!card.querySelector(".book")) return;

    card.classList.remove("highlight");
    const title = card.querySelector("h5");
    const cleanTitle = title ? normalizeText(title.textContent) : "";

    if (cleanTitle && cleanTitle.includes(cleanQuery)) {
      found = true;
      // التمرير السلس نحو الكارت المحظوظ
      card.scrollIntoView({ behavior: "smooth", block: "center" });
      card.classList.add("highlight");
    }
  });

  return found;
}

// ==========================================
// 4. دالة البحث والتوجيه
// ==========================================
function searchBook(searchTerm) {
  const cleanTerm = normalizeText(searchTerm);
  if (!cleanTerm) return;

  // أولاً: ابحث في الصفحة الحالية
  const foundInCurrent = highlightCard(cleanTerm);

  // ثانياً: إذا لم يجد الرواية في الصفحة الحالية، انتقل لصفحتها مع إرسال اسمها
  if (!foundInCurrent) {
    const foundBook = books.find((book) =>
      normalizeText(book.name).includes(cleanTerm),
    );

    if (foundBook) {
      // إرسال كلمة البحث في الرابط لكي تُقرأ في الصفحة القادمة
      window.location.href = `${foundBook.page}?search=${encodeURIComponent(searchTerm)}`;
    } else {
      alert("الرواية غير موجودة!");
    }
  }
}

// ==========================================
// 5. الأحداث عند التحميل وإرسال البحث
// ==========================================
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  if (searchForm) {
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault(); // 🛑 إيقاف السلوك الافتراضي لإعادة التوجيه إلى الصفحة الرئيسية

      if (searchInput && searchInput.value.trim() !== "") {
        searchBook(searchInput.value);
      }
    });
  }

  // قراءة كلمة البحث والتظليل عند الانتقال من صفحة لصفحة أخرى
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get("search");

  if (searchQuery) {
    highlightCard(searchQuery);
    if (searchInput) {
      searchInput.value = searchQuery;
    }
  }
});
