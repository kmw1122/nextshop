import { createContext, useReducer } from 'react'

export const Store = createContext()

const initialState = {
  cart: { cartItems: [] },
}

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newitem = action.payload
      const existitem = state.cart.cartItem.find(
        (item) => item.slug === newitem.slug
      )
      const cartItems = existitem
        ? state.cart.cartItems.map((item) =>
            item.name === existitem.name ? newitem : item
          )
        : [...state.cart.cart, newitem]
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    default:
      return state
  }
}
// Provider 생성 -
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <Store.Provider value={value}>{children}</Store.Provider>
}
