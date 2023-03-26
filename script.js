// console.log("Javascript");

// Alert Dialog Box
// window.alert("Hello");

// Confirm Dialog Box
// let answer = window.confirm("Are you sure you want to exit ?");
// console.log(answer);

// Prompt Dialog Box
// let answer = window.prompt("What is the capital of Srilanka ?");
// if(answer == "Colombo") {
//     window.alert("You are correct");
// }
// console.log(answer);

// Document

// document.body.style.fontFamily = "sans-serif";

// Selector
// let movies = document.getElementById("movies");
// movies.style.backgroundColor = "cyan";
// console.log(movies);

// Class Selector
// let movies = document.getElementsByClassName("moviesList");
// console.log(movies);

// Query Selector
// let movies = document.querySelector(".moviesList");
// movies.classList.add("big-red");
// movies.classList.remove("big-red");
// movies.classList.toggle("big-red");

// Query Selector All
// let movies1 = document.querySelectorAll(".moviesList");
// movies1[1].style.backgroundColor = "blue";

// Event Listener
// document.addEventListener("click", function () {
//   window.alert("You clicked");
// });

// let button = document.querySelector(".click");
// button.addEventListener("click", function () {
//   window.alert("You pressed a button");
// });

let button = document.querySelector(".click");
button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (button.textContent == "Dark Mode") {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
});
