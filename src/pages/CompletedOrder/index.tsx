import { CompletedContainer } from './style'
import deliveryMan from '../../assets/delivery-man.svg'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

export function CompletedOrder() {
  const { orderData } = useContext(OrderContext)

  return (
    <CompletedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <main>
        <section className="orderInfo">
          <div className="location">
            <div className="icon">
              <MapPin weight="fill" size={18} />
            </div>
            <div className="info">
              <span>
                Entrega em <b>{`${orderData.street}, ${orderData.number}`}</b>
                {orderData.complement ? `, ${orderData.complement}` : ''}
              </span>
              <p>{`${orderData.neighborhood} - ${orderData.city}, ${orderData.state}`}</p>
            </div>
          </div>
          <div className="time">
            <div className="icon">
              <Timer weight="fill" size={18} />
            </div>
            <div className="info">
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div className="payment">
            <div className="icon">
              <CurrencyDollar weight="fill" size={18} />
            </div>
            <div className="info">
              <span>Pagamento na entrega</span>
              <strong>
                {(() => {
                  switch (orderData.paymentActive) {
                    case 1:
                      return 'Cartão de crédito'
                    case 2:
                      return 'Cartão de débito'
                    case 3:
                      return 'Dinheiro'
                    default:
                      return ''
                  }
                })()}
              </strong>
            </div>
          </div>
        </section>
        <section className="illustration">
          <img src={deliveryMan} alt="Entregador levando café" />
        </section>
      </main>
    </CompletedContainer>
  )
}
