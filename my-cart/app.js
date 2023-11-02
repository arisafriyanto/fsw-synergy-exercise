const DISCOUNT = 0.1; // 10%
const SHIPPING_FEE = 100;
const priceFormatter = (currency, price) => {
  const local = navigator.language;
  const decimalPrice = Number(price).toFixed(2).split(".")[1];
  const formattedPrice = Number(price).toLocaleString(local, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${currency}${formattedPrice.replace(
    /^([\d,]+)(.\d*)?$/g,
    "$1"
  )}.${decimalPrice}`;
};

const productText = document.getElementById("product-text");
const subTotalText = document.getElementById("subtotal-text");
const discountText = document.getElementById("discount-text");
const shippingFeeText = document.getElementById("shipping-fee-text");
const totalText = document.getElementById("total-text");

discountText.innerHTML = DISCOUNT;
shippingFeeText.innerHTML = `Rp${SHIPPING_FEE}`;

const inputItemName = document.getElementById("itemName");
const inputPrice = document.getElementById("price");
const inputQty = document.getElementById("qty");
const formCart = document.getElementById("form-cart");

function onChangeInputName(e) {
  productText.textContent = e.target.value;
  inputItemName.value;
}

function onSubmitCart(e) {
  e.preventDefault();
  const price = parseFloat(inputPrice.value);
  const qty = parseInt(inputQty.value);
  if (isNaN(qty) || isNaN(price)) {
    alert("some input might be invalid, please check your input");
    return;
  }
  if (qty <= 0 || price <= 0) {
    alert("input cannot be a negative value or zero");
    return;
  }
  const subtotal = price * qty;
  const discount = subtotal * DISCOUNT;
  const total = subtotal - discount + SHIPPING_FEE;
  subTotalText.innerHTML = priceFormatter("Rp", subtotal.toFixed(2));
  discountText.innerHTML = priceFormatter("Rp", discount.toFixed(2));
  totalText.innerHTML = priceFormatter("Rp", total.toFixed(2));
}

inputItemName.addEventListener("change", onChangeInputName);
formCart.addEventListener("submit", onSubmitCart);
