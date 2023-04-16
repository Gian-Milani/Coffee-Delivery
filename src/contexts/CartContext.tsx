import { ReactNode, createContext, useState } from 'react'
import { ListCoffee } from '../utils/ListCoffee'

export interface CoffeeProps {
  id: number
  urlImage: string
  title: string
  value: string
  amount: number
}

interface AddCoffeeToSelectedListProps {
  coffeeId: number | undefined
  count: number | undefined
}

interface CartContextProps {
  selectedCoffees: CoffeeProps[]
  addCoffeeToSelectedList: ({
    coffeeId,
    count,
  }: AddCoffeeToSelectedListProps) => void
  removeCoffeeToSelectedList: (coffeeId: number) => void
  emptyListCoffee: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeeProps[]>([])

  function addCoffeeToSelectedList({
    coffeeId,
    count,
  }: AddCoffeeToSelectedListProps) {
    if (count === 0) {
      return false
    }

    const coffeeOnList = selectedCoffees.find(
      (coffee: CoffeeProps) => coffee.id === coffeeId,
    )

    if (coffeeOnList !== undefined && coffeeOnList?.amount !== count) {
      const updateCoffeeSelected = {
        id: coffeeOnList?.id,
        urlImage: coffeeOnList?.urlImage,
        title: coffeeOnList?.title,
        value: coffeeOnList?.value,
        amount: count,
      }

      const newSelectedCoffees = selectedCoffees.filter(
        (coffee: CoffeeProps) => {
          return coffee.id !== coffeeId
        },
      )

      setSelectedCoffees([...newSelectedCoffees, { ...updateCoffeeSelected }])
    } else {
      const coffeeSelected = ListCoffee.find((coffee) => coffee.id === coffeeId)

      setSelectedCoffees([
        ...selectedCoffees,
        {
          id: coffeeSelected.id,
          urlImage: coffeeSelected.image,
          title: coffeeSelected.title,
          value: coffeeSelected.value,
          amount: count,
        },
      ])
    }
  }

  function removeCoffeeToSelectedList(coffeeId: number) {
    console.log(coffeeId)
    const newSelectedCoffees = selectedCoffees.filter((coffee: CoffeeProps) => {
      return coffee.id !== coffeeId
    })
    setSelectedCoffees([...newSelectedCoffees])
  }

  function emptyListCoffee() {
    setSelectedCoffees([])
  }

  return (
    <CartContext.Provider
      value={{
        selectedCoffees,
        addCoffeeToSelectedList,
        removeCoffeeToSelectedList,
        emptyListCoffee,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
