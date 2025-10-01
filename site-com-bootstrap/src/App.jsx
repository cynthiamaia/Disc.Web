import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Header from './components/header';
function App() {
  return (
    <div>
      <Header></Header>
      <Alert variant="success">Tudo certo!</Alert>
      <Button variant="primary">Clique aqui</Button>
    </div>
  )
}

export default App
