const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const clickeddClass = "clicked";
//   if (h1.classList.contains(clickeddClass)) {
//     h1.classList.remove(clickeddClass);
//   } else {
//     h1.classList.add(clickeddClass);
//   }
// }

function handleTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
