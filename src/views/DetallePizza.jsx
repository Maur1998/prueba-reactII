import { useContext } from "react"
import { PizzaContext } from "../context/PizzaContext"
import { useParams } from "react-router-dom"

export const DetallePizza = () => {
  const {pizzaData, setPizzaData, total, setTotal, cart, setCart} = useContext(PizzaContext);

  const handleCart = (pizzaData) => {
    const match = cart.filter((cpizza) => cpizza.id === pizzaData.id);
    if (match.length > 0) {
      const otherPizza = cart.filter((opizza) => opizza.id !== pizzaData.id);
      if (otherPizza.length > 0) {
        setCart([
          ...otherPizza,
          { ...pizzaData, nro: match[0].nro + 1 },
        ]);
      } else {
        setCart([{ ...pizzaData, nro: match[0].nro + 1 }]);
      }
    } else {
      setCart([...cart, { ...pizzaData, nro: 1 }]);
    }
    setTotal(total + pizzaData.price);
  };
  return (
    <div className="container">
        <div className="d-flex my-5">
          <img src={pizzaData.img} alt={pizzaData.name} width={"50%"}/>
          <div className="d-flex flex-column justify-content-center mx-2" style={{textAlign:"start"}}>
            <h1>{pizzaData.name}</h1>
            <p>{pizzaData.desc}</p>
            {pizzaData.ingredients.map(ingredient => (
              <div key={ingredient}>
                🍕 {ingredient}
              </div>
            ))}
            <div className="d-flex justify-content-between">
              <h1>Precio: {pizzaData.price}$</h1>
              <button className='btn btn-danger' onClick={()=> handleCart(pizzaData)}>Añadir</button>
            </div>
          </div>
        </div>
    </div>
  )
}
