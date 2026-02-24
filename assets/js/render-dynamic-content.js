document.addEventListener("DOMContentLoaded", async () => {
  const app = document.getElementById("app");

  try {
    const response = await fetch("./assets/json/content.json");
    const sections = await response.json();

    sections.forEach(section => {
      app.appendChild(createSection(section));
    });

  } catch (error) {
    console.error("Erro ao carregar JSON:", error);
  }
});

/**
 * Cria uma section completa
 */
function createSection(sectionData) {
  const section = document.createElement("section");

  const {
    title,
    htmlAttributes,
    items
  } = sectionData;

  if (htmlAttributes?.classNameSection) {
    section.className = htmlAttributes.classNameSection;
  }

  if (htmlAttributes?.idSection) {
    section.id = htmlAttributes.idSection;
  }

  // Título da seção (se existir)
  if (title) {
    const titleWrapper = document.createElement("div");
    titleWrapper.className = "section-main-title";

    const h2 = document.createElement("h2");
    h2.innerHTML = title;

    titleWrapper.appendChild(h2);
    section.appendChild(titleWrapper);
  }

  // Lista de itens
  const list = document.createElement("div");
  list.className = htmlAttributes?.classNameList || "";

  items.forEach(item => {
    if (htmlAttributes?.classNameList === "round-list") {
      list.appendChild(createRoundCard(item, htmlAttributes.classNameLink));
    } else {
      list.appendChild(createBlogCard(item, htmlAttributes.classNameLink));
    }
  });

  section.appendChild(list);

  return section;
}

/**
 * Card estilo blog-grid
 */
function createBlogCard(item, classNameLink) {
  const link = document.createElement("a");
  link.href = item.cardLink;
  link.target = "_blank";
  link.className = classNameLink || "card";

  if (item.dataCategory) {
    link.setAttribute("data-category", item.dataCategory);
  }

  // Imagem
  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";

  const img = document.createElement("img");
  img.src = item.cardImage?.imageSrc || "";
  img.alt = item.cardImage?.imageAlt || "";
  img.loading = "lazy";

  placeholder.appendChild(img);
  link.appendChild(placeholder);

  // Corpo
  const body = document.createElement("div");
  body.className = "card-body";

  if (item.cardTag) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item.cardTag;
    body.appendChild(tag);
  }

  const title = document.createElement("h2");
  title.innerHTML = item.cardTitle || "";
  body.appendChild(title);

  if (item.cardDescription) {
    const description = document.createElement("p");
    description.textContent = item.cardDescription;
    body.appendChild(description);
  }

  if (item.cardMetaData) {
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = item.cardMetaData;
    body.appendChild(meta);
  }

  link.appendChild(body);

  return link;
}

/**
 * Card estilo round-list
 */
function createRoundCard(item, classNameLink) {
  const link = document.createElement("a");
  link.href = item.cardLink;
  link.target = "_blank";
  link.className = classNameLink || "round-card";

  if (item.dataCategory) {
    link.setAttribute("data-category", item.dataCategory);
  }

  const imageWrapper = document.createElement("div");
  imageWrapper.className = "round-image";

  const img = document.createElement("img");
  img.src = item.cardImage?.imageSrc || "";
  img.alt = item.cardImage?.imageAlt || "";
  img.loading = "lazy";

  imageWrapper.appendChild(img);

  const title = document.createElement("p");
  title.innerHTML = item.cardTitle || "";

  link.appendChild(imageWrapper);
  link.appendChild(title);

  return link;
}