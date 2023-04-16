import { defaultTheme } from './styles/themes/default'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
