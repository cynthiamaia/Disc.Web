import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom"; // Para redirecionar

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Faz login no Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      navigate("/register-post"); 
    } catch (error) {
      setErro(error.message);
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "50px auto", textAlign: "center" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
          style={{ display: "block", width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%", padding: 8 }}>
          Entrar
        </button>
      </form>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </div>
  );
}

export default Login;



