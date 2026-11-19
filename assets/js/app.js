/* Ajoutez ici les documents destinés à être publics.
   Exemple :
   { title: "CV", category: "cv", description: "Curriculum vitae — version française",
     file: "documents/cv/cv-fr.pdf", date: "2026" }
*/
const documents = [];

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
    list.innerHTML = '<div class="empty-state"><span class="empty-icon">＋</span><h3>' +
      (documents.length ? "Aucun document dans cette catégorie." : "La bibliothèque est prête.") +
      '</h3><p>' + (documents.length ? "Choisissez une autre catégorie pour afficher les documents disponibles." :
      'Les documents apparaîtront ici dès qu\'ils auront été ajoutés au dossier <code>documents/</code> et enregistrés dans <code>assets/js/app.js</code>.') + '</p></div>';
    return;
  }
  list.innerHTML = filtered.map((doc, index) => {
    const safeTitle = escapeHtml(doc.title);
    const safeDescription = escapeHtml(doc.description || "Document consultable");
    const safeDate = escapeHtml(doc.date || "");
    return '<article class="document-row"><div class="document-info"><span class="pdf-icon">PDF</span><div><h3>' + safeTitle +
      '</h3><p>' + safeDescription + (safeDate ? " · " + safeDate : "") +
      '</p></div></div><div class="doc-actions"><button type="button" data-preview="' + index + '">Consulter ↗</button><a href="' +
      encodeURI(doc.file) + '" target="_blank" rel="noopener">Télécharger ↓</a></div></article>';
  }).join("");
  list.querySelectorAll("[data-preview]").forEach(button => button.addEventListener("click", () => {
    const doc = filtered[Number(button.dataset.preview)];
    showDocument(doc);
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
