document.getElementById("search").addEventListener("keyup", function () {
    let filter = document.getElementById("filterBy").value;
    let searchText = this.value.toLowerCase();
    let rows = document.querySelectorAll("#residentTable tr");

    rows.forEach(row => {
        let cell;
        if (filter === "name") {
            cell = row.cells[0];
        } else if (filter === "gender") {
            cell = row.cells[1];
        } else if (filter === "address") {
            cell = row.cells[2];
        }

        if (cell) {
            let textValue = cell.textContent.toLowerCase();
            row.style.display = textValue.includes(searchText) ? "" : "none";
        }
    });
});
