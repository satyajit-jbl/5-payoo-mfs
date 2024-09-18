document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('cash out butt clicked');

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut);
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        console.log(cashOut, pinNumber);

        ///wrong way to varify pin no

        if(pinNumber === '1234'){
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);
            const balanceNumber = parseFloat(balance);
            
            const newBalance = balanceNumber - cashOutNumber;
            console.log(newBalance);
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('trying to cash out be alert !!!!')
        }
})