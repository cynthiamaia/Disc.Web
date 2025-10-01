import {Navbar, Nav, Container} from 'react-bootstrap'
function Header(){
return (
    <Navbar bg="dark">
        <Container>
            <Navbar.Brand>Meu Site</Navbar.Brand>
            <Nav>
                <Nav.link href="#">Inicio</Nav.link>
                <Nav.link href="#">Sobre</Nav.link>
                <Nav.Link href="#">Servicos</Nav.Link>
                <Nav.Link href="#">Contato</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)
}