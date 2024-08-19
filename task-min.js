
let shoppingList = [
  { name: "Молоко", quantity: 2, bought: false, pricePerUnit: 30, sum: 60 },
  { name: "Хліб", quantity: 1, bought: true, pricePerUnit: 15, sum: 15 },
  { name: "Яблука", quantity: 5, bought: false, pricePerUnit: 10, sum: 50 },
  { name: "Кава", quantity: 1, bought: true, pricePerUnit: 100, sum: 100 },
  { name: "Цукор", quantity: 3, bought: false, pricePerUnit: 20, sum: 60 },
];


function displayShoppingList(list) {
  console.log("Список покупок:");
  list.forEach((item) => {
    const status = item.bought ? "придбано" : "не придбано";
    console.log(
      `- ${item.name} (Кількість: ${item.quantity}, Ціна за одиницю: ${item.pricePerUnit} грн, Сума: ${item.sum} грн, Статус: ${status})`
    );
  });
}


function displayShoppingListSorted(list) {
  const notBoughtItems = list.filter((item) => !item.bought);
  const boughtItems = list.filter((item) => item.bought);
  const sortedList = [...notBoughtItems, ...boughtItems];

  displayShoppingList(sortedList);
}


function buyProduct(list, productName) {
  const product = list.find((item) => item.name === productName);
  if (product) {
    product.bought = true;
    console.log(`Продукт "${productName}" відзначено як придбаний.`);
  } else {
    console.log(`Продукт "${productName}" не знайдено в списку.`);
  }
}


displayShoppingListSorted(shoppingList);

buyProduct(shoppingList, "Яблука"); 

displayShoppingListSorted(shoppingList); 
