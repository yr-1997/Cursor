const androidPhonePrice = 15.678;
const iphonePhonePrice = 123.965;
const windowsPhonePrice = 90.2345;
const maxPrice = Math.max(androidPhonePrice , iphonePhonePrice , windowsPhonePrice);
console.log(maxPrice);
const minPrice = Math.min(androidPhonePrice , iphonePhonePrice , windowsPhonePrice);
console.log(minPrice);
const totalPrice = (androidPhonePrice + iphonePhonePrice + windowsPhonePrice );
console.log(totalPrice);
const avaragePrice = Math.round(totalPrice);
console.log(avaragePrice);
const roundengSum = Math.floor( androidPhonePrice) + Math.floor(iphonePhonePrice) + Math.floor(windowsPhonePrice);
console.log(roundengSum);
let underRounded = Math.round(roundengSum/100)*100;
console.log(underRounded);
if(underRounded%2 === 0){
    console.log(true);
} else{
    console.log(false);
}
const client = 500;
const surrenderClient = Math.abs(roundengSum-client);
console.log(surrenderClient);
const avarage = Math.floor(((iphonePhonePrice + androidPhonePrice + windowsPhonePrice)*100) / 3) / 100;
console.log(avarage);
const randomSale = Math.floor(Math.random()*100) +1;
console.log(randomSale);
const clientSalePay = Number((totalPrice - (totalPrice / 100 * randomSale)).toFixed(2));
console.log(clientSalePay);
const PhoneCostPrice = totalPrice / 2;
console.log(PhoneCostPrice);
const clearSalary = Number((PhoneCostPrice - (totalPrice / 100 * randomSale)).toFixed(2));
console.log(clearSalary); 

  console.log(
      `максимальное число ${maxPrice} 
       минимальное число ${minPrice}
       вартість товарів  ${totalPrice}
       округленна вартість без копійок ${roundengSum}
       округленна сума до сотень ${underRounded}
       булеве значення ${true}
       сума решти від вартості товару ${surrenderClient}
       середнє значення цін ${avarage}
       випадкова знижка ${randomSale}%
       результат після знижки ${clearSalary}`
  );

