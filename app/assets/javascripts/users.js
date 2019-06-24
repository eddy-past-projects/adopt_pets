document.addEventListener('DOMContentLoaded', () => {
  console.log('users js')
  // getUserPets()


  const signUpContainer = document.getElementById('container')
  const userSignUp = document.getElementsByClassName('add-user-form')
  const userSignIn = document.getElementsByClassName('log-in')

  let userId




    $('#new_user').on('submit', function(e) {
      e.preventDefault()
      const values = $(this).serialize()

      console.log(values)
      $.post('/users', values).done(function(data){
        console.log("data from api",data)
      })

    })

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
