import { HeaderContainer } from './styles'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
  const { selectedCoffees } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Coffee Delivery">
        <img src={logoCoffeeDelivery} alt="Copo de café" />
      </NavLink>

      <div className="actions">
        <span>
          <MapPin size={22} weight="fill" className="map" />
          Porto Feliz, SP
        </span>

        <NavLink to="/checkout" title="Checkout">
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </NavLink>
        {selectedCoffees.length !== 0 ? (
          <div className="notification">{selectedCoffees.length}</div>
        ) : (
          <></>
        )}
      </div>
    </HeaderContainer>
  )
}
