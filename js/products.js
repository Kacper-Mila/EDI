/**
 * This function renders the table with the data
 */
function renderTable(filteredData) {
    const tableBody = document
        .getElementById("table")
        .getElementsByTagName("tbody")[0];
    tableBody.innerHTML = "";

    filteredData.forEach((item) => {
        const row = tableBody.insertRow();

        // Populate each cell with the item's property
        for (const key in item) {
            const cell = row.insertCell();
            cell.innerText = item[key];
        }
    });
}

/**
 * This function filters data based on the selected option in the dropdown menu
 */
function filterData() {
    const filterOption = document.getElementById("dropdown_list").value;

    getData()
        .then((data) => {
            let filteredData = [];

            if (filterOption === "everything") {
                // This shows all data if "Everything" is selected
                filteredData = data;
            } else {
                // Filter data based on the selected category
                filteredData = data.filter(
                    (item) => item.category === filterOption
                );
            }

            // Render the table with filtered data
            renderTable(filteredData);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

filterData();
