import React, { createContext, useReducer } from "react";
import appReducer from "./appReducer";

const initialState = {
  selectedStock: 'APPL',
  stocks: []
}
export const AppContext = createContext(initialState);

export const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  function addStock(stock) {
    dispatch({
      type: 'ADD_STOCK',
      payload: stock
    })
  }

  function deleteStock(stockId) {
    dispatch({
      type: 'DELETE_STOCK',
      payload: stockId
    })
  }

  const providerState = {
    ...state,
    addStock,
    deleteStock,
  }

  return (
    <AppContext.Provider value={providerState}>
      {children}
    </AppContext.Provider>
  )
}