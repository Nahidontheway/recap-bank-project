document.getElementById('btn-withdraw').addEventListener('click',function(){
    const elementWithdrawAmount = document.getElementById('withdraw-field');
    const newWithdrawAmountString = elementWithdrawAmount.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    
    const elementPreviousWithdraw = document.getElementById('withdraw-amount');
    const previousWithdrawAmountString = elementPreviousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    
    const currentWithdraw = previousWithdrawAmount+newWithdrawAmount;
    elementPreviousWithdraw.innerText = currentWithdraw;

    elementWithdrawAmount.value = '';

    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceTotalString = balanceTotalElement.innerText;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString);
    const currentFinalBalance =  prevBalanceTotal-currentWithdraw;
    balanceTotalElement.innerText = currentFinalBalance;


})