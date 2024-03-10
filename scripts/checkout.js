import { cart,deleteFromCart } from "../data/cart.js";
let input = ``;
let total=0;

cart.forEach((value)=>{
    input+=`<div class="cart-item-container ${value.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${value.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${value.name}
        </div>
        <div class="product-price">
        ${(value.priceCents/100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">2</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary" data-delete-item="${value.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="${value.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="${value.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="${value.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    total+=(value.priceCents*value.quantity);
})

let shipp = total+499;
document.getElementsByClassName('order-summary')[0].innerHTML=input;

document.getElementsByClassName('payment-summary')[0].innerHTML=`<div class="payment-summary-title">
Order Summary
</div>

<div class="payment-summary-row">
<div>Items (3):</div>
<div class="payment-summary-money">$${total/100}</div>
</div>

<div class="payment-summary-row">
<div>Shipping &amp; handling:</div>
<div class="payment-summary-money">$4.99</div>
</div>

<div class="payment-summary-row subtotal-row">
<div>Total before tax:</div>
<div class="payment-summary-money">$${shipp/100}</div>
</div>

<div class="payment-summary-row">
<div>Estimated tax (10%):</div>
<div class="payment-summary-money">$${shipp/1000}</div>
</div>

<div class="payment-summary-row total-row">
<div>Order total:</div>
<div class="payment-summary-money">$${((shipp/100)+(shipp/1000)).toFixed(2)}</div>
</div>

<button class="place-order-button button-primary">
Place your order
</button>
</div>`;

document.querySelectorAll('.delete-quantity-link').forEach((button)=>{
    button.addEventListener('click',()=>{
        deleteFromCart(button.dataset.deleteItem);
        document.getElementsByClassName(button.dataset.deleteItem)[0].remove();
    });
})