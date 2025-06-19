// dummy data for transactions
const transactions = [
  {
    tittle: "Macbook Pro 13”",
    description: "Bought a new laptop",
    category: "Laptop",
    date: "2024/03/31",
    type: "Private",
    amount: "$2399.00",
  },
  {
    tittle: "Spotify Subscription",
    description: "Monthly music plan",
    category: "Entertainment",
    date: "2024/04/01",
    type: "Public",
    amount: "$9.99",
  },
  {
    tittle: "Apple Watch Ultra",
    description: "Bought a new smartwatch",
    category: "Watch",
    date: "2024/04/01",
    type: "Public",
    amount: "$879.00",
  },
  {
    tittle: "iPhone 15 Pro Max",
    description: "Bought mom a new phone",
    category: "Phone",
    date: "2024/04/01",
    type: "Private",
    amount: "$1869.00",
  },
    {
    tittle: "AirPods Pro 2nd Gen",
    description: "Bought new wireless earbuds",
    category: "Earbuds",
    date: "2024/04/01",
    type: "Public",
    amount: "$240.00",
  }

];

// function that generates table rows for transactions
function generateTransactionRow(tx) {
  const typeClass =
    tx.type === "Private"
      ? "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500"
      : "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500";

  return `
    <tr>
      <td class="py-3">
        <div>
          <p class="font-medium text-gray-800 text-theme-sm dark:text-white/90">
            ${tx.tittle}
          </p>
          <span class="text-gray-500 text-theme-xs dark:text-gray-400">
            ${tx.description}
          </span>
        </div>
      </td>
      <td class="py-3">
        <p class="text-gray-500 text-theme-sm dark:text-gray-400">${tx.category}</p>
      </td>
      <td class="py-3">
        <p class="text-gray-500 text-theme-sm dark:text-gray-400">${tx.date}</p>
      </td>
      <td class="py-3">
        <p class="inline-flex items-center rounded-full px-2 py-0.5 text-theme-xs font-medium ${typeClass}">
          ${tx.type}
        </p>
      </td>
      <td class="py-3">
        <p class="text-gray-500 text-theme-sm dark:text-gray-400">${tx.amount}</p>
      </td>
    </tr>
  `;
}

// rendering table with transactions data
export function renderTransactionTable(data = transactions) {
  const tbody = document.querySelector("tbody");
  if (!tbody) return;

  tbody.innerHTML = data.map(generateTransactionRow).join("");
}
