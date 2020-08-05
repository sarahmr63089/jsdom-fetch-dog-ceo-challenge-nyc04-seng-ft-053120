console.log('%c HI', 'color: firebrick')

fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    turnImageIntoHTML(json)
  })

// function to turn images into HTML objects and add to DOM  
function turnImageIntoHTML(json) {
  let dogImagePlace = document.querySelector("#dog-image-container") 
  let arrOfDogUrls = json.message

  for (let i = 0; i < arrOfDogUrls.length; i++) {
    let blankImg = document.createElement("img"); // KEY!!!
    blankImg.src = arrOfDogUrls[i];
    dogImagePlace.append(blankImg);
  }
}

fetch('https://dog.ceo/api/breeds/list/all')
  .then(function(response){
    return response.json()
  })
  .then(function(json){
    addBreedToUl(json)
  })

let breedUl = document.querySelector("#dog-breeds")

function addBreedToUl(json) {
  let arrBreeds = Object.keys(json.message)

  for (let i = 0; i < arrBreeds.length; i++) {
    let dogBreed = document.createElement("li"); // KEY!!!
    dogBreed.innerText = arrBreeds[i];
    breedUl.append(dogBreed);

    dogBreed.addEventListener("click", (evt) => {
      dogBreed.style.color = "green"
    })     
  }
}

let breedDropdown = document.querySelector("#breed-dropdown")

breedDropdown.addEventListener("change", (evt) => {
  // grab all lis
  let dogLis = document.querySelectorAll("li")

  let selection = evt.target.value
  
  let allBreeds = []

  for(let i = 0; i < dogLis.length; i++) {
    if (dogLis[i].nodeName === "LI")
      allBreeds.push(dogLis[i].innerText)
  }

  let filteredBreeds = allBreeds.filter((breed) => {
    return breed.startsWith(selection)
  })
  debugger 
  breedUl.innerHTML = filteredBreeds.map((breed) => `<li>${breed}</li>`).join('')
  
})
