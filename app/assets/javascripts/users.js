document.addEventListener('DOMContentLoaded', () => {
  console.log('users js')


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








})
