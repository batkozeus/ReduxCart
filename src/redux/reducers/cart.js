const initialState = [];

export default function cart(state = initialState, { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const inCart = state.find(el => el.id === payload);

      if (inCart) {
        return state.map(
          el => (el.id === payload ? { ...el, quantity: el.quantity + 1 } : el),
        );
      }

      return [...state, { id: payload, quantity: 1 }];
    }
    case 'REMOVE_FROM_CART': {
      return state.filter(
        el => el.id !== payload,
      );
    }
    case 'INCREASE_QUANTITY': {
      return state.map(
        el => (el.id === payload ? { ...el, quantity: el.quantity + 1 } : el),
      );
    }
    case 'DECREASE_QUANTITY': {
      const inCart = state.find(el => el.id === payload);
      if (inCart.quantity > 0) {
        return state.map(
          el => (el.id === payload ? { ...el, quantity: el.quantity - 1 } : el),
        );
      }
      else {
        return state
      }
    }
    default:
      return state;
  }
}
