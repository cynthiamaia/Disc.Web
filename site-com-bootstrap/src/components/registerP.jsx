import api from "../services/api";
import React, {useState} from "react";

function RegisterPost(){
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [ author, setAuthor] = useState("");
    const [editingID, seteditingID] = useState(null)
//guardar o ID, variavel de estado
}
const handleSubmit = async (e) =>{
    e.preventDefault(); //evitar comportamento de recarregar pagina
    try{
       if (editingID){
        await api.put(`/put/${editingID}`,{title, content, author})
        setMessage("Post atualizado com sucesso!")
       }else{
        await api.post("/posts", {title, content, author})
        setMessage("Post cadastrado com sucesso")
       } 
       setTitle("");
       setContent("");
       setAuthor("");
    }catch (error){
        setMessage("Erro ao salvar o post")
    }
    return(
        <div className="container mt-5">
            <h2 className="mb-4"></h2>
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input
                type="text"
                value={title}
                required
                />
                </div> 
                <div className="mb-3">
                    <label className="form-label">Conteudo</label>
                    <textarea
                        className="form-control"
                        rows="3"
                        value={content}
                        required
                    />

                </div>
            </form>
        </div>
    )
}