import { Children, createContext, useReducer } from 'react'

export const store = createContext()

const initialState = {
  cart: { cartItem: [] },
}

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newitem = action.payload
      const existitem = state.cart.cartItem.find(
        (item) => item.slug === newitem.slug
      )
      const cartItem = existitem
        ? state.cart.cartItems.map((item) =>
            item.name === existitem.name ? newitem : item
          )
        : [...state.cart.cart, newitem]
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    case 'CART_REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.slug !== action.payload.slug
      )
    }
    default:
      return state
  }
}

export function StoreProvider({ Children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return StoreProvider
}
