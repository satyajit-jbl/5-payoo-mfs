// console.log('button..sl;sdf');

// document
//      .addEventListener('click', function(){})

//
//secrch: form submit reloading the page

// step - 1  set event handler
// document.getElementById('button-login')
//     .addEventListener('click', function(event){
//         // step 2: prevent detault behabior (prefent reloadind browser)
//         event.preventDefault(); // <---- vejal to beginners
        

//          // step; 3: get the phone number

//          const phoneNumber = document.getElementById('phone-number').value;
//          const pinNumber = document.getElementById('pin-number').value;
//          console.log(phoneNumber, pinNumber);

//          //step: 4 : validate phone and pin

//         //  this is temporary, you should no do like this
//         if(phoneNumber === '5' && pinNumber === '1234'){
//             console.log('you logged in');
//             // step 5: allow user to use the web site
//         }
//         else{
//             alert('wrong phone number or pin');
//         }

// })
document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault();

        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value 
        const pinNumber = document.getElementById('pin-number').value
        // console.log(phoneNumber, pinNumber);

        // bad way to validate
        if(phoneNumber === '5' && pinNumber ==='1234'){
            console.log('you enter in apps');
            window.location.href = '/home.html'
        }
        else{

            alert('wrong ph no or pin');
        }
})