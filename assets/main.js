var btn = document.querySelector(".btn");


function onSearch(event) {
  event.preventDefault();
  let search = document.querySelector('#search').value;
  if (search) {
    document.location = "./searchpage.html?"+search
  }
}

btn.addEventListener("click",onSearch)