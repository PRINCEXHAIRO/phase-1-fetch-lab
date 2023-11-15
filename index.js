function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json)
    return renderBooks(json)
    })
}

function renderBooks(data){
// only able to access objects within data by using forEach 
  data.forEach(data => {
    const h1 = document.createElement('h1')
    h1.innerHTML = data.name;
    const main = document.getElementById('main')
    main.appendChild(h1)
  });
};

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
  }
)