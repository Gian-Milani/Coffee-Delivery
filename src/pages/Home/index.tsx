import { IntroSection } from './components/IntroContainer'
import { Card, Menu } from './styles'
import { ListCoffee } from '../../utils/ListCoffee'
import { Counter } from '../../components/Counter'

export function Home() {
  return (
    <>
      <IntroSection />

      <Menu>
        <h1>Nossos cafés</h1>

        <div className="coffee-list">
          {ListCoffee.map((coffee) => {
            return (
              <>
                <Card key={coffee.id}>
                  <img src={coffee.image} alt={coffee.description} />

                  <div className="types">
                    {coffee.type.map((type) => {
                      return <label key={type.text}>{type.text}</label>
                    })}
                  </div>

                  <h3>{coffee.title}</h3>
                  <p>{coffee.description}</p>

                  <div className="coffee-buy">
                    <span>
                      R$ <strong>{coffee.value}</strong>
                    </span>
                    <div className="coffee-actions">
                      <Counter coffeeId={coffee.id} visibledCart={true} />
                    </div>
                  </div>
                </Card>
              </>
            )
          })}
        </div>
      </Menu>
    </>
  )
}
