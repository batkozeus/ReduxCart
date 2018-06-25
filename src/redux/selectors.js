import { createSelector } from 'reselect';

export const getAllProducts = state => state.products;

const getAllCards = state => state.cart;

const getCartProductsIds = state => state.cart.map(el => el.id);

const getCartProducts = createSelector(
  [getCartProductsIds, getAllProducts],
  (productsIds, allProducts) =>
    allProducts.filter(product => productsIds.includes(product.id)),
);

export const getCartProductsWithQuant = createSelector(
  [getAllCards, getCartProducts],
  (getAllCards, cartProducts) =>
  cartProducts.map(product => {
    const checker = getAllCards.find(el => el.id === product.id);
    return { ...product, ...checker};
  })
);

export const getTotalAmount = createSelector(
  [getCartProductsWithQuant],
  (cartProducts) =>
  cartProducts.reduce((acc, product) => acc + (product.quantity * product.price), 0),
);