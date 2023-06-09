console.log("HELLO")
let questions1 = document.querySelector(".questions1")

let questions2 = document.querySelector(".questions2")

console.log(questions2)

let reset = document.querySelector(".reset")

let result = document.querySelector(".result");

let button = document.querySelector(".button")
// Get all elements with class "imgDescription"

// User input in a text box is a string

// Goal: If Blue & they like Sleeping, result = Cat 
button.onclick = function() {
  let imgDescription = document.querySelector(".answer1").value;
  let imgDescription2 = document.querySelector(".answer2").value;
  if (imgDescription == "A" && imgDescription2 == "A") {
    console.log("THE USER PICKED A AND A")
    result.innerHTML = "<h1>You are a cat!</h1>";
    result.style.display = "block";
    console.log(result);
  } else if (imgDescription == "A" && imgDescription2 == "B") {
    result.innerHTML = "<h1>You are a cat!</h1>";
  } else if (imgDescription == "A" && imgDescription2 == "C") {
    result.innerHTML = "<h1>You are a cat!</h1>"
  } else if (imgDescription == "A" && imgDescription2 == "D") {
    result.innerHTML = "<h1>You are a lizard!</h1>";
  } else if (imgDescription == "B" && imgDescription2 == "A") {
    result.innerHTML = "<h1>You are a dog!</h1>";
  } else if (imgDescription == "B" && imgDescription2 == "B") {
    result.innerHTML = "<h1>You are a bird!</h1>";
  } else if (imgDescription == "B" && imgDescription2 == "C") {
    result.innerHTML = "<h1>You are a dog!</h1>";
  } else if (imgDescription == "B" && imgDescription2 == "D") {
    result.innerHTML = "<h1>You are a lizard!</h1>";
  } else if (imgDescription == "C" && imgDescription2 == "A") {
    result.innerHTML = "<h1>You are a lizard!</h1>";
  } else if (imgDescription == "C" && imgDescription2 == "B") {
    result.innerHTML = "<h1>You are a cat!</h1>";
  } else if (imgDescription == "C" && imgDescription2 == "C") {
    result.innerHTML = "<h1>You are a dog!</h1>";
  } else if (imgDescription == "C" && imgDescription2 == "D") {
    result.innerHTML = "<h1>You are a bird!</h1>";
  } else if (imgDescription == "D" && imgDescription2 == "A") {
    result.innerHTML = "<h1>You are a bird!</h1>";
  } else if (imgDescription == "D" && imgDescription2 == "B") {
    result.innerHTML = "<h1>You are a bird!</h1>";
  } else if (imgDescription == "D" && imgDescription2 == "C") {
    result.innerHTML = "<h1>You are a dog!</h1>";
  } else if (imgDescription == "B" && imgDescription2 == "A") {
    result.innerHTML = "<h1>You are a lizard!</h1>";
  } else {
    result.innerHTML = "<h1>You are a human (hopefully) </h1>";
  }
};

reset.onclick = function() {
  result.innerHTML = "";
  questions1 = "";
  questions2 = "";
}


// 
// button.onclick = function() {
//   result.innerHTML = "<h1>Clicked</h1>";
// }

// Define the onclick function
// function handleClick() {
//console.log('Clicked!');
// Hide first question
// imgDescription.style.display="none";

// Show second question

// Loop through all the elements with class "imgDescription" and set the onclick function
// imgDescriptions.forEach(element => {
//  element.onclick = handleClick;
// });

console.log("test")