function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then((json) => {
    console.log(json)
    return renderBooks(json)
    })
}

function renderBooks(data){
  const main = document.getElementById('main')
// only able to access objects within data by using forEach 
  data.forEach(data => {
    const h2 = document.createElement('h2')
    h2.innerHTML = data.name;
    main.appendChild(h2)
  });
};

document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
  }
)