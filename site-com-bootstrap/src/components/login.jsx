import { useState } from "react";
import { signInWithEmailAndPassword} from "firebase/auth";
//serve para fazer login de um usuario com email e senha
import { auth} from "../firebase";
import { useNavigate } from "react-router-dom";
//redirecionar