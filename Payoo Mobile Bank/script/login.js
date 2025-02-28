document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    
    const accountNumber= document.getElementById("Account-Number").value;
    // console.log(accountNumber);
    const pinNumber= document.getElementById("Pin-Number").value;
    // console.log(pinNumber);
    if (accountNumber.length===11) {
     if (pinNumber==="1234") {
     window.location.href="./main.html"  
     } else {
      alert("Pin thik nai")  
     }   
    } else {
     alert("account number thik nai")   
    }
})