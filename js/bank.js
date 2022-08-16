
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