
interface CartItem {
  readonly productId: string;
  readonly quantity: number;
};

const tfetch = <T>(url: string, options: TypedFetchOptions): Promise<TypedResponse<T>> => {
  return fetch(url, options as any);
}

async function getCart() {
  const cart: CartItem[] = [];
  function addToCart(productId: string, quantity: number) {
    cart.push({ productId, quantity });
    displayCart();
  }
  function displayCart() {
    const cartDiv = document.getElementById('cart');
    if (!cartDiv) {
      alert('Cart element not found');
      return
    }
    cartDiv.innerHTML = '';
    cart.forEach((item, index) => {
      cartDiv.innerHTML += `<p>Product ID: ${item.productId}, Quantity: ${item.quantity} <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
  }

  function removeFromCart(index: number) {
    cart.splice(index, 1);
    displayCart();
  }
  const checkoutButton = document.getElementById('checkout-button');
  if (!checkoutButton) {
    alert('Checkout button not found');
    return
  }
  checkoutButton.addEventListener('click', async () => {
    const response = await tfetch<StripeCheckoutSession>('/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
    })
    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
        alert(result.error.message);
    }
  });
}

getCart();
