import { Counter } from '../../components/Counter'
import { CartContext, CoffeeProps } from '../../contexts/CartContext'
import { CompleteOrder, Main, PaymentType, SelectedCoffees } from './style'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
  Trash,
} from 'phosphor-react'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { OrderContext } from '../../contexts/OrderContext'

const orderDataSchema = z.object({
  cep: z
    .string()
    .nonempty('CEP é obrigatório')
    .min(8, 'O CEP deve conter no mínimo 8 caracteres'),
  street: z.string().nonempty('Nome da rua é obrigatório'),
  complement: z.string().optional(),
  number: z.coerce.number().min(1, 'Número inválido'),
  neighborhood: z.string().nonempty('Bairro é obrigatório'),
  city: z.string().nonempty('Cidade é obrigatória'),
  state: z
    .string()
    .nonempty('UF obrigatória')
    .min(2, 'UF inválida')
    .max(2, 'UF inválida')
    .toUpperCase(),
})

type OrderDataType = z.infer<typeof orderDataSchema>

export function Checkout() {
  const { selectedCoffees, removeCoffeeToSelectedList } =
    useContext(CartContext)

  const { saveOrderData } = useContext(OrderContext)

  const [paymentActive, setPaymentActive] = useState(1)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderDataType>({
    resolver: zodResolver(orderDataSchema),
  })

  const selectedCoffeesValues = selectedCoffees.map((coffee: CoffeeProps) => {
    return parseInt(coffee.value) * coffee.amount
  })

  let coffeesTotalValue = 0
  for (let i = 0; i < selectedCoffeesValues.length; i++) {
    coffeesTotalValue += selectedCoffeesValues[i]
  }

  function returnOrderData(data: any) {
    const order = { ...data, paymentActive }
    return saveOrderData(order)
  }

  const coffeesListEmpty = selectedCoffees.length === 0

  return (
    <Main>
      <div className="containerCompleteOrder">
        <h4>Complete seu pedido</h4>
        <CompleteOrder>
          <div className="formContainer">
            <div className="addressTitle">
              <MapPinLine size={22} color="#C47F17" />
              <div className="titleText">
                <span>Endereço de entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <form>
              <section className="cep row">
                <input
                  type="text"
                  placeholder="CEP"
                  max={9}
                  {...register('cep')}
                />
                {errors.cep && <p>{errors.cep.message}</p>}
              </section>

              <section className="street">
                <input type="text" placeholder="Rua" {...register('street')} />
                {errors.street && <p>{errors.street.message}</p>}
              </section>

              <section className="row">
                <div className="number">
                  <input
                    type="number"
                    placeholder="Número"
                    {...register('number')}
                  />
                  {errors.number && <p>{errors.number.message}</p>}
                </div>

                <div className="complement">
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                </div>
              </section>

              <section className="row">
                <div className="neighborhood">
                  <input
                    type="text"
                    placeholder="Bairro"
                    {...register('neighborhood')}
                  />
                  {errors.neighborhood && <p>{errors.neighborhood.message}</p>}
                </div>

                <div className="city">
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register('city')}
                  />
                  {errors.city && <p>{errors.city.message}</p>}
                </div>

                <div className="state">
                  <input
                    type="text"
                    placeholder="UF"
                    className="uf"
                    {...register('state')}
                  />
                  {errors.state && <p>{errors.state.message}</p>}
                </div>
              </section>
            </form>
          </div>

          <div className="payment">
            <div className="paymentTitle">
              <CurrencyDollar size={22} color="#8047F8" />
              <div className="paymentText">
                <span>Pagamento</span>
                <p>
                  O pagamento será feito na entrega. Escolha a forma que deseja
                  pagar.
                </p>
              </div>
            </div>

            <div className="paymentTypes">
              <PaymentType
                onClick={() => setPaymentActive(1)}
                className={paymentActive === 1 ? 'typeSelected' : ''}
              >
                <CreditCard size={16} color="#8047F8" />
                <span>CARTÃO DE CRÉDITO</span>
              </PaymentType>

              <PaymentType
                onClick={() => setPaymentActive(2)}
                className={paymentActive === 2 ? 'typeSelected' : ''}
              >
                <Money size={16} color="#8047F8" />
                <span>CARTÃO DE DÉBITO</span>
              </PaymentType>

              <PaymentType
                onClick={() => setPaymentActive(3)}
                className={paymentActive === 3 ? 'typeSelected' : ''}
              >
                <Bank size={16} color="#8047F8" />
                <span>DINHEIRO</span>
              </PaymentType>
            </div>
          </div>
        </CompleteOrder>
      </div>

      <div className="containerSelectedCoffees">
        <h4>Cafés selecionados</h4>
        <SelectedCoffees>
          {selectedCoffees.map((coffee: CoffeeProps) => {
            const totalCoffeeValue = parseInt(coffee.value) * coffee.amount
            return (
              <div className="coffeeCard" key={coffee.id}>
                <img src={coffee.urlImage} alt="Expresso tradicional" />
                <div className="actions">
                  <p>{coffee.title}</p>
                  <div className="buttons">
                    <Counter
                      visibledCart={false}
                      amount={coffee.amount}
                      coffeeId={coffee.id}
                    />

                    <button
                      className="remove"
                      onClick={() => {
                        removeCoffeeToSelectedList(coffee.id)
                      }}
                    >
                      <Trash size={16} color="#8047F8" />
                      <span>REMOVER</span>
                    </button>
                  </div>
                </div>
                <strong>R$ {totalCoffeeValue},00</strong>
              </div>
            )
          })}

          <div className="totalizer">
            <p>
              <small>Total de itens</small>
              <span>R$ {coffeesTotalValue},00</span>
            </p>
            <p>
              <small>Entrega</small>
              <span>4,00</span>
            </p>

            <p>
              <strong>Total</strong>
              <strong>
                R$ {coffeesTotalValue <= 0 ? 0 : coffeesTotalValue + 4},00
              </strong>
            </p>

            <button
              onClick={handleSubmit(returnOrderData)}
              disabled={coffeesListEmpty}
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </SelectedCoffees>
      </div>
    </Main>
  )
}
