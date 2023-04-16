import { ReactNode, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from './CartContext'

interface OrderProps {
  cep: string
  street: string
  complement?: string
  number: number
  neighborhood: string
  city: string
  state: string
  paymentActive: number
}

interface OrderContextProps {
  orderData: OrderProps
  saveOrderData: (order: OrderProps) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextProps)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderData, setOrderData] = useState<OrderProps>({} as OrderProps)

  const { emptyListCoffee } = useContext(CartContext)

  const navigate = useNavigate()
  const redirectToCompletedPage = () => navigate('/completed')

  function saveOrderData(order: OrderProps) {
    setOrderData(order)

    setTimeout(() => {
      redirectToCompletedPage()
      emptyListCoffee()
    }, 1200)
  }

  return (
    <OrderContext.Provider value={{ orderData, saveOrderData }}>
      {children}
    </OrderContext.Provider>
  )
}
