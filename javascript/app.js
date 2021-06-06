// grabbing onto the form

const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

// Generate a HTML template and submit to browser/list. It will be an li template.
// Creating a seprate function so the code is more reusable in the future.

const generateTemplate = (todo) => {
  const html = ` <li
          class="
            list-group-item
            d-flex
            justify-content-between
            align-items-center
          "
        >
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>`;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  //   This is making sure a user cannot submit "nothing". There must be some length.
  //   .reset clears the form
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

// delete todos

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

// The array.from method turns an HTML collection into an array
//  The method .includes checks an array to see if it contains a specific term

// keyup
// we are looking to get the term a user is searching in that moment in time. WHenever that user types a letter the callback function is fired.
// Next we are going to write a function that will match the keys/terms aginst the todos.This will be created above this ^^^ so it will be more reusable. const filterTodos

search.addEventListener("keyup", (e) => {
  const term = search.value.trim();
  filterTodos(term);
});
