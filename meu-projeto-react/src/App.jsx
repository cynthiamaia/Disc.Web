import Button from "../components/button"
import Header from "../components/header"
import Footer from "../components/footer"
function App() {

  return (
    <>
    <Header />
     <main style={{ padding: "1rem" }}>
       <Button label="Clique aqui" onClick={handleClick} />
     </main>
     <Footer></Footer>
    </>
  )
}

export default App
