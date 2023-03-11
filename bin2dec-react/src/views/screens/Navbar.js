import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function NavbarCaller() {
    return (
        <>
        <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>Converter Tool</Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )
}

export default NavbarCaller;