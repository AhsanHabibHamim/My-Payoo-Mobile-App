document.getElementById("cashOutMoney").addEventListener("click", function(){
    const amount = document.getElementById("amounT").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("Pinnumber").value;
    const convertedPin = parseInt(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        sum =   convertedMainBalance - convertedAmount ;
        document.getElementById("main-balance").innerText = sum;

        const container = document.getElementById("transection-container");
        const p = document.createElement("p");
        p.innerText=`
        cash out ${amount} from ${pin} account
        ` 
        container.appendChild(p)
    }
    else {
        console.log("Pin sothik noi")
    }
})