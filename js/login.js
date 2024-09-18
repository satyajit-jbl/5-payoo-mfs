// console.log('button..sl;sdf');

// document
//      .addEventListener('click', function(){})

//
//secrch: form submit reloading the page

// step - 1  set event handler
document.getElementById('button-login')
    .addEventListener('click', function(event){
        // step 2: prevent detault behabior (prefent reloadind browser)
        event.preventDefault(); // <---- vejal to beginners
         console.log('log in button clicked');

         // step; 3: get the phone number

         const phoneNumber = document.getElementById('phone-number').value;
         console.log(phoneNumber);
})