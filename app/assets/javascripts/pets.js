document.addEventListener('DOMContentLoaded', () => {
  console.log('pets js')
  getPets()
  getSinglePet()
})



let petsContainer = document.getElementById('pet-container')
let petUserId


function getPets() {
  fetch(`/pets.json`)
    .then(resp => resp.json())
    .then(pets => {
      $('#pets-container').html('')
      pets.forEach(pet => {
        let newPet = new Pet(pet)
        let petHtml = newPet.formatIndex()
        $('#pets-container').append(petHtml)
      })
    })
}

function getSinglePet() {
  $('#pets-container').on('click', function(e) {
    e.preventDefault()
    let petId = e.target.dataset.id


    fetch(`/pets/${petId}.json`)
      .then(resp => resp.json())
      .then(pet => {
        $('#pets-container').html('')
        let singlePet = new Pet(pet)
        let singlePetHtml = singlePet.formatShow()
        $('#pets-container').append(singlePetHtml)
      })
  })
}
// // .then(resp => resp.text())
// // .then(text => {
// //   console.log(text)

class Pet {
  constructor(pet) {
    this.id = pet.id
    this.name = pet.name
    this.kind = pet.kind
    this.age = pet.age
    this.color = pet.color
    this.hair = pet.hair
    this.user = pet.user
    this.image = pet.image
    this.hungry = pet.hungry
  }
}
Pet.prototype.formatIndex = function() {
  let petHtml = (`
    <div class='pet-card' data-id=${this.id} >
      <img src=${this.image} class='pet-image'>
      <h3>name: <a href="${this.id}" data-id=${this.id} class="show_link"> ${this.name}</a></h3>
      <h5>type of pet: ${this.kind}<br>
      needs to be fed: ${this.hungry}</h5>
    </div>
    `)
  return petHtml
}
Pet.prototype.formatShow = function() {
  let singlePetHtml = (`
    <div class='pet-card' data-id=${this.id} >
      <img src=${this.image} class='pet-image'>
      <h3>hi! my name is: ${this.name}</a></h3>
      <button class='toys' data-id=${this.id} data-action="get-toys">see my toys!</button>
      <h5> i'm ${this.age} years old<br>
        my fur color is: ${this.color}<br>
        and my hair is: ${this.hair} </h5>

    </div>
    `)
  return singlePetHtml
}


// <div id="outer">
//   <div class="inner"><button data-id=${this.id} data-action='feed' class="feed-btn">please feed me</button></div>
//   <div class="inner"><button data-id=${this.id} data-action='play' class="play-btn">time to play </button></div>
//   <div class="inner"><button data-id=${this.id} data-action='hungry' class="hungry-btn">i'm hungry again </button></div>
//    <div class="inner"><button data-id=${this.id} data-action='nap' class="hungry-btn">time for a nap </button></div>
//   <div class="inner"><button data-id=${this.id} data-action='change' class="change-btn">pet get a new do? </button></div>
//   <div class="inner"><button data-id=${this.id} data-action='heaven' class="heaveb-btn">pet went to heaven </button></div>
// </div>


// needs to be fed: ${yesno(this.hungry)}</h5><br>

 //DONT DELETE/////
// petUserId = pet.user.id
// // not right, only returns last user.id
// console.log(petUserId)

 // fetch(`/users/${petUserId}.json`)
//   .then(resp => resp.json())
//   .then(userPets => {
  //     $('#pet-container').html('')
  //       console.log(userPets)
  //
  //
  //   })
