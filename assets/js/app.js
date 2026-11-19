// Les liens Coursera ci-dessous proviennent des courriels de délivrance de certificats
// retrouvés dans Gmail. Ils ouvrent les pages officielles de certificat.
const documents = [
  {title:"Generative AI: Introduction and Applications",category:"ai-data",description:"IBM · Coursera",date:"3 mars 2026",url:"https://eventing.coursera.org/redirect/R59tItIZSBXWSNMxsOFPr-Q2mGzfRZvXBpx506W9vlns6bSdFOsTM_z_ptfaakj4HOet4Xyyc4Qq0Ap-PqmH_Q.SSDC05TAiriKixWDh8PiIA.3hnnlbx9cvX193aFc1shTxQzbpX3Hos8Xkrg0zcl2cYCkd0MFImAyv23ZFeCJl4IHy4gYDFtK1P48TrPvv3R98b7sXMVv67P7AR7ZeP0wkkSExk9mkL-rDao70SFMMBMDop-cWeD4avI13lLVPKFQMwPXN8fcy2dPZ2aXIBiZeQNR4YgPImaZWuaz9Z8ceW1DwNZRaR8zSJjn75gaHiHbQCqeI2Rp350TKDkYX-5a2BU9TnnUEe3VhGykNwM1yEabFOI6b1EZ-6WcagnJPgSykGC-rl0I55XAWoY_-b5IQzBO7r_5fDZUZUqwZHEwF1HllIe5uK2vJlMUHWGFJOdaq7vjU92HePoIPvmVeVL51lQCiZiiH0LpiSeQK3q2oa5S-BMJHj5-4j1Y7eR75Cs6uwiX_Jmfjsq-fE4JdNQQGJfoWLWTAv4prxM5eDH9rf7m_n9uvEBy00ZoSE0PVEBvkwH7g8lo_nTc1VvIU2zqFUxq1Bnv8_mPhCxu0Y0tlhj"},
  {title:"Generative AI: Prompt Engineering Basics",category:"ai-data",description:"IBM · Coursera",date:"20 mai 2026",url:"https://eventing.coursera.org/redirect/mdDDHho21MvHJBy12RuBQqkh6TeYzqkNJ7Hf1DWZyHkzhRzbQK0OZjAc21ZbIcwi7bh9XHa-c6OeXf4wGJnQlA.KIs2sWst-f7P-PhhlCy6gQ.M9VwfrxBA_XKJenTXxl-XWPmWH18HW85c9oU6rQhH29YV3ZDwsBMTcGsdD6d_fazr-gcM-RuCAv69FJqMFZPLyu9TCOjJDwn2LCaNHEtacI2z5JGnQF2Jsi_cLoIYUTOX_MQKEu6WMIM31mNfRO1zu8pqsf7IXiaWajVZenz5AuQvxzCwk0BOaXxjbK6bRGhNChVvJnfvhBHGBP9sun_6HkWiLmc7Pgp2JEXx-0bg9rmV8-6KdC98lYgFVFl9jgJM607xj7flaKdppVJUsqx4Wz9K63l3NAzipVN78y4_y2k-BDveSWkE1GQo7mBoPgrrk8RpY43nCyk_04cpQvnL-sgKVW9TuDsns51OC2Zd1lbyBMOCCZSmDnKyk-fkTfnpCO_h6-57DA8oj4XL6EzJT37xfMg4eUZd4UsO2BdNFNSG1yr7Y_NX51LTnH3KmIhhkNZjMCvrZssN1ixcDiix-OUcrU_5F5d2Wp6Ul9MCK7LhKgHF7jsCbmqK8shAGYa"},
  {title:"Introduction to Artificial Intelligence (AI)",category:"ai-data",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/-ZFH6kY6sjHkskxHMxwSBw~~/AAQRxRA~/K_vCEEYhfpjwiZAgT3i8uDODCrTApJdElR1HM-FCf2dmm6rXk7OdBSX-GNjX03lfT0qLUFBm0QMO4mXcF5qL1Su6iN6r3KQHQqxYItlhYeYchkU9MjGPBHxKhbxPH9_aWjYgK1402KTFpc1n4LGqSqaOH90dJ1X7V48iU1ctC1hPTmPppQ3e1OZqpnJfWX3ump-XM55BzKDCbI5YUm48N2UaFApMYPu0k7dDF9gKudBPlsg5bQymQH_SGTLBt7kf"},
  {title:"Python for Data Science, AI & Development",category:"ai-data",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/bFuv3kc99YXraEFLxooeuw~~/AAQRxRA~/FEa-_8XK7NjxM77tcvVvBZ6itvIqPV02HVTC2v_HXH2PbfAfOJ6YovYRgP9OAakpBkYTYTFoie6-xLSMlPj55g9JUIBkiFAnukeChB0_1rLEPTKAjTMncXrSr7KCPV-NbF98vn0WW5DcyEqakktiL_WEcRuTeNIMNxtRPp-EApj_YT9Yuft0JDbv8oJU7wzaKAPndN0dou5tByMhQMlfnjiLvntI0hS43bEtJAQFCwb9gXR3BkX_ySR_UlQZs8B8"},
  {title:"Machine Learning with Python",category:"ai-data",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/fCmiQAHCOJrMtyZbTvSBKw~~/AAQRxRA~/B3g3PLTGiuUL85DKCZ5-PyCchzb3R7VCLvqKRnGTjjUNUEpEOnop_9H0IVZNe2dhy3JiH6O0PC9A1cmSqLJ6KzqCyGqFX5eY-5BcIbF5Ry6m9g22VgEw396ktDXPcSg0HjRjJNtHI-ytCmse0z1vETSf_X3B-PWoR6dyZhCZCYFfJojGWJ7w8uc1mTqDSPpjjKeFxYGFmTcgvPPSrlZWZYRxMDlAm84DnNIiU9AuSGj_WyjvhJGmfHxtJYTtDikR"},
  {title:"Introduction to Data Analytics",category:"ai-data",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/YsUaySubrtMXt_4tuGQ_Pw~~/AAQRxRA~/XAZnrM2rjpjkcK3Iiw6QzsdNgQkfmPW-UJe76kWx9CKYMbIhj7opA_bmFWjky_050nFfqdc1hBpGlauAYJFoeL1i-hJjkIB_DU6xT6uIel9sXTTrS4LQhHt69UDE_Adoj-4K-qRe9S4ax9qWJCxpa4cxiOnXNlcTlnI_Nq8zRveG8ioPJKpoRm3wOMJY_cCJS5GxCi8oiMqKybDbWqJqBBU9KdS9oN--fljcLOO4ziMsgj71g3AxCCEXt_net4AN"},
  {title:"Supply Chain Management and Analytics",category:"business",description:"Unilever · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/MRTVHYG40MUbBfXFfvyeXg~~/AAQRxRA~/1flpBTpDvJoBZ8I2n2GRu7q3-JFASLfmj8IWXHe5m3vk3AZJEfkwnkyn-mJeCLiQ7krKTqM06DmcwVly4_pXLF8BSmJyro64MmuDSCe-RQxPkAPqDNZ_EQmlUAWnvh47XhpzRvqw1YmQRllYLTvIXt29_8XnvEccE8nZVpBLsgqC78UsfaCB7UIvO4Jx31ep8R1-XX_59SJ28wM_LWjCGw69fIut4nNqzhQSxhQkujIZ3mGug7LnS4WF9WseM_Qs"},
  {title:"Using Data Analytics in Supply Chain",category:"business",description:"Unilever · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/DtfKEEv9Nzbp2iKtsiJ9rw~~/AAQRxRA~/8k3te4nadeZlAJPx1PAJXaCHEAud7HGpEbttui-wmK2lHZdN432XCW8zhuwyV-Ke84rkxbBWFfdRaKxPjSqrIqd7HBKqGzpM9GkicglI6aUduqRN8YU9lgLsFZo3onvuS81Ur333zLnduGGY6UZbhv6gPHNnD46o5LBhErkrMioZDesmHidL4GWXqj-CppRDIzIskzCn3FpY4XO1R4vIVGOXst5QP11LglOzJMk5sgsvOW-25ifZQdfSqFTKO8dy"},
  {title:"Foundations of Finance",category:"business",description:"University of Cambridge · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/tnY7du8zecwmecI7hw9Oog~~/AAQRxRA~/VHzZvJ3vqkIDxkDfDKLiDzlGbvnEKe7DSa2kZJdtkKac76KiKq9U1wv74_OmGOfWNdP16h95kHL22fWe7FR3WLQIokvKYysjtARCn0uD5FE3yT2H315QsTHdf_wrbmuBT2aNVU0iupo8Edmk-kc1uY1DZIKf9yF-lw4arwdJ8WZ-SexKEcuFbPdeP98AWwh1plX8UkK4DRXwrdMBzrgvTMC0MVaJbD2yQ3VeLcUQ9hWlGC1kEEqVl-xV-5QiwSff"},
  {title:"Technical Support Fundamentals",category:"digital",description:"Google · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/pWwhV36fQBSPXewZeq1TKQ~~/AAQRxRA~/VrtQSJ2QnbQxnFts8H1FP30wQVz7Qplc68ZcKbzF6UiMhMQMfQMOYtyrzI6fc-enGKJJ_XZ7jCgzSMHwXWt3CaQvzI05j6CFzDwvzr_lxE5uE0xTynF1-MjygAT1RMtT3OH-WxDxLmmQ20p1LAY8jCfCzW9r1uxt4bIbIcPuv87Exk3tt2E8_ZvtCUgm7qvzX6m0j0jQpAWMoISZAlGZ-GD9AN4OZNFJcUFwCbOMxoWfUuirtHlHZkAccZXkFYsw"},
  {title:"Attract and Engage Customers with Digital Marketing",category:"digital",description:"Google · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/RTpxqkiGFCI_U43M4DMGLQ~~/AAQRxRA~/2fYv7lrsa9lL0rjallFqpeoRrTnFvb-LiGCdZqXNXyTsS7bIetW8q0udK8y8DX0VPZZHMrDXRs9DRZ9GXXidXVLhnFeGT1UF66aLOJE6RVKqYHnJ1KVGY28UuXuyb82R4WR9pATwJuLBodbyqSl4yh1w1vB_7SJHdsq4Rcb58B_PcXdZ27EEetFOt4C1rSF4k77QvOASrQGsljUTtEbgmWPYOboGdVo5Lv2ViHKHenYjLc9fO-WFSLaMPVkzLfdV"},
  {title:"Introduction to Digital Marketing",category:"digital",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/1yvlG4gKob1bypZFJezOIQ~~/AAQRxRA~/XAZnrM2rjpjkcK3Iiw6QzsdNgQkfmPW-UJe76kWx9CKYMbIhj7opA_bmFWjky_050nFfqdc1hBpGlauAYJFoeL1i-hJjkIB_DU6xT6uIel9sXTTrS4LQhHt69UDE_Ado6hEaywxPkrQ4b7QNdXUnvFRlyjNnVLIjIP8BZ8xl7hNJARBHOoBJIECC9rJ0E7z_SOID5OrYPe-Zbp2LrbZEx5_klNmvQOpfH4EZx66dNLT6yRv4CggSFMHH7Bugo1-5"},
  {title:"Foundations of Digital Marketing and E-commerce",category:"digital",description:"Google · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/Gtg-KSGkVfmZuqtNU36juA~~/AAQRxRA~/1V2xbtZv5AvUyXC58f2TMA6_cI4tQe6bN1NiO26bGzEFU2_Gvz7kMF6GfkSiYYRSyeXLHW8HxN1svh0I5iwJMeMyMO6I_UXEbImyaKfuvmoWsNtT4tWmiJU3Lv3xltyO03wXTHKLyT1RfOwGJUCmaOfiyWkcOVpO1X7NQ6U9VWu4VV5RCyS1odUfqc4bJeu-VeHAsExp8bdaZXTVW-yBggZEV_73jRUJGuzTHY3oikNNLQ4fc2VQdrdZ9wodQYcX"},
  {title:"Introduction to Software Engineering",category:"ai-data",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/yHAKmGjx7f5wBrHQhlpSkg~~/AAQRxRA~/JyEALR8cp9P5XAYEFNnkANRt3H9lu20J38Vx5SqFTsxNJIPsnkKZir9VBGv50nd_CG4tXD56XkwhAWVCrcwNl9Y6VRTAVXWx2eMjwRFLFbqDd7tA8l09z6EoDxwiiexRSzsNuKVtp4DEnZNiBj1kHtleR8y4araOX7C_DB6eBDR3YKwL6yw9BL2I-CZu-ONCVCbS00uhS06PHnQt102VNUSWon3FynCqpQwW011tEoB-UWr5dFNaHLrOtIQ3ilJ4"},
  {title:"Present with Purpose: Create/Deliver Effective Presentations",category:"professional",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/OBmDto7NCvuMe-Sihkg8Vw~~/AAQRxRA~/uZogVgA6mF44guHPPt6sT5JPj-gyhvZw0_RIUMNIFFCV-i0wZQ_D8MEQKPArj3whiJssqa0Ftca5fz4a5BfXlGOSgNKSGewRfnUHQ6tTuJQyYwLGM4BEo-E_T5MjObIZM8Lo-zKwTyUtJDDP_nwYQtJcoH-AMP4GxE8z1IysMali4hPNkN-zdgokYyiaA6V-LjbXWKckxPaYnccX506O5QjeDcS6OHOhS7mBrN6Vltan4YZuXvFSg95mBwqgHOuG"},
  {title:"Collaborate Effectively for Professional Success",category:"professional",description:"IBM · Coursera",date:"20 octobre 2026",url:"https://link.coursera.org/f/a/R9EDlZiWpB0KXHVjf2i9-A~~/AAQRxRA~/K8tqUZ0CcnBVMnL4Z3IUN_euQQLrxAxpcu7T5w3F-J1Sn0PGu4tldX_damGP_K6uE9YltypQXnPnx18KqbRdx0strg5_de5Sa0TRFdepUGxs6649LON2uQP_S6VfKOXwxAuCuuaaXjVWTn2mnqj7clywU6GH3gDtNAbzOHAYNt3tK1Zr9xC8TwXKduesjoe28wxQW27ESpubZyErUFJVjJAw59G8Ud9oEAW3F3TF3VBbS67YBEn9jOUBV3TgwBan"}
];

const list = document.getElementById("documentList");
const count = document.getElementById("docCount");
const viewer = document.getElementById("documentViewer");
const frame = document.getElementById("pdfFrame");
const viewerTitle = document.getElementById("viewerTitle");
const openLink = document.getElementById("openDocument");
let activeFilter = "all";

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}

function renderDocuments() {
  const filtered = documents.filter(doc => activeFilter === "all" || doc.category === activeFilter);
  count.textContent = filtered.length + (filtered.length > 1 ? " certificats" : " certificat");

  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state"><h3>Aucun certificat dans cette catégorie.</h3><p>Choisissez un autre filtre pour afficher les certificats disponibles.</p></div>';
    return;
  }

  list.innerHTML = filtered.map((doc, index) => {
    const action = doc.file
      ? '<button type="button" data-preview="' + index + '">Consulter dans la page ↗</button>'
      : '<a class="cert-link" href="' + escapeHtml(doc.url) + '" target="_blank" rel="noopener noreferrer">Voir le certificat ↗</a>';
    return '<article class="document-row"><div class="document-info"><span class="pdf-icon">' +
      (doc.file ? 'PDF' : 'CERT') + '</span><div><h3>' + escapeHtml(doc.title) +
      '</h3><p>' + escapeHtml(doc.description) + ' · ' + escapeHtml(doc.date) +
      '</p></div></div><div class="doc-actions">' + action + '</div></article>';
  }).join("");

  list.querySelectorAll("[data-preview]").forEach(button => button.addEventListener("click", () => {
    const doc = filtered[Number(button.dataset.preview)];
    showDocument(doc);
  }));
}

function showDocument(doc) {
  if (!doc.file) return;
  viewer.hidden = false;
  viewerTitle.textContent = doc.title;
  frame.src = encodeURI(doc.file);
  openLink.href = encodeURI(doc.file);
  viewer.scrollIntoView({behavior:"smooth",block:"start"});
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
  button.classList.add("active");
  activeFilter = button.dataset.filter;
  renderDocuments();
}));

if (document.getElementById("closeViewer")) {
  document.getElementById("closeViewer").addEventListener("click", () => {
    viewer.hidden = true;
    frame.src = "about:blank";
  });
}

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
