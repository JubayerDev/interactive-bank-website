// Deposit Event Handler
document.getElementById('deposite-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-amount');
    const depositText = depositField.value;
    const depositAmount = parseFloat(depositText);

    const depositTotal = document.getElementById('deposit-total');
    const currentDepoText = depositTotal.innerText
    const currentDepoAmmount = parseFloat(currentDepoText);
    const newTotalDepoAmount = currentDepoAmmount + depositAmount;
    depositTotal.innerText = newTotalDepoAmount;

    // Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
    const previousBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalance + depositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // Clear deposit field
    depositField.value = '';
})

// Withdraw Event Handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const withdrawTotalAmount = previousWithdrawAmount + withdrawAmount;
    console.log(withdrawTotalAmount);

    withdrawTotal.innerText = withdrawTotalAmount;

    // Update Balance After withdraw
    const totalBalance = document.getElementById('balance-total');
    const previousBalanceText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotalUpdate = previousBalanceTotal - withdrawAmount;

    totalBalance.innerText = newBalanceTotalUpdate;


    // Clear Withdraw Field
    withdrawField.value = '';
})