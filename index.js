// console.log("Hello there!")
const form = document.getElementById('form');
const list = document.getElementById('watchlist');



function handleSubmit(e) {
  e.preventDefault();
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.innerText = "X"
  button.addEventListener('click', handleDelete)
  li.innerText = e.target[0].value;
  li.append(button);
  list.append(li);
};

function handleDelete(e) {
  // debugger
  // console.log(e.target.parentElement)
  e.target.parentElement.remove()
};

form.addEventListener('submit', handleSubmit);