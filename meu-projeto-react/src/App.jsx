import Button from "./components/button"
import Header from "./components/header"
import Footer from "./components/footer"
import Card from "./components/card"
import "./App.css"
function App() {
  const handleClick = () => alert("voce clicou no botao")
  return (
    <>
    <Header />
     <main style={{ padding: "1rem" }}>
      <Card title="Bem vindo!" content="Este é um componente de card simples em react"></Card>
      <Button label="Clique aqui" onClick={handleClick} />
     </main>
     <Footer></Footer>
    </>
  )
}

export default App
