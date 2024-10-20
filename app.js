// 1. 1 den 100 e qeder edeleri ekrana cixarin hem for ile hem while ile
// for (let i = 1; i < 100; i++) {
//   console.log(i);
// }

// let i = 1;
// while (i < 100) {
//   console.log(i);
//   i++;
// }
//2. bir array yazin ve o array daki en kicik ededi tapan program yazin
// let arr = [12, 34, -56, 78, -32, 99, 7];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

//  3. bir array yazin ve o arraydaki en boyuk ededi tapan program yazin
// let arr2 = [12, 34, -56, 78, -32, 99, 7];
// let max = arr2[0];
// for (let i = 0; i < arr2.length; i++) {
//   if (arr2[i] > max) {
//     max = arr2[i];
//   }
// }
// console.log(max);

// 4. bir eded secin ve o ededin sade mi murekkeb mi oldugunu tapan program yazin ( sade eded sadece ozune ve 1 e bolunen ededir 11,13 ornek)
// let n = 21;
// let result = "sade eddir";
// for (let i = 2; i < n - 1; i++) {
//   if (n % i == 0) {
//     result = "murekkeb eddir";
//     break;
//   }
// }
// console.log(n + result);

//5.  bir array  yazin qarmasiq olsun o arrayi artan sira ile duzen program yazin

// let arr3 = [21, -34, 7, 12, 98, 4, -76, 8, -9];
// let newArr3 = [];
// let min = arr3[0];
// let time = 1;
// while (time < arr3.length) {
//   min = arr3[0];
//   for (let i = 0; i < arr3.length; i++) {
//     if (!newArr3.includes(arr3[i]) && arr3[i] < min) {
//       min = arr3[i];
//       //   console.log(min);
//     }
//   }
//   newArr3.push(min);
//   time++;
//   //   console.log(newArr3);
// }
// console.log(newArr3);

// 6. 1  den n e qeder ededlerin icindeki sade  ededleri tapan program yazin

// let num = 20;
// let count = 0;
// for (let i = 1; i < num; i++) {
//   count = 0;
//   for (let j = 2; j <= i; j++) {
//     if (i % j == 0) {
//       count++;
//     } else {
//     }
//   }
//   if (count < 2) {
//     console.log(i);
//   }
// }
