import { Navbar, Nav, Container } from 'react-bootstrap';
function Header(){
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Navbar.Brand>Meu Site</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#">Inicio</Nav.Link>
                    <Nav.Link href="#">Sobre</Nav.Link>
                    <Nav.Link href="#">Servicos</Nav.Link>
                    <Nav.Link href="#">Contato</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)
}
export default Header;