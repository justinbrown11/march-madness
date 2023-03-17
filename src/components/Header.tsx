import { Container, Navbar } from 'react-bootstrap';
import { IoIosBasketball } from 'react-icons/io';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        <IoIosBasketball size={30} className="d-inline-block align-top"/>{' '}</Navbar.Brand>
      <Navbar.Brand>March Madness</Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default Header;