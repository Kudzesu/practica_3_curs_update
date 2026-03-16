new Vue({
    el: '#app',
    data: {
        products: [
{ 
        id: 1, 
        title: "Long Slicing Cucumber", 
        short_text: "Fresh & Crunchy", 
        image: "img/t-all/cucumber1.png", 
        desc: "Premium hybrid for greenhouse production with natural freshness.", 
        characteristics: { 
            resistance: ["HR: Ccu; Px;", "IR: CMV; CVYV"], 
            plant: ["Vigorous growth with open habit for easy harvesting.", "High yield potential with consistent fruit setting.", "Early-maturing variety."], 
            cycle: ["Spring", "Fall", "Winter"], 
            fruit: ["Long shelf life post-harvest.", "Smooth dark green skin with no bitterness.", "Average fruit size: 30 – 35 cm."], 
            color: "Dark Green" 
        } 
    },
    { 
        id: 2, 
        title: "Crispy Gherkin", 
        short_text: "Perfect for Pickling", 
        image: "img/t-all/cucumber2.png", 
        desc: "Small, bumpy fruit designed for the best pickles.", 
        characteristics: { 
            resistance: ["HR: Ccu;", "IR: Px; Pcu; CMV"], 
            plant: ["Generative plant type with multi-fruit setting.", "Short internodes and small leaves.", "Fast-maturing variety."], 
            cycle: ["Spring", "Summer"], 
            fruit: ["Very crispy texture with small seed cavity.", "Bright green color with prominent bumps.", "Average fruit size: 6 – 9 cm."], 
            color: "Light Green" 
        } 
    },
    { 
        id: 3, 
        title: "Field Classic", 
        short_text: "Drought Tolerant", 
        image: "img/t-all/cucumber3.png", 
        desc: "Universal variety for open field and fresh market.", 
        characteristics: { 
            resistance: ["HR: Ccu; Px;", "IR: CMV"], 
            plant: ["Robust plant with excellent heat and drought tolerance.", "Strong root system ensuring stable production."], 
            cycle: ["Summer", "Fall"], 
            fruit: ["Uniform cylindrical shape with excellent aroma.", "Crunchy flesh with thin skin.", "Average fruit size: 12 – 14 cm."], 
            color: "Green" 
        } 
    },
    { 
        id: 4, 
        title: "Armenian Snake", 
        short_text: "Exotic & Sweet", 
        image: "img/t-all/cucumber4.png", 
        desc: "Unique ribbed texture with a mild, sweet flavor.", 
        characteristics: { 
            resistance: ["Moderate resistance to Powdery Mildew"], 
            plant: ["Vigorous climbing vine with high temperature resistance.", "Needs support for straight fruit growth."], 
            cycle: ["Summer"], 
            fruit: ["Long, light-green ribbed skin.", "Crisp, sweet flesh, never turns bitter.", "Average fruit size: 40 – 50 cm."], 
            color: "Silver Green" 
        } 
    },
    { 
        id: 5, 
        title: "White Wonder", 
        short_text: "Gourmet Choice", 
        image: "img/t-all/cucumber5.png", 
        desc: "Creamy white skin with tender and juicy flesh.", 
        characteristics: { 
            resistance: ["HR: Px;", "IR: CMV"], 
            plant: ["High vigor with dense leaf coverage for fruit protection.", "Productive even in variable soil conditions."], 
            cycle: ["Spring", "Fall"], 
            fruit: ["Elegant white skin with a smooth surface.", "Juicy and mild flavor, ideal for salads.", "Average fruit size: 15 – 18 cm."], 
            color: "Creamy White" 
        } 
    }
        ],
        product: {},
        cart: JSON.parse(localStorage.getItem('cart')) || {},
        cartBtnText: "Add to Cart",
        cartPageLink: "contact.html",
        orderPlaced: false,
        contactFields: { name: '', telephone: '', email: '', message: '', captcha: '' }
    },
    methods: {
        getProduct() {
            const productId = +window.location.hash.replace('#', '');
            this.product = this.products.find(p => p.id === productId) || {};
            this.updateCartButton();
        },
        updateCartButton() {
            this.cartBtnText = this.product.id && this.cart[this.product.id] ? "Go to Cart" : "Add to Cart";
        },
        addToCart(id) {
            if (!this.cart[id]) this.cart[id] = { ...this.products.find(p => p.id === id), quantity: 0 };
            this.cart[id].quantity++;
            this.saveCart();
            this.updateCartButton();
        },
        removeFromCart(id) {
            Vue.delete(this.cart, id);
            this.saveCart();
        },
        saveCart() {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        goToCart() {
            window.location.href = this.cartPageLink;
        },
        makeOrder() {
            this.cart = {};
            localStorage.removeItem('cart');
            this.orderPlaced = true;
        },
        submitForm() {
            if (Object.values(this.contactFields).some(field => !field)) return;
            this.makeOrder();
        }
    },
    mounted() {
        this.getProduct();
    }
});