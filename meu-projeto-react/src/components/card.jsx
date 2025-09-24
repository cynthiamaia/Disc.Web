function Card({title, content}){
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}
const styles ={
//estilos para o cartao
card:{
    border: "1px solid #ddd", 
    //uma borda fina e cinza ao redor do cartao
    borderRadius: "8px",
    //arredondar as bordas do cartao
    padding: "1rem"
    //espacamento interno ao redor do conteudop
}
}
export default Card
