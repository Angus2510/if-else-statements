let = "bill"

let wateruseage = prompt("please enter the amount of water you have used")

// the amount of money per kilolitre
const rate1 = 15.73
const rate2 = 22.38
const rate3 = 31.77
const rate4 = 69.76
let indigent = confirm( "are you an indigent household?")

if(wateruseage <= 6000 && indigent){
    alert(bill = 0)
}else if ( wateruseage <= 6000) {
    bill = (wateruseage * rate1)
    alert(`R${bill/1000}`)
}  
else if(wateruseage > 6000 && wateruseage <= 10500 && indigent){
    alert(bill = 0) }
else if (wateruseage <= 10500){
    bill = ((wateruseage -6000) *rate2)+ (6000 * rate1) 
    alert(`R${bill/1000}`)
}
else if (wateruseage <= 35000){
    bill = (((wateruseage -10500) * rate3)+ (6000 * rate1) + (24000*rate2) )
    alert(`R${bill/1000}`)
}
else if(wateruseage >35000){
    bill = ((wateruseage -35000* rate4) +(6000 * rate1)+(24000*rate2) + (35000*rate3) )
    alert(`R${bill/1000}`)
}

