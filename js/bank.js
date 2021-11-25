function getInputValue(fieldId){
    const inputField = document.getElementById (fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = "";
    return value;
}
function getInnerTextValue(fieldId){
    const fieldtag = document.getElementById(fieldId);
    const fieldTagText = fieldtag.innerText;
    const value = parseFloat(fieldTagText);
    return value;
}
function updateTotal(depWithId,amount){
    // const totagId = document.getElementById(depWithId);
    // const previousTotal = totagId.innerText;
    // const previousTotalInText = parseFloat(previousTotal);
    const previousTotalInText = getInnerTextValue(depWithId);
    const newTotal = previousTotalInText + amount;
    document.getElementById(depWithId).innerText = newTotal;
    return newTotal;
}

function updateBalance(amount,isAdding){
    // const prevBlanace = document.getElementById("balance-total");
    // const prevBlanaceText = prevBlanace.innerText;
    // const PrevValue = parseFloat(prevBlanaceText);
    const PrevValue = getInnerTextValue("balance-total")
    let newBalanceValue;
    if(isAdding == true){
        newBalanceValue = PrevValue + amount;
    }
    else{
        newBalanceValue = PrevValue - amount;  
    }
    document.getElementById("balance-total").innerText = newBalanceValue;
   
}
document.getElementById("deposit-button").addEventListener("click",function(){
    const amount = getInputValue("deposit-input");
    if(amount>0){
        updateTotal("deposit-total",amount)
        updateBalance(amount,true)
    }
    
})
document.getElementById("withdraw-button").addEventListener("click",function(){
    const withdrawAmount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    if(withdrawAmount>0 && withdrawAmount <= balance){
        updateTotal("withdraw-total",withdrawAmount )
        updateBalance(withdrawAmount,false)
    }
  
})