document.getElementById("cashout").style.display = "none"
document.getElementById("Transection-history").style.display = "none"


document.getElementById("add").addEventListener("click", function () {
    document.getElementById("addmoney").style.display = "block"
    document.getElementById("cashout").style.display = "none"
    document.getElementById("Transection-history").style.display = "none"

})

document.getElementById("out").addEventListener("click", function () {
    document.getElementById("addmoney").style.display = "none"
    document.getElementById("cashout").style.display = "block"
    document.getElementById("Transection-history").style.display = "none"

})

document.getElementById("transection").addEventListener("click", function () {
    document.getElementById("addmoney").style.display = "none"
    document.getElementById("cashout").style.display = "none"
    document.getElementById("Transection-history").style.display = "block"

})