import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-info">
        <Container>
          <Link to="/" style={{textDecoration:"none",color:"white"}}>🍕 Pizzeria Mama-Mia!</Link>
          <div className='d-flex justify-content-center'>
            <Link to="/cart" style={{textDecoration:"none",color:"white"}}>
              🛒
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
