import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './views/Home';
import { Menu } from './components/Menu';
import { DetallePizza } from './views/DetallePizza'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import PizzaProvider from './context/PizzaContext';
import { Carrito } from './views/Carrito';

function App() {

  return (
    <>
    <BrowserRouter>
      <PizzaProvider>
        <Menu />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizza/:id' element={<DetallePizza />} />
            <Route path='/cart' element={<Carrito />} />
          </Routes>
      </PizzaProvider>
    </BrowserRouter>
    </>
  )
}

export default App
