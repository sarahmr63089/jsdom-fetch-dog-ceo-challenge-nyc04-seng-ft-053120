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