document.addEventListener('DOMContentLoaded', () => {
  console.log('users js')


  const signUpContainer = document.getElementById('container')
  const userSignUp = document.getElementsByClassName('add-user-form')
  const userSignIn = document.getElementsByClassName('log-in')
  const userPetsContainer = document.getElementsByClassName('user-pets-container')

  let userId
  let newUser
  let singleUser
  console.log(userSignIn)


    $('#new_user').on('submit', function(e) {
      e.preventDefault()
      const values = $(this).serialize()
      $('#users-container').html('')

      $.post('/users', values).done(function(user){
        $('#new_user').html('')
        $('.add_user_form').html('')
        // console.log(user)
        singleUser = new User(user)
        let userHtml = singleUser.formatShow()
        $('.add_user_form').append(userHtml)
        console.log(current_user.id)


        // console.log(`${user.id}`)
        // window.location.replace(`${user.id}`);
        // return false;
        });
      })


      // class User {
      //     constructor(user) {
      //         this.id = user.id
      //         this.name = user.name
      //       }
      //     }


      function getUserPets() {
        $('.user-pets-container').on('click', function(e){

          console.log(e.target.dataset.id)
          if (e.target.dataset.action ==='user-get') {
          let userId = e.target.dataset.id


        }

      })


      class User {
          constructor(user) {
              this.id = user.id
              this.name = user.name
              this.pets = user.pets
            }
          }
          User.prototype.formatShow = function(){
              let userHtml = (`
                  <div class='user-new' data-id=${this.id} data-action='user-get'>
                  <br><br><h3>hi,  ${this.name}</h3><br>
                  <h5>would you like to adopt a pet?</h5>
                  <button class='new-pet' data-id=${this.id} data-action="get-pet">click here</button>
                  <div class='user-pets' data-id=${this.pets} data-action='user-pets'>
                  </div>
                  </div>
                  `)
                  return userHtml
              }
              // User.prototype.formatShow = function(){
              //     let userHtml = (`
              //         <div class='user-new' data-id=${this.id} data-action='user-get'>
              //         <br><br><h3>hi,  ${this.name}</h3><br>
              //         <h5>would you like to adopt a pet?</h5>
              //         <button class='new-pet' data-id=${this.id} data-action="get-pet">click here</button>
              //         <div class='user-pets' data-id=${this.pets} data-action='user-pets'>
              //         </div>
              //         </div>
              //         `)
              //         return userHtml
              //     }





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



              // User.prototype.formatShow = function(){
              //     let userHtml = (`
              //         <div class='user-new' data-id=${this.id} data-action='user-get'>
              //         <br><br><h3>hi,  ${this.name}</h3><br>
              //         <h5>would you like to adopt a pet?</h5>
              //         <button class='new-pet' data-id=${this.id} data-action="get-pet">click here</button>
              //         <div class='user-pets' data-id=${this.pet_id} data-action='user-pets'>
              //         </div>
              //         </div>
              //         `)
              //         return userHtml
              //     }



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
