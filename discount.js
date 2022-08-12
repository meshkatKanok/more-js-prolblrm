/*
1.if ticket numbers is less then 100, per ticket price:100;
2.if ticker number is more than 100 ,bur less than 200.Frist 100 tickets will be 100/tickets
rest tickets will be 90 taka per piece
3.if you purchase more than 200 tickets
frist 100--->100tk
101-200---->90tk
200+--->70tk
*/
function checkDiscount(ticketQuentiy){
const fristtiketprice=100;
const secondtiketPrice=90;
const restPrice=70;
if(ticketQuentiy<=100){
    const fristcheck=ticketQuentiy*fristtiketprice;
    return fristcheck;
}
else if(ticketQuentiy<=200){
    const tiket1=100*fristtiketprice;
    const tiket2=ticketQuentiy-100;
    const nextmulti=tiket2*secondtiketPrice;
    const totalmulti=tiket1+nextmulti;
    return totalmulti;

}
else{
    const mosttik=100*fristtiketprice;
    const mosttik2=100*secondtiketPrice;
    const mosttik3=ticketQuentiy-200;
    const totalmulticheck=mosttik3*restPrice;
    const mtotla=mosttik+mosttik2+totalmulticheck;
    return mtotla;

}
 
}
const chekDis=checkDiscount(200);
console.log(chekDis)