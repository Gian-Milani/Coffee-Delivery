import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Actions } from './styles'
import { CartContext } from '../../contexts/CartContext'

interface CounterProps {
  visibledCart: boolean
  amount?: number
  coffeeId: number | undefined
}

export function Counter({ visibledCart, amount, coffeeId }: CounterProps) {
  const [count, setCount] = useState(0)

  const { addCoffeeToSelectedList } = useContext(CartContext)

  function alterCount(value: number) {
    if (count + value < 0) {
      value = 0
    }

    setCount(value)
    if (amount) {
      returnTheCount()
    }
  }

  function returnTheCount() {
    return addCoffeeToSelectedList({ coffeeId, count })
  }

  return (
    <Actions>
      <div className="buttons-count">
        <button onClick={() => alterCount(count - 1)}>
          <Minus size={16} />
        </button>
        <span>{amount || count}</span>
        <button onClick={() => alterCount(count + 1)}>
          <Plus size={16} />
        </button>
      </div>
      <button
        onClick={returnTheCount}
        className={visibledCart ? 'cart' : 'cart notVisibled'}
      >
        <ShoppingCart weight="fill" size={20} />
      </button>
    </Actions>
  )
}
