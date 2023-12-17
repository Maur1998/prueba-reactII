import { createContext, useState } from "react"

export const PizzaContext = createContext();

const PizzaProvider = ({children}) => {
    const [pizzaData, setPizzaData] = useState([]);
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);
  return (
    <PizzaContext.Provider value={{pizzaData, setPizzaData, total,setTotal, cart, setCart}}>
        {children}
    </PizzaContext.Provider>
  );
};
export default PizzaProvider;