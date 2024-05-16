const searchBox = document.querySelector("#search-box");
const crossBtn = document.querySelector("#cross");
const searchBtn = document.querySelector("#search");
const searchResult = document.querySelector("#search-result");

searchBtn.addEventListener("click", async (event) => {
  search(event);
});

searchBox.addEventListener("keypress", async (event) => {
  if (event.key === "Enter") {
    search(event);
  }
});

crossBtn.addEventListener("click", () => {
  searchBox.value = "";
});

async function search(event) {
  const searchQuery = searchBox.value;
  event.preventDefault();
  console.log(searchQuery);
  if (searchQuery === "") {
    alert("Please enter a search text");
  } else {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=rZHK9ICdDk_iAetO5jKc2v7LUmWksAocJpPmf2IHsy0&per_page=12`;
    let data = await fetch(url);
    data = await data.json();
    console.log(data);
    displayimage(data);
  }
}

function displayimage(data) {
  searchResult.innerHTML = "";
  data.results.forEach((element) => {
    console.log(element.urls.regular);
    const img = document.createElement("img");
    img.src = element.urls.regular;
    img.classList.add("img-class");
    searchResult.appendChild(img);
  });
}
