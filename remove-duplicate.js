// const frindsName=['abul','babul','kabul','cabul','tabul','mabul','abul','babul','kabul','cabul','tabul','mabul'];
//  function removeDuplicate(friendAge){
//     const uniqueName=[];
//     for(let i=0;i<friendAge.length;i++){
//         const name=friendAge[i];
//         if(uniqueName.includes(name)==false){
//             uniqueName.push(name);
//         }
//     }
//     console.log(uniqueName)
//  }
//  removeDuplicate(frindsName)


const fdAge=[12,14,15,16,17,18,19,10,18,12,14,15,16,17,18,19,10,18];
function duplicateNumber(ages){
    const checknum=[];
for(let i=0;i<ages.length;i++){
    const number=ages[i];
    if(checknum.includes(number)==false)[
        checknum.push(number)
    ]
}
return checknum;
}
const checkage=duplicateNumber(fdAge);
console.log(checkage)