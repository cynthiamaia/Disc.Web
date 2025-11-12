import { Container, Row, Col, Card} from 'react-bootstrap'
function MainContent(){
    return (
        <Container className="my-5">
            <h1 className="text-center mb-4"> Bem vindo ao CRUD de Cadastro de Livros</h1>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                           <Card.Title> Servico 1</Card.Title> 
                           <Card.Text> Cadastrar</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                        <Card.Title>Servico 2</Card.Title>
                        <Card.Text>Atualizar</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={4}>
                <Card>
                    <Card.Body>
                    <Card.Title>Servico 3</Card.Title>
                    <Card.Text>Remover</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
} export default MainContent;