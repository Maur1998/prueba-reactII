import { useContext, useState } from "react"
import { Card, CardBody, CardFooter, CardTitle } from "react-bootstrap"
import { PizzaContext } from "../context/PizzaContext"

export const Carrito = () => {

    const {cart, total, setTotal} = useContext(PizzaContext);

    const getTotal = () =>{
        
        let total = 0;

        for (let p of pizzaData){
            setTotal(total += p.price)
        }
    }
  return (
    <div className="container d-flex flex-column justify-content-center align-items-between" style={{ height: "90vh", width: "70%" }}>
    <h3>Detalles del pedido</h3>
    <div >
        {cart.map(({ id, img, name, price,nro }) => (
        <div key={id} className="d-flex my-2">
            <div className="d-flex align-items-center col-8">
                <img src={img} alt={name} width={"5%"} />
                <p className="ml-2 mb-0">{name}</p>
            </div>
            <div className="d-flex col-4">
                <p>{price }$</p>
                <button className="btn btn-danger mx-2" >-</button>
                <p>{nro}</p>
                <button className="btn btn-info mx-2" >+</button>
            </div>
        </div>
        ))}
    </div>
    <h1>Total: $  {total} </h1>
    <button className="btn btn-success">
        Ir a Pagar
    </button>
    </div>

  )
}
