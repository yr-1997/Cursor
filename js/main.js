const android = 15.678;
const iphone = 123.965;
const windowsPhone = 90.2345;
const ans = Math.max(android , iphone , windowsPhone);
console.log(ans);
const ans1 = Math.min(android , iphone , windowsPhone);
console.log(ans1);
const totalPrice = (android + iphone + windowsPhone );
console.log(totalPrice);
const ans3 = Math.round(totalPrice);
console.log(ans3);
const roundingPrice = 230;
const roundengSum = Math.floor( android) + Math.floor(iphone) + Math.floor(windowsPhone);
console.log(roundengSum);
let underRounded = 228;
underRounded = 228/100;
const value = Math.round(underRounded);
underRounded = value * 100;
console.log(underRounded);
if(underRounded%2 === 0){
    console.log(true);
} else{
    console.log(false);
}
const client = 500;
    const surrender = Math.abs(underRounded-client);
    console.log(surrender);
const avarage = Math.floor(((iphone + android + windowsPhone)*100) / 3) / 100;
console.log(avarage);
const random = getRandomInt;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  console.log(getRandomInt(100));
  const price = 200;
  const discountPercentage = 10 + Math.random() * (90 - 10 + 1);
  let discount = Number(discountPercentage.toFixed(2)) * Math.floor(price) / 100;
  console.log(discountPercentage);
  const sum = Math.floor(price / 2 - discount);
  console.log(sum);
  console.log(
      `максимальное число ${ans} 
       минимальное число ${ans1}
       вартість товарів  ${totalPrice}
       вартість без копійок ${roundingPrice}
       округленна сума до сотень ${underRounded}
       булеве значення ${underRounded}
       сума решти від вартості товару ${surrender}
       середнє значення цін ${avarage}
       ціна товару ${price}
       випадкова знижка ${discountPercentage}
       результат після знижки ${sum}`
  );

