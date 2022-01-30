// this is a function to store the request
// function getJson() {
/*
    make new request by using new XMLHttpRequest() method
    new XMLHttpRequest() => is an object to exchanges data with the server behind the scenes
  */
// let request = new XMLHttpRequest();

// this is a function call when onreadystatechange do any change
// request.onreadystatechange = function () {
/*
      onreadystatechange => the state of the request
      [0] : the request not initialized
      [1] : server connection established
      [2] : request has been received
      [3] : processing request
      [4] : request completed and response is ready
    */
// console.log(this.statusText);
// if (true) {
//   console.log(this.responseText);
// }
// };

// request.open("GET", "./str.json", true);
// request.send();
// }
const button = document.getElementById("show");
const animalInfo = document.getElementById("animal-info");
let JSONCounter = 1;

button.addEventListener("click", showJson);

function showJson() {
  const ourRequest = new XMLHttpRequest();
  if (JSONCounter > 3) {
    button.style.visibility = "hidden";
    return;
  }
  ourRequest.open(
    "Get",
    `https://learnwebcode.github.io/json-example/animals-${JSONCounter}.json`,
    true
  );
  ourRequest.onloadend = function () {
    const ourData = JSON.parse(ourRequest.responseText);
    creatMarkUp(ourData);
  };
  ourRequest.send();
  JSONCounter++;
}
function creatMarkUp(objData) {
  for (let i = 0; i < objData.length; i++) {
    const animalName = document.createElement("p");
    animalName.textContent = `${objData[i].name} Is A ${objData[i].species} .`;

    const likesFoods = document.createElement("p");
    likesFoods.textContent = `${objData[i].name} Likes : ${objData[
      i
    ].foods.likes.join(" , ")}`;

    const hr = document.createElement("hr");

    animalInfo.append(animalName, likesFoods, hr);
  }
}
