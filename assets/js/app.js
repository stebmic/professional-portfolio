const documents = [
  {
    title: "CV public — Steve Michaël Botame",
    category: "cv",
    description: "Synthèse professionnelle et parcours · coordonnées personnelles limitées",
    file: "documents/cv/cv-public.html",
    date: "2026",
    type: "HTML"
  },
  {
    title: "Leeloo Trading — Certificate of Achievement",
    category: "certification",
    description: "Fiche de consultation basée sur le certificat daté du 17 novembre 2022 · pas le scan original",
    file: "documents/certifications/leeloo-trading-2022.html",
    date: "2022",
    type: "HTML"
  }
];

const list = document.getElementById("documentList");
const count = document.getElementById("docCount");
const viewer = document.getElementById("documentViewer");
const frame = document.getElementById("pdfFrame");
const viewerTitle = document.getElementById("viewerTitle");
const openLink = document.getElementById("openDocument");
let activeFilter = "all";

function renderDocuments() {
  const filtered = documents.filter(doc => activeFilter === "all" || doc.category === activeFilter);
  count.textContent = filtered.length + (filtered.length > 1 ? " documents" : " document");
  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">Aucun document dans cette catégorie.</div>';
    return;
  }
  list.innerHTML = filtered.map((doc, index) =>
    '<article class="document-row"><div class="document-info"><span class="pdf-icon">' + escapeHtml(doc.type || "DOC") + '</span><div><h3>' +
    escapeHtml(doc.title) + '</h3><p>' + escapeHtml(doc.description || "Document consultable") +
    (doc.date ? " · " + escapeHtml(doc.date) : "") + '</p></div></div><div class="doc-actions"><button type="button" data-preview="' +
    index + '">Consulter ↗</button><a href="' + encodeURI(doc.file) + '" target="_blank" rel="noopener">Ouvrir ↓</a></div></article>'
  ).join("");
  list.querySelectorAll("[data-preview]").forEach(button => button.addEventListener("click", () => {
    showDocument(filtered[Number(button.dataset.preview)]);
  }));
}
function showDocument(doc) {
  viewer.hidden = false;
  viewerTitle.textContent = doc.title;
  frame.src = encodeURI(doc.file);
  openLink.href = encodeURI(doc.file);
  viewer.scrollIntoView({ behavior: "smooth", block: "start" });
}
function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderDocuments();
}));
document.getElementById("closeViewer").addEventListener("click", () => {
  viewer.hidden = true;
  frame.src = "about:blank";
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderDocuments();
