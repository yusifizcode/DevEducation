const products = [
  {
    id: 1,
    imageScr: "./assets/img/d54a6345d13113da84ec3d175b1c0359.jpg",
    title: "How to prototype in figma",
    date: "July 15 , 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...",
    button: "Contunie Reading",
  },
  {
    id: 2,
    imageScr: "./assets/img/e4b03e7d2b8ec8085affb4e73347135f.jpg",
    title: "How to prototype in figma",
    date: "July 15 , 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...",
    button: "Contunie Reading",
  },
  {
    id: 3,
    imageScr: "./assets/img/ea4780bf6eda0627b358e055d94959e5.jpg",
    title: "How to prototype in figma",
    date: "July 15 , 2021",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante scelerisque laoreet. Fusce finibus ...",
    button: "Contunie Reading",
  },
];

const cardsContainer = document.querySelector("#blog .content");

for (const product of products) {
  renderProductCard(product);
}

function renderProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("item");
  cardsContainer.appendChild(card);
  card.outerHTML = getProductCardMarkup(product);
}

function getProductCardMarkup(product) {
  return `
  <div class="item">
        <div class="img">
            <img src="${product.imageScr}" alt="img">
        </div>
        <div class="text">
            <h3>${product.title} </h3>
            <p class="date">${product.date}</p>
            <p>
                ${product.description}
            </p>
            <p class="contunie">${product.button}</p>
        </div>        
    </div>                
  `;
}
