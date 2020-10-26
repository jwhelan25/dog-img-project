'use strict';

function getDogImage(numbOD) {
  fetch(`https://dog.ceo/api/breeds/image/random/${numbOD}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'))
}

function displayResults(responseJson) {
    let returnHtml = `<section class="results hidden">`
    for (let i=0;i<responseJson.message.length;i++){
        returnHtml += `<img src="${responseJson.message[i]}" class="results-img"><br>`
    }
    returnHtml += `</section>`
    console.log(returnHtml)
    //replace the existing image with the new one
    $('.results').replaceWith(
      returnHtml
    )
    //display the results section
    $('.results').removeClass('hidden')
  }

function checkNumber(numberI){
let numRet = 3
if(numberI === false || numberI<=0 || numberI>50){}else{numRet = numberI}
console.log('numRet is ' + numRet)
    getDogImage(numRet)
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault()
    let numberOfDogs = $(event.currentTarget).find('input[name="number of dog images"]').val()
    checkNumber(numberOfDogs)
  })
}

function start () {
  console.log('App loaded! Waiting for submit!')
  watchForm()
}

$(start())