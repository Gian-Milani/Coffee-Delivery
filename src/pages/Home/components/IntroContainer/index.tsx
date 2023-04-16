import { IntroContainer } from './styles'
import CoffeeHome from '../../../../assets/coffee-home.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function IntroSection() {
  return (
    <IntroContainer>
      <div className="informations-container">
        <h1>Encontre o café prefeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café aonde estiver, a qualquer
          hora
        </p>

        <div className="items-container">
          <span>
            <div className="emoji yellow-dark">
              <ShoppingCart weight="fill" size={16} />
            </div>
            Compra simples e segura
          </span>
          <span>
            <div className="emoji black">
              <Package weight="fill" size={16} />
            </div>
            Entrega rápida e rastreada
          </span>
          <span>
            <div className="emoji yellow">
              <Timer weight="fill" size={16} />
            </div>
            Embalagem mantém o café intacto
          </span>
          <span>
            <div className="emoji purple">
              <Coffee weight="fill" size={16} />
            </div>
            O café chega fresquinho até você
          </span>
        </div>
      </div>
      <img src={CoffeeHome} alt="Copo de café com grãos de café" />
    </IntroContainer>
  )
}
