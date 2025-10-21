import  { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
function Register() {
    //inicializa o estado com string vazia
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    //impede o carregamento, sem ela, a pagina recarregaria
    const handleRegister = async (e) => {
        e.preventDefault();
        //await -> faz a funcao esperar ate o firebase confirmar a criacao do usuario
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
        } catch (error){
            setErro(error.message);
        }
        };

    return (
        <div>
        <h2>Cadastro</h2> 
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
            />
            <button type="submit">Cadastrar</button>
        </form>
        </div>
    )
    }
export default Register;
