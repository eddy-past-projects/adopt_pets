document.addEventListener('DOMContentLoaded', () => {
  console.log('users js')
  // getUserPets()


  const signUpContainer = document.getElementById('container')
  const userSignUp = document.getElementsByClassName('add-user-form')
  const userSignIn = document.getElementsByClassName('log-in')

  let userId
  let newUser




    $('#new_user').on('submit', function(e) {
      e.preventDefault()
      const values = $(this).serialize()
      $('#users-container').html('')
      console.log(values)
      $.post('/users', values).done(function(user){
        console.log(user)
        window.location.replace(`${user.id}`);
        return false;
        });
      })
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


    // class User {
    //   constructor(user) {
    //     this.id = user.id
    //     this.name = user.name
    //   }
    // }
    //
    // User.prototype.formatShow = function(){
    //   let userHtml = (`
    //     <div class='user-new' data-id=${this.id}
    //     data-action='user-get' name=${this.name}>
    //     </div>
    //     `)
    //     return userHtml
    // }
    //


  // $('#new_user').on('submit', function(e) {
  //   e.preventDefault()
  //   console.log('hiya')
  //
  //
  //   const name = document.querySelector('#user_name').value
  //   const password = document.querySelector('#user_password').value
  //   let dataObj = {
  //     name: name,
  //     password: password
  //   };
  //   console.log(dataObj)
  //   fetch(`/users.json`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Accept': 'application/json',
  //       },
  //       body: JSON.stringify(dataObj),
  //     })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  // })



    // fetch(`/users.json`)
    //   .then(res => res.json())
    //   .then(users => {
    //
    //     $('.user-pets').html('')
    //     users.forEach(user => {
    //       userPets = user.pets
    //
    //
    //       userPets.forEach(pet => {
    //         userId = pet.user_id
    //         console.log(userId)
    //           let singlePet = new Pet(pet)
    //           // console.log(singlePet)
    //           let singlePetHtml = singlePet.formatShow()
    //           $('.user-pets').append(singlePet)
    //         })
    //       })
    //     })
      // })
    //
    // debugger
    //     fetch(`/users${userId}.json`)
    //     .then(res => res.json())
    //     .then(user => {
    //       console.log(user)
    // })


})
