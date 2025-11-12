import React, { useState, useEffect } from "react";
import api from "../services/api";

function RegisterPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);
//guardar o ID, variavel de estado

//buscar todos os posts
const fetchPosts = async () => {
  try {
    const response = await api.get("/buscar");
    setPosts(response.data);
  }catch (error){
    console.log("Erro")
  }
};
useEffect(() => {
    fetchPosts();
  }, []);
const handleDelete = async (id) => {
  if (!window.confirm("Tem certeza que deseja excluir este post?")) return;
  try{
    await api.delete(`/delete/${id}`)
    setMessage("Post deletado com sucesso")
  } catch (error){
    setMessage("Erro ao deletar o post")
  }
}
const handleSubmit = async (e) => { 
    e.preventDefault(); //evitar comportamento de recarregar pagina
   try {
      if (editingId) {
        await api.put(`/put/${editingId}`, { title, content, author });
        setMessage("Post atualizado com sucesso!");
        setEditingId(null);
      } else {
        // Criar novo post
        await api.post("/posts", { title, content, author });
        setMessage("Post cadastrado com sucesso!");
      }
      // Limpar campos e atualizar lista
      setTitle("");
      setContent("");
      setAuthor("");
      fetchPosts();
    } catch (error) {
      console.error("Erro ao salvar post:", error);
      setMessage("Erro ao salvar o post.");
    }
  };
  // 🔹 Editar post
  const handleEdit = (post) => {
    setTitle(post.title);
    setContent(post.content);
    setAuthor(post.author);
    setEditingId(post.id);
    setMessage("Editando post...");
  };

  // 🔹 Cancelar edição
  const handleCancelEdit = () => {
    setTitle("");
    setContent("");
    setAuthor("");
    setEditingId(null);
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{editingId ? "Editar Post" : "Cadastrar Livro"}</h2>

      {/* Formulário */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Conteúdo</label>
          <textarea
            className="form-control"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            {editingId ? "Atualizar" : "Cadastrar"}
          </button>
           {editingId && (
            <button type="button" className="btn btn-secondary" onClick={handleCancelEdit}>
              Cancelar
            </button>
          )}
          
        </div>
         {message && <div className="mt-3 alert alert-info">{message}</div>}
       </form>
       {/* Lista de Posts */}
      <hr className="my-5" />
      <h3>Posts Cadastrados</h3>
{posts.length === 0 ? (
        <p>Nenhum post encontrado.</p>
      ) : (
        <div className="list-group">
          {posts.map((post) => (
            <div key={post.id} className="list-group-item mb-3">
              <h5>{post.title}</h5>
              <p>{post.content}</p>
              <small>
                 Autor: {post.author || "Anônimo"} <br />
                {" "}
                {post.createdAt?.seconds
                  ? new Date(post.createdAt.seconds * 1000).toLocaleString()
                  : "Data não disponível"}
              </small>
              <div className="mt-3 d-flex gap-2">
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(post)}
                >
                   Editar
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(post.id)}
                >
                   Deletar
                </button>
                </div>
      </div>
          ))}
        </div>
      )}
       </div>   
    );
};

export default RegisterPost;