
let total =0;
function addExpense() {
    const title = document.getElementById("titleInput").value;
    const amount= parseInt(document.getElementById("amountInput").value);

    if(title === "" ||  isNaN(amount))
        return;

    total +=amount;

    const li = document.createElement("li");
    li.textContent = `${title}: Rs${amount}`;

    // Milestone 3 : Delete feature
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE ITEM";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.onclick = function () {
        li.remove();
        total -= amount;
        document.getElementById("total").textContent = total;
    };
    li.appendChild(deleteBtn);

    document.getElementById("expenseList").appendChild(li);

    document.getElementById("total").textContent=total;

    document.getElementById("titleInput").value="";

    document.getElementById("amountInput").value="";
}