document.getElementById("add-money").addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("Pin-Number").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        sum = convertedMainBalance + convertedAmount;
        document.getElementById("main-balance").innerText = sum;

        const container = document.getElementById("transection-container");
        const p = document.createElement("p");
        p.innerText=`
        added ${amount} from ${pin} account
        ` 
        container.appendChild(p)
    }
    else {
        console.log("Pin sothik noi")
    }


})