document.addEventListener('DOMContentLoaded', () => {
  console.log('users js')
  // getUsers()
  getUserPets()


  const signUpContainer = document.getElementById('container')
  const userSignUp = document.getElementsByClassName('add-user-form')


  let userId
  let newUser




  $('#new_user').on('submit', function(e) {
    e.preventDefault()
    const values = $(this).serialize()
    $('#users-container').html('')

    $.post('/users', values).done(function(user) {
      $('#new_user').html('')
      $('.add_user_form').html('')
      // console.log(user)
      let singleUser = new User(user)
      let userHtml = singleUser.formatShow()
      $('.add_user_form').append(userHtml)


      console.log(`${user.id}`)
      // window.location.replace(`${user.id}`);
      // return false;
    });
  })

// $('input[name=whichThing]:checked').val()

    $('#new_session').on('submit', function(e){
      e.preventDefault()
      console.log('hi')

    })




    // function getUsers(){
    //   // console.log(`${user.id}`)
    //   fetch(`/users.json`)
    //   .then(resp => resp.json())
    //   .then(users => {
    //     $('#user-pets-container').html('')
    //     users.forEach(user => {
    //       let newUser = new User(user)
    //       let userHtml = newUser.formatIndex()
    //       $('#user-pets-container').append(userHtml)
    //     })
    //   })
    // }



  class User {
    constructor(user) {
      this.id = user.id
      this.name = user.name
      // this.user_id = pet.user_id
    }
  }
  User.prototype.formatShow = function() {
    let singleUserHtml = (`
      <div class='user-new' data-id=${this.id} data-action='user-get'>
      <br><br><h3>hi,  ${this.name}</h3><br>
      <h5>would you like to adopt a pet?</h5>
      <button class='new-pet' data-id=${this.id} data-action="get-pet">click here</button>
      </div>
      </div>
      `)
      return singleUserHtml
    }

    function getUserPets(){
      $('container').on('submit', function(e){

        // if(e.target.)

        console.log(e.target.dataset.action === 'user-log-in')
      })

    }



    // User.prototype.formatIndex = function() {
    //   let userHtml = (`
    //     <div class='user-new' data-id=${this.id} data-action='user-get'>
    //     <br><br><h3>hi,  ${this.name}</h3><br>
    //     <h5>would you like to adopt a pet?</h5>
    //     <button class='new-pet' data-id=${this.id} data-action="get-pet">click here</button>
    //     </div>
    //     </div>
    //     `)
    //     return userHtml
    //   }



    // function getUserPets(){
    //   $('#user-pets-container')
    //   fetch(`users/`)
    // }
  // class User {
  //     constructor(user) {
  //         this.id = user.id
  //         this.name = user.name
  //       }
  //     }
  //
  //     User.prototype.formatShow = function(){
  //         let userHtml = (`
  //             <div class='user-new' data-id=${this.id} data-action='user-get'>
  //             <br><br><h3>hi,  ${this.name}</h3><br>
  //             <h5>would you like to adopt a pet?</h5>
  //             <button class='new-pet' data-id=${this.id} data-action="get-pet">click here</button>
  //             </div>
  //             `)
  //             return userHtml
  //         }





  // class Pet {
  //   constructor(pet) {
  //     this.id = pet.id
  //     this.name = pet.name
  //     this.kind = pet.kind
  //     this.age = pet.age
  //     this.color = pet.color
  //     this.hair = pet.hair
  //     this.user_id = pet.user_id
  //     this.image = pet.image
  //     this.hungry = pet.hungry
  //     this.toys = pet.toys
  //   }






  // console.log("data from api",data)

  // $('#users-container').html('')

  // let newUser = new User(user)
  // console.log(newUser)
  // let userHtml = newUser.formatShow()
  // $('#users-container').append(userHtml)
  // // if (user) {
  //   $('#new_user').style.display = 'block'
  //   p = document.querySelector('p')
  //   p.innerText = ''
  // }

  // console.log(newUser)
  // const newUser = userForm.querySelector(".add-user-form")
  // userForm.removeChild(newUser)
  // })

  //








})
