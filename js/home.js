// add money to the account

/*
//step 1 : add an event handler to the add oney button inside the form
prevent page reload after form submit
s-2: get money to be added to the account balance
*/
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submit
    event.preventDefault();

    //step 2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get pic number and verify it
    const pinNumberInput = document.getElementById('input-pin-number');
    console.log(pinNumberInput);
});