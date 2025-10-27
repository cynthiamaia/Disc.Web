import { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
//serve para fazer login de um usuario com email e senha
import { auth} from "../firebase";
import { useNavigate } from "react-router-dom";
//redirecionar
function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

const navigate = useNavigate();
const handleLogin = async (e) => {
    e.preventDefault();
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, senha);
        navigate("/");
    } catch (error){
        setErro(error.message);
    }
}
    return (
        <div style={{maxWidth: 300, margin:"50px auto", textAlign: "center"}}>
        <h2>Login</h2> 
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{display:"block", width: "100%", marginBottom:10}}
            />
            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
                style={{display:"block", width: "100%", marginBottom:10}}
            />
            <button type="submit">Entrar</button>
        </form>
        </div>
    )
};
export default Login;

