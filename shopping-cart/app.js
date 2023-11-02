const productButtons = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");
const cartSubTotal = document.getElementById("cart-subtotal");
const inputPromoCode = document.getElementById("promo-code");

const tBody = document.getElementById("table-cart-list");
const cartTotal = document.getElementById("cart-total");
const discountLabel = document.getElementById("discount");

inputPromoCode.addEventListener("change", discount);

const cartItems = [];

// promo
const promo = [
  {
    label: "DISC10",
    value: 0.1,
  },
  {
    label: "DISC50",
    value: 0.5,
  },
  {
    label: "DISC75",
    value: 0.75,
  },
];

function rupiah(num) {
  return new Intl.NumberFormat("id-ID").format(num);
}

productButtons.forEach((button) => {
  button.addEventListener("click", addToCart);
});

function addToCart(event) {
  const button = event.target;
  const productName = button.getAttribute("data-name");
  const productPrice = button.getAttribute("data-price");

  const existingProduct = cartItems.find((product) => product.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cartItems.push({ name: productName, price: productPrice, quantity: 1 });
  }

  displayCart();
}

function displayCart() {
  tBody.innerHTML = "";
  cartItems.map((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="py-3"><img src="https://picsum.photos/200" class="image-cart"/></td>
      <td>${product.name}</td>
      <td>Rp. ${rupiah(product.price)}</td>
      <td class="text-center">${product.quantity}</td>
    `;

    tBody.appendChild(row);
  });

  cartSubTotal.textContent = `Sub Total Rp. ${rupiah(calculateTotal())}`;
  cartTotal.textContent = `Total: Rp. ${rupiah(calculateTotal())}`;
  discount();
}

function calculateTotal() {
  let total = 0;

  cartItems.map((item) => {
    total += item.price * item.quantity;
  });

  return total;
}

function discount() {
  let subTotal = calculateTotal();
  let inputPromoValue = inputPromoCode.value;
  let promoApplied = false;

  if (inputPromoValue === "") {
    discountLabel.textContent = "-";
    return;
  }

  promo.forEach((code) => {
    if (inputPromoValue === code.label) {
      let discountValue = code.value * 100;
      let discountTotal = subTotal * code.value;
      subTotal -= discountTotal;

      discountLabel.textContent = `Discount: ${discountValue}% 
      sebesar Rp. ${rupiah(discountTotal)}`;
      cartTotal.textContent = `Total: Rp. ${rupiah(subTotal)}`;

      promoApplied = true;
    }
  });

  if (!promoApplied) {
    discountLabel.textContent = "Invalid promo code";
    cartTotal.textContent = `Total: Rp. ${rupiah(calculateTotal())}`;
  }
}
