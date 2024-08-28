
let shoppingList = [
  { name: "Молоко", quantity: 2, bought: false, pricePerUnit: 30, sum: 60 },
  { name: "Хліб", quantity: 1, bought: true, pricePerUnit: 15, sum: 15 },
  { name: "Яблука", quantity: 5, bought: false, pricePerUnit: 10, sum: 50 },
  { name: "Кава", quantity: 1, bought: true, pricePerUnit: 100, sum: 100 },
  { name: "Цукор", quantity: 3, bought: false, pricePerUnit: 20, sum: 60 },
];


function calculateTotalSum(list) {
  const totalSum = list.reduce((sum, item) => sum + item.sum, 0);
  console.log(`Загальна сума всіх продуктів: ${totalSum} грн`);
  return totalSum;
}


function calculateSumByStatus(list, boughtStatus) {
  const totalSum = list
    .filter((item) => item.bought === boughtStatus)
    .reduce((sum, item) => sum + item.sum, 0);

  const status = boughtStatus ? "придбаних" : "непридбаних";
  console.log(`Загальна сума ${status} продуктів: ${totalSum} грн`);
  return totalSum;
}


function sortProductsBySum(list, ascending = true) {
  const sortedList = [...list].sort((a, b) => {
    return ascending ? a.sum - b.sum : b.sum - a.sum;
  });

  displayShoppingList(sortedList);
}


function displayShoppingList(list) {
  console.log("Список покупок:");
  list.forEach((item) => {
    const status = item.bought ? "придбано" : "не придбано";
    console.log(
      `- ${item.name} (Кількість: ${item.quantity}, Ціна за одиницю: ${item.pricePerUnit} грн, Сума: ${item.sum} грн, Статус: ${status})`
    );
  });
}


calculateTotalSum(shoppingList); 
calculateSumByStatus(shoppingList, true); 
calculateSumByStatus(shoppingList, false); 
console.log("Сортування продуктів від меншого до більшого:");
sortProductsBySum(shoppingList, true); 

console.log("Сортування продуктів від більшого до меншого:");
sortProductsBySum(shoppingList, false); 
