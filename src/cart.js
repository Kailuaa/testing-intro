function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity = 1) { 
  const existingProduct = cart.find((item) => item.id === product.id);
  const newQuantity = (existingProduct ? existingProduct.quantity : 0) + quantity;
  
  if (quantity <= 0) {
    throw new RangeError('Введите количество');
  };

  if (quantity > product.stock) {
    throw new RangeError('Количество превышает остаток');
  };
  

  if (existingProduct) {
    return cart.map((item) => (
      item.id === product.id
      ? { ...item, quantity: newQuantity }
      : item
    ));
  };

  return [...cart, { ...product, quantity }]; 
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
