// console.log("Hello there!")
const netflixForm = document.getElementById('form');
const watchlist = document.getElementById('watchlist');
// const listInput = document.getElementById('list-input');



function handleSubmit(e) {
  e.preventDefault();
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.innerText = "X"
  button.addEventListener('click', handleDelete)
  li.innerText = e.target[0].value;
  // li.innerText = listInput.value;
  li.append(button);
  watchlist.append(li);
};

function handleDelete(e) {
  // debugger
  // console.log(e.target.parentElement)
  e.target.parentElement.remove()
};

netflixForm.addEventListener('submit', handleSubmit);
