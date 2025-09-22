import Button from "./components/button"
import Header from "./components/header"
import Footer from "./components/footer"
import Card from "./components/card"
import MenuLateral from "./components/menulateral"
import "./App.css"
function App() {
  const handleClick = () => alert("voce clicou no botao")
  return (
    <div className="container">
    <Header />
    <MenuLateral />
     <main style={{ padding: "1rem" }}>
      <Card title="Bem vindo!" content="Este é um componente de card simples em react"></Card>
      <Button label="Clique aqui" onClick={handleClick} />
     </main>
     <Footer></Footer>
    </div>
  )
}

export default App
