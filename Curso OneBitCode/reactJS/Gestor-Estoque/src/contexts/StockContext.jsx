import { createContext, useState } from "react";


export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('obc-react-stock')
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    })
    return items
  })
  const addItem = item => {
    setItems(current => {
      const updatedItems = [item, ...current]
      localStorage.setItem('obc-react-stock', JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const getItem = itemID => {
    return items.find(item => item.id == +itemID)
  }

  const updateItem = (itemID, newAttributes) => {
    setItems(currentState => {
      const itemIndex = currentState.findIndex(i => i.id === +itemID)
      const updateItens = [...currentState]
      Object.assign(updateItens[itemIndex], newAttributes, {updatedAt: new Date()})
      return updateItens
    })
  }

  const removeItem = (itemID) => {
    setItems(currentState => {
      const itens = currentState.filter(item => item.id !== itemID)
      localStorage.setItem('obc-react-stock', JSON.stringify(itens))
      return itens
    });
  }

  const stock = {
    items,
    addItem,
    removeItem,
    getItem,
    updateItem
  }
  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  )
}

export const StockContext = createContext({})