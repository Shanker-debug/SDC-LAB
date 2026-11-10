let products = [
    {id: 1, name: "Product 1", price: 10},
    {id: 2, name: "Product 2", price: 20}
];

let cart = [];

function displayProducts() {
    products.forEach(p => {
        document.getElementById("products").innerHTML +=
        `<p>
            ${p.name} - $${p.price}
            <button onclick="addToCart(${p.id})">Add</button>
        </p>`;
    });
}

function addToCart(id) {
    let p = products.find(p => p.id === id);
    cart.push(p);
    displayCart();
}

function displayCart() {
    let total = 0;
    document.getElementById("cart").innerHTML = "";

    cart.forEach(p => {
        document.getElementById("cart").innerHTML +=
            `<p>${p.name} - $${p.price}</p>`;
        total += p.price;
    });

    document.getElementById("total").innerText =
        total.toFixed(2);
}

function checkout() {
    cart = [];
    displayCart();
    alert("Thank you for your purchase!");
}

displayProducts();
