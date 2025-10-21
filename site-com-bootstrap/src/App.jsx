import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Header from './components/header';
import Footer from './components/footer'
import MainContent from './components/maincontent';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './components/register';
function App() {
  return (
    <Router>
    <div className="d-flex flex-column min-vh-100 w-100">
      <Header></Header>     
      <main className="flex-grow-1 w-100">
      <Routes>
        <Route path="/" element={<MainContent/>}/>
        <Route path="/register" element={<Register/>}/> {}
      </Routes>  
      </main> 
      <Footer/>
    </div>
    </Router>
  )
}

export default App;
     // {/*<Alert variant="success">Tudo certo!</Alert> */}
     // {/*<Button variant="primary">Clique aqui</Button>*/}