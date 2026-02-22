// Flower Database (10 Items)
const flowerData = [
    { id: 1, name: "Red Rose", price: 299, color: "#ff4d6d" },
    { id: 2, name: "White Lily", price: 399, color: "#dfe6e9" },
    { id: 3, name: "Sun Flower", price: 199, color: "#feca57" },
    { id: 4, name: "Purple Orchid", price: 899, color: "#a29bfe" },
    { id: 5, name: "Tulips", price: 450, color: "#ff9f43" },
    { id: 6, name: "Lavender", price: 350, color: "#9c88ff" },
    { id: 7, name: "Daisy", price: 250, color: "#fab1a0" },
    { id: 8, name: "Jasmine", price: 150, color: "#f1f2f6" },
    { id: 9, name: "Marigold", price: 100, color: "#e67e22" },
    { id: 10, name: "Hibiscus", price: 200, color: "#ff7675" }
];

let cart = 0;

// Login Verification
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (user === "admin" && pass === "123") {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('shopPage').classList.remove('hidden');
        renderFlowers();
    } else {
        alert("Invalid Login! Use Username: admin & Password: 123");
    }
}

// Render 10 Flowers Automatically
function renderFlowers() {
    const container = document.getElementById('flowerContainer');
    container.innerHTML = "";

    flowerData.forEach(flower => {
        const card = document.createElement('div');
        card.className = 'flower-card';
        card.innerHTML = `
            <div class="flower-placeholder" style="background: ${flower.color}">
                ${flower.name}
            </div>
            <h3>${flower.name}</h3>
            <p class="price">₹${flower.price}</p>
            <button onclick="updateCart()">Add to Cart</button>
        `;
        container.appendChild(card);
    });
}

function updateCart() {
    cart++;
    document.getElementById('cartCount').innerText = cart;
    alert("Flower added to cart! 🌸");
}

function logout() {
    window.location.reload();
}