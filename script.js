// ================================
// הגדרות חבילות סטיקרים
// ================================
// כדי להוסיף/להסיר חבילות, משנים רק את המערך הזה.
// בכל חבילה:
// - preview: להחליף לתמונה האמיתית של החבילה
// - downloadUrl: להחליף ללינק ההורדה האמיתי (כרגע "#")
const stickerPacks = [
  {
    title: "חבילה 1",
    preview: "https://placehold.co/600x600/111827/e2e8f0?text=Pack+1",
    downloadUrl: "#",
  },
  {
    title: "חבילה 2",
    preview: "https://placehold.co/600x600/1f2937/e2e8f0?text=Pack+2",
    downloadUrl: "#",
  },
  {
    title: "חבילה 3",
    preview: "https://placehold.co/600x600/334155/e2e8f0?text=Pack+3",
    downloadUrl: "#",
  },
  {
    title: "חבילה 4",
    preview: "https://placehold.co/600x600/0f172a/e2e8f0?text=Pack+4",
    downloadUrl: "#",
  },
];

const packsGrid = document.querySelector("#packsGrid");

function createPackCard(pack) {
  const card = document.createElement("article");
  card.className = "pack-card";

  card.innerHTML = `
    <img class="pack-preview" src="${pack.preview}" alt="תצוגה מקדימה - ${pack.title}" loading="lazy" />
    <div class="pack-content">
      <h3 class="pack-title">${pack.title}</h3>
      <a class="download-button" href="${pack.downloadUrl}" aria-label="הורדה של ${pack.title}">
        הורדה
      </a>
    </div>
  `;

  return card;
}

function renderPacks() {
  const fragment = document.createDocumentFragment();

  stickerPacks.forEach((pack) => {
    fragment.appendChild(createPackCard(pack));
  });

  packsGrid.appendChild(fragment);
}

renderPacks();
