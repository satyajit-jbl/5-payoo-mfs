// add money to the account

/*
//step 1 : add an event handler to the add oney button inside the form
prevent page reload after form submit
s-2: get money to be added to the account balance
get the pin number
s-3: varify pin number
*/
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        // prevent page reload after form submit
    event.preventDefault();

    //step 2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get pic number and verify it
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    //step 3: varify the pin numer
    //wrong way
    if(pinNumberInput === '1234'){
        console.log('money added');
        // step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        // step 5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step 6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong pin');
    }
});