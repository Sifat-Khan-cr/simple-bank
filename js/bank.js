
// ------------------
//    bank side JS
// -------------------   

document.getElementById('deposit-submit').addEventListener('click', function () {
    let depositTotal = parseFloat(document.getElementById('deposit').innerText);
    const deposit = parseFloat(document.getElementById('deposit-amount').value);
    const balanceTotal = parseFloat(document.getElementById('balance').innerText);
    document.getElementById('deposit').innerText = depositTotal + deposit;
    document.getElementById('balance').innerText = balanceTotal + deposit;
    document.getElementById('deposit-amount').value = "";
})
document.getElementById('withdraw-submit').addEventListener('click', function () {
    let withdrawTotal = parseFloat(document.getElementById('withdraw').innerText);
    const withdraw = parseFloat(document.getElementById('withdraw-amount').value);
    const balanceTotal = parseFloat(document.getElementById('balance').innerText);
    if (withdraw > balanceTotal) {
        document.getElementById('withdraw-amount').value = "";
        alert('insufficient amount');
        return;
    }
    document.getElementById('withdraw').innerText = withdrawTotal + withdraw;
    document.getElementById('balance').innerText = balanceTotal - withdraw;
    document.getElementById('withdraw-amount').value = "";
})