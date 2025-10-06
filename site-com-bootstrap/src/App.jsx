import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Header from './components/header';
import Footer from './components/footer'
import MainContent from './components/maincontent';
function App() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <Header></Header>
      {/*<Alert variant="success">Tudo certo!</Alert> */}
      {/*<Button variant="primary">Clique aqui</Button>*/}
      <main className="flex-grow-1 w-100">
        <MainContent></MainContent>
      </main>
      <Footer/>
    </div>
  )
}

export default App
