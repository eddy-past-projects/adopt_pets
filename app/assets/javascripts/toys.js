// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', () => {
  console.log('toys js')
  // let petId




// $("#pets-container").on('click', function(e){
//   console.log('yes')
//   console.log(e.target.dataset.action === 'get-toys')
//   petId = e.target.dataset.id
//
//
//   fetch(`/pets/${petId}.json`)
//   .then(resp => resp.json())
//   .then(toys => console.log(toys))
//
//
//
//
//   // console.log(e.target.dataset.id)
// })
// fetch(`pets/${this.pet_id}.json`)


// function likeJewel(jewelId, btn) {
//     //find jewel in local state
//     const foundJewel = jewels.find(function(jewel) {
//       return jewel.id === jewelId
//     })
//     foundJewel.likes++
//     console.log(jewelId)
//     fetch(`http://localhost:3000/jewelries/${jewelId}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         likes: foundJewel.likes
//       })
//     })
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(json) {
//       console.log(json)
//     })
// function getPetToys(){
//   $('#toys').on('click', function(e){
//     console.log(e.target)
//     console.log(e.target.dataset.action === 'get-toys')
//     console.log('wow')
//   })
// }




class Toy {
  constructor(toy){
    this.is = toy.id
    this.name = toy.name
    this.pet_id = toy.pet_id
  }
}

Toy.prototype.formatShow = function(){
  let toyHtml = (`
    <div class='toy-card' data-id=${this.id}>
    <h5>${this.name}</h5>
    </div>
    `)
}





})
