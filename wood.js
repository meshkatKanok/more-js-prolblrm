function woodPercft(quentity,quentity2,quentity3){
const perchair=3;
const pertable=10;
const perbed=50;
const multichar=perchair*quentity;
const multitable=pertable*quentity2;
const multibed=perbed*quentity3;
const pertotal=multichar+multitable+multibed;
return pertotal;
}
const total=woodPercft(0,0,3);
console.log(total);