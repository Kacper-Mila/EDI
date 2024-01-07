/**
 * This function is used to show the placeholder elements
 */
function showPlaceholder() {
    const products = document.querySelector("#product-container");
    products.innerHTML = "";

    for (let i = 0; i < 3; i++) {
        const placeholder = createPlaceholder();
        products.appendChild(placeholder);
    }
}

function createPlaceholder() {
    const placeholder = document.createElement("div");
    placeholder.classList.add(
        "product-div",
        "mt-3",
        "border",
        "rounded",
        "row",
        "py-2",
        "shadow-sm"
    );

    placeholder.appendChild(createImagePlaceholder());
    placeholder.appendChild(createLabelPlaceholder());
    placeholder.appendChild(createPricePlaceholder());

    return placeholder;
}

function createImagePlaceholder() {
    const img = document.createElement("div");
    img.classList.add("product-img", "col-3", "rounded", "object-fit-cover", "mx-2");
    img.style.backgroundColor = "gray";

    return img;
}

function createLabelPlaceholder() {
    const labelDiv = document.createElement("div");
    labelDiv.classList.add("col", "d-gird", "align-items-center");

    const nameSpan = document.createElement("span");
    nameSpan.classList.add("placeholder", "placeholder-glow", "col-3");

    const list = document.createElement("ul");
    list.classList.add("list-group", "list-group-flush");

    const li1 = document.createElement("li");
    li1.classList.add("list-group-item");

    const span1 = document.createElement("span");
    span1.classList.add("placeholder", "placeholder-glow", "col-4");
    li1.appendChild(span1);

    const li2 = document.createElement("li");
    li2.classList.add("list-group-item");

    const span2 = document.createElement("span");
    span2.classList.add("placeholder", "placeholder-glow", "col-4");
    li2.appendChild(span2);

    const li3 = document.createElement("li");
    li3.classList.add("list-group-item");

    const span3 = document.createElement("span");
    span3.classList.add("placeholder", "placeholder-glow", "col-4");
    li3.appendChild(span3);

    list.appendChild(li1);
    list.appendChild(li2);
    list.appendChild(li3);

    labelDiv.appendChild(nameSpan);
    labelDiv.appendChild(list);

    return labelDiv;
}

function createPricePlaceholder() {
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("col", "align-items-center", "text-end", "px-5", "py-4");

    const par = document.createElement("p");
    priceDiv.appendChild(par);

    const priceLabel = document.createElement("label");
    priceLabel.classList.add("row", "placeholder", "placeholder-glow", "col-4", "py-3", "mx-1");
    par.appendChild(priceLabel);

    const buyButtonPlaceholder = document.createElement("button");
    buyButtonPlaceholder.classList.add(
        "placeholder",
        "placeholder-glow",
        "mt-2",
        "col-4",
        "px-4",
        "btn",
    );
    priceDiv.appendChild(buyButtonPlaceholder);

    return priceDiv;
}