/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const catogeries = transactions.map((transaction) => transaction.category);
  const uniqueCategories = [...new Set(catogeries)];
  const result = uniqueCategories.map((category) => {
    const totalSpent = transactions.filter((transaction) => transaction.category === category)
      .reduce((acc, transaction) => acc + transaction.price, 0);
    return { category, totalSpent };
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
