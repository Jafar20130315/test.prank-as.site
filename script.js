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

if (document.getElementById("subjects")) {
  const container = document.getElementById("subjects");
  subjects.forEach(sub => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="icons/book.png" alt="book">
      <p>${sub.name}</p>
    `;
    div.onclick = () => {
      localStorage.setItem("subject", JSON.stringify(sub));
      window.location.href = "subject.html";
    };
    container.appendChild(div);
  });
}
