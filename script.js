//loging button eventhandler
document.getElementById("login").addEventListener("click", function() {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const tranctionArea = document.getElementById("tranction-area");
        tranctionArea.style.display = "block";
    })
    //deposit button eventhandler
document.getElementById("addDeposit").addEventListener("click", function() {
    // const depositAmount = document.getElementById("depositAmount").value;
    // // console.log(depositAmount);
    // const depositNumber = parseFloat(depositAmount);
    // console.log(depositNumber);

    // const currentDeposit = document.getElementById('currentDeposit').innerText;
    // // console.log(currentDeposit);
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerHTML = totalDeposit;

    //Adding Balance button

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    const depositNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);


    document.getElementById("depositAmount").value = "";
})


//Withdraw button eventhandler
document.getElementById("addwithdraw").addEventListener("click", function() {
    // console.log("working");
    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawAmountNumber = parseFloat(withdrawAmount);
    const withdrawNumber = getInputNumber("withdrawAmount");
    // console.log(withdrawAmountNumber);
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const AmountNumber = parseFloat(Amount);
    return AmountNumber;
}



function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}