// Fanlar ro‘yxati
const subjects = [
  { name: "Математика", id: "math" },
  { name: "Русский язык", id: "russian" },
  { name: "Литература", id: "literature" },
  { name: "Узбекский язык", id: "uzbek" },
  { name: "Физика", id: "physics" },
  { name: "Химия", id: "chemistry" },
  { name: "Биология", id: "biology" },
  { name: "География", id: "geography" },
  { name: "История", id: "history" },
  { name: "Информатика", id: "informatics" },
  { name: "Английский язык", id: "english" },
  { name: "Музыка", id: "music" },
  { name: "Изобразительное искусство", id: "art" },
  { name: "Технология", id: "tech" },
  { name: "Физическая культура", id: "pe" },
  { name: "Другие предметы...", id: "other" }
];

// Sahifaga qarab funksiyalar
if (document.getElementById("subjects")) {
  // Asosiy sahifa
  const container = document.getElementById("subjects");
  subjects.forEach(sub => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="icons/${sub.id}.png" alt="${sub.name}">
      <p>${sub.name}</p>
    `;
    div.onclick = () => {
      localStorage.setItem("subject", JSON.stringify(sub));
      window.location.href = "subject.html";
    };
    container.appendChild(div);
  });
}

if (document.getElementById("classes")) {
  // Fanni tanlagandan keyin sinf tanlash
  const subject = JSON.parse(localStorage.getItem("subject"));
  document.getElementById("subjectName").textContent = subject.name;

  const container = document.getElementById("classes");
  for (let i = 5; i <= 11; i++) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<p>${i} класс</p>`;
    div.onclick = () => {
      localStorage.setItem("class", i);
      window.location.href = "class.html";
    };
    container.appendChild(div);
  }
}

if (document.getElementById("title")) {
  // Yakuniy sahifa (test yuklab olish)
  const subject = JSON.parse(localStorage.getItem("subject"));
  const cls = localStorage.getItem("class");
  document.getElementById("title").textContent = `${subject.name} — ${cls} класс`;

  document.querySelector(".download-btn").onclick = () => {
    alert("Скоро будет добавлена ссылка на doc-файл 😉");
  };
}
