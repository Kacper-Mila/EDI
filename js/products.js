/**
 * This function renders the table with the data
*/


function renderTable(filteredData) {
    setTimeout(() => {
        const productContainer = document.querySelector("#product-container");
        productContainer.innerHTML = "";
        
        filteredData.forEach((item) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product-div", "mt-3", "border", "rounded", "row", "py-2", "shadow-sm");

            const img = document.createElement("img");
            img.src = getItemImage(item.category);
            img.alt = item.product_name + " " + item.brand;
            img.classList.add("product-img", "col-3", "rounded", "object-fit-cover");
            productDiv.appendChild(img);

            const labelDiv = document.createElement("div");
            labelDiv.classList.add("col", "d-gird", "align-items-center");
            
            const nameLabel = document.createElement("label");
            nameLabel.innerText = item.brand + " " + item.product_name;
            nameLabel.classList.add("fs-4", "fw-bold");
            labelDiv.appendChild(nameLabel);

            const list = document.createElement("ul");
            list.classList.add("list-group", "list-group-flush", "fs-6");
            const listBullet1 = document.createElement("li");
            listBullet1.classList.add("list-group-item");
            listBullet1.innerText = "Lorem ipsum dolor sit amet";
            const listBullet2 = document.createElement("li");
            listBullet2.classList.add("list-group-item");
            listBullet2.innerText = "consectetur adipisicing elit.";
            const listBullet3 = document.createElement("li");
            listBullet3.classList.add("list-group-item");
            listBullet3.innerText = "Quisquam, voluptatum!";
            list.appendChild(listBullet1);
            list.appendChild(listBullet2);
            list.appendChild(listBullet3);
            labelDiv.appendChild(list);

            const priceDiv = document.createElement("div");
            priceDiv.classList.add("col", "d-gird", "align-items-center", "text-end", "px-5", "py-4");

            const priceLabel = document.createElement("p");
            priceLabel.innerText = item.price;
            priceLabel.classList.add("fs-2");
            priceDiv.appendChild(priceLabel);

            const buyButton = document.createElement("button");
            buyButton.innerText = "Buy now!";
            buyButton.classList.add("btn", "btn-warning", "fs-5", "px-4");
            priceDiv.appendChild(buyButton);

            productDiv.appendChild(labelDiv);
            productDiv.appendChild(priceDiv);
            productContainer.appendChild(productDiv);
        });
    }, 500);
}

function getItemImage(category) {
    switch (category) {
        case "Headphones":
            return "../assets/img/headphones.jpg";
        case "Smartphone":
            return "./assets/img/smartphone.jpg";
        case "TV":
            return "../assets/img/tv.png";
        case "Camera":
            return "../assets/img/camera.jpg";
        case "Tablet":
            return "../assets/img/tablet.png";
        case "Laptop":
            return "../assets/img/laptop.jpg";
        default:
            return "../assets/img/placeholder.png";
    }
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
            
            // Render the table with filtered and sorted data
            renderTable(filteredData);
        })
        .catch((error) => console.error("Error fetching data:", error));
}

filterData();
