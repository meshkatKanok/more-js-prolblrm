function checkErr(num1,num2){
    if(typeof num1 !== "number" || typeof num2!=="number" ){
        console.log("its error")
    }
    return num1+num2;
}
const check=checkErr("12");
console.log(check);

// function chekError(number,number2){
//      return number*number2;
// }
// const chekerr=chekError(30,50)
// console.log(chekerr);