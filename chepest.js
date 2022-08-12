// const phone=[
//     {name:'samsung',price:25500,model:'67x',ram:'32gb'},
//     {name:'iphone',price:35500,model:'67x',ram:'32gb'},
//     {name:'htc',price:45500,model:'67x',ram:'32gb'},
//     {name:'oppo',price:50,model:'67x',ram:'32gb'},
//     {name:'xoam',price:65500,model:'67x',ram:'32gb'},
//     {name:'Walton',price:500,model:'67x',ram:'32gb'},
// ];

// function lowestPrice(phones){
//      checlow=phones[0];
//   for(let i=0;i<phones.length;i++){
//      const phone=phones[i];
//     if(phone.price<checlow.price){
//         checlow=phone
//     }

//   }
//   return checlow;
// };
// const myArry=lowestPrice(phone);
// console.log(myArry);



const product=[
  {name:'samsung',price:25500,model:'67x',ram:'32gb'},
  {name:'iphone',price:35500,model:'67x',ram:'32gb'},
  {name:'htc',price:45500,model:'67x',ram:'32gb'},
  {name:'oppo',price:50,model:'67x',ram:'32gb'},
  {name:'xoam',price:65500,model:'67x',ram:'32gb'},
  {name:'Walton',price:500,model:'67x',ram:'32gb'},
];

function lowcost(allobject){
  alllow=allobject[0];
for(let i=0;i<allobject.length;i++){
   const index=i;
   const p=allobject[index];
   if(p.price<alllow.price){
   alllow=p
   }
    
}
return alllow;
}
const checklow=lowcost(product);
console.log(checklow);