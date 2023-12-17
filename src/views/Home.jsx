import { useContext, useEffect, useState } from 'react';
import { PizzaContext } from '../context/PizzaContext'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const [pizza,setPizza] = useState([]);
    const {setPizzaData, total, setTotal, cart, setCart} = useContext(PizzaContext);
    const navigate = useNavigate();

    useEffect(()=>{
        getData();
    },[])


    const getData = async () => {
        try{
            const url = 'pizzas.json'
            const response = await fetch(url);
            const data = await response.json();
            setPizza(data)
        } catch (error){
            console.log(error)
        }
    }

    const handleClick = (pizza) =>{
        event.preventDefault();
        setPizzaData(pizza)
        navigate(`/pizza/${pizza.id}`)
    }

    const handleCart = (pizza) => {
        const match = cart.filter((cpizza) => cpizza.id === pizza.id);
        if (match.length > 0) {
          const otherPizza = cart.filter((opizza) => opizza.id !== pizza.id);
          if (otherPizza.length > 0) {
            setCart([
              ...otherPizza,
              { ...pizza, nro: match[0].nro + 1 },
            ]);
          } else {
            setCart([{ ...pizza, nro: match[0].nro + 1 }]);
          }
        } else {
          setCart([...cart, { ...pizza, nro: 1 }]);
        }
        setTotal(total + pizza.price);
        console.log(cart)
      };

    return (
        <>
            <div 
                className='d-flex flex-column align-items-center' style={{
                    backgroundImage: 'url("src/assets/img/pizza-background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '20px',
                    color: 'white', 
                    opacity:'80%',
                }}
                >
                <h1>¡Pizzería Mamma Mia!</h1>
                <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
            </div>
            
            <div className='container-fluid'>
                <div className="row justify-content-center" style={{padding:"5rem"}}>
                    {
                        pizza.map((pizza)=>(
                            <div key={pizza.id} className='col-12 col-md-4 col-lg-3 my-3'>
                                <Card>
                                    <Card.Img variant="top" src={pizza.img} />
                                    <Card.Body>
                                        <Card.Title>{pizza.name}</Card.Title>
                                            {
                                                pizza.ingredients.map((ingredient, index)=>(
                                                    <p key={index}>
                                                        🍕 {ingredient}
                                                    </p>
                                                ))
                                            }
                                    </Card.Body>
                                    <ListGroup></ListGroup>
                                    <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
                                        $ {pizza.price}
                                        <div className='d-flex flex-row justify-content-center' style={{width:"100%"}}> 
                                            <button className='btn btn-info mx-2' onClick={() => handleClick(pizza)}>Ver Más</button> 
                                            <button className='btn btn-danger' onClick={()=> handleCart(pizza)}>Añadir</button>
                                        </div>
                                    </Card.Body>
                                </Card> 
                            </div>      
                        ))
                    }
                </div>
            </div>
        </>
    )
}
