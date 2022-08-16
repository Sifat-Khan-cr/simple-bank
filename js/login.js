document.getElementById('user-submit').addEventListener('click', function () {
    const mail = document.getElementById('user-email').value;
    const pass = document.getElementById('user-pass').value;
    if (mail === "sifat@bank.com" && pass === "12345") {
        document.getElementById('user-email').value = "";
        document.getElementById('user-pass').value = "";
        window.location.href = './bank.html';
    } else {
        alert('Wrong email or password');
        document.getElementById('user-email').value = "";
        document.getElementById('user-pass').value = "";
        return;
    }

})
