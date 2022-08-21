document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const elementDepositAmount = document.getElementById('deposit-amount');
    const previousDepositAmountString = elementDepositAmount.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);
    
    const currentDepositTotal = newDepositAmount+previousDepositAmount;
    elementDepositAmount.innerText = currentDepositTotal;
    
    depositField.value = '';

    const elementBalanceAmount = document.getElementById('balance-total');
    const previousBalanceString = elementBalanceAmount.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    
    const currentBalance = previousBalance + newDepositAmount;
    elementBalanceAmount.innerText = currentBalance;
})