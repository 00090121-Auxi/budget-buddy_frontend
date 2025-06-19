// dummy data for financial advice table
const financialData = [
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

// function that generates simplified rows
export function renderFinancialTable(data = financialData) {
  const tbody = document.querySelector("#financial-table-body");
  if (!tbody) return;

  tbody.innerHTML = data
    .map((tx, index) => `
      <tr data-index="${index}" class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
        <td class="py-3 text-gray-800 text-theme-sm dark:text-white">${tx.tittle}</td>
        <td class="py-3 text-gray-500 text-theme-sm dark:text-gray-400">${tx.date}</td>
      </tr>
    `).join("");

  const rows = tbody.querySelectorAll("tr");

  rows.forEach((row, index) => {
    row.addEventListener("click", () => {
      if (typeof updateTransactionCard === "function") {
        updateTransactionCard(data[index]);

        // visually highlighting the selected row
        rows.forEach(r => r.classList.remove("bg-gray-100", "dark:bg-gray-800"));
        row.classList.add("bg-gray-100", "dark:bg-gray-800");
      }
    });
  });

    // showing the latest transaction in the card
  if (data.length > 0 && typeof updateTransactionCard === "function") {
    updateTransactionCard(data[0]);
    rows[0]?.classList.add("bg-gray-100", "dark:bg-gray-800");
  }
  
}

