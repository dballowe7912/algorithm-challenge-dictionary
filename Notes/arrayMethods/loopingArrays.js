const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited $${movement}`);
//   } else {
//     console.log(`You withdrew $${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`You deposited $${movement}`);
//   } else {
//     console.log(`You withdrew $${Math.abs(movement)}`);
//   }
// });

// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You deposited $${movement}`);
//   } else {
//     console.log(`You withdrew $${Math.abs(movement)}`);
//   }
// }

// console.log(movements.entries());

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
