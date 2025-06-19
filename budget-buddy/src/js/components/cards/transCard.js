function updateTransactionCard(transaction) {
  const card = document.querySelector("#transaction-card");
  if (!card) return;

  card.innerHTML = `
    <div class="px-4 py-4 sm:pl-6 sm:pr-4">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white/90">
          ${transaction.tittle}
        </h3>
        <span class="text-sm text-gray-400">Username</span> 
      </div>
    </div>
    <div class="border-t border-gray-100 p-4 dark:border-gray-800 sm:p-6 py-4">
      <h4 class="text-xl font-semibold text-gray-800 dark:text-white py-4">
        ${transaction.description}
      </h4>
      <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">
        ${transaction.amount || "$0.00"}
      </p>

      <div class="grid grid-cols-2 gap-6 mt-6 py-4">
        <div>
          <p class="text-sm text-gray-500 dark:text-gray-400">Date</p>
          <p class="text-base text-gray-800 dark:text-white">${transaction.date}</p>
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500 dark:text-gray-400">Category</p>
          <p class="text-base text-gray-800 dark:text-white">${transaction.category || "N/A"}</p>
        </div>
      </div>
        <div mt-2>
          <p class="text-sm text-gray-500 dark:text-gray-400">Type</p>
          <p class="text-base text-gray-800 dark:text-white">${transaction.type || "N/A"}</p>
        </div>
    </div>
  `;
}

// exporting the function to be used in other scripts just in case
window.updateTransactionCard = updateTransactionCard;
