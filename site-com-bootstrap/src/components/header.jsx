import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; //

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Título da aplicação */}
        <Navbar.Brand as={Link} to="/">
          Livraria Digital
        </Navbar.Brand>

        {/* Links de navegação */}
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/register">Cadastro Usuários</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;