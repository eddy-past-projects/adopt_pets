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

    if (e.target.dataset.action === 'show-pet') {
    fetch(`/pets/${petId}.json`)
      .then(resp => resp.json())
      .then(pet => {
        $('#pets-container').html('')
        let singlePet = new Pet(pet)
        let singlePetHtml = singlePet.formatShow()
        $('#pets-container').append(singlePetHtml)
      })
    } else if (e.target.dataset.action === 'get-toys'){
      fetch(`/pets/${petId}.json`)
        .then(resp => resp.json())
        .then(petArray => {
          // $('#pets-container').html('')
          let p = 'these are my toys!'
          $('h3').html('')
          $('.pet-type').html('')
          $('h3').html(p)
          petArray.toys.forEach(toy => {
            if(toy.name != null){
            let singleToy = new Toy(toy)
              let toyHtml = singleToy.formatShow()
              $('.pet-type').append(toyHtml)
            }
          })
        })
    }
  })
}



class Pet {
  constructor(pet) {
    this.id = pet.id
    this.name = pet.name
    this.kind = pet.kind
    this.age = pet.age
    this.color = pet.color
    this.hair = pet.hair
    this.user_id = pet.user_id
    this.image = pet.image
    this.hungry = pet.hungry
    this.toys = pet.toys
  }
}
Pet.prototype.formatIndex = function() {
  let petHtml = (`
    <div class='pet-card' data-id=${this.id} >
      <img src=${this.image} class='pet-image'>
      <h3>name: <a href="${this.id}" data-id=${this.id} data-action='show-pet' class="show_link"> ${this.name}</a></h3>
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
      <div class='pet-type' data-id=${this.id} data-action='pet-words'>
      <button class='toys' data-id=${this.id} data-action="get-toys">see my toys!</button>
      <h5> i'm ${this.age} years old<br>
        my fur color is: ${this.color}<br>
        and my hair is: ${this.hair} </h5>
        </div>
    </div>
    `)
  return singlePetHtml
}

class Toy {
  constructor(toy){
    this.id = toy.id
    this.name = toy.name
    this.pet_id = toy.pet_id
  }
}

Toy.prototype.formatShow = function(){
  let toyHtml = (`
      <h5>${this.name}</h5>
    `)
    return toyHtml
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
