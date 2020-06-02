var billItemTypeElement = document.querySelector(".billTypeText");
var addToBillBtnElement = document.querySelector(".billAddBtn");
var callTotalTwoElement = document.querySelector(".callTotalTwo");
var smsTotalTwoElement = document.querySelector(".smsTotalTwo");
var totalTwoSpanElement = document.querySelector(".totalTwo");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;

function addToBillBtnClicked() {
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
     
    if (checkedRadioBtn){
    var billTypeEntered = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms'
  
  
    // get the value entered in the billType textfield
    //var billTypeEntered = billTextElement.value.trim();

    // update the correct total
 
     if (billTypeEntered === "call") {
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms") {
        smsTotal += 0.75;
    }
    }
    //update the totals that is displayed on the screen.

    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    totalCost = callsTotal + smsTotal;
    totalTwoSpanElement.innerHTML = totalCost.toFixed(2);

    
    //color the total based on the criteria
    totalTwoSpanElement.classList.remove("danger");
    totalTwoSpanElement.classList.remove("warning");
    if (totalCost >= 50) {
        // adding the danger class will make the text red
        totalTwoSpanElement.classList.add("danger");
    }
    else if (totalCost >= 30 && totalCost < 50) {
        totalTwoSpanElement.classList.add("warning");
    }
}

addToBillBtnElement.addEventListener("click", addToBillBtnClicked);