function Button({ label, onClick }){ //criar um componente funcional chamado de Button
    return (
     <button onClick={onClick} style={styles.button}>{label}</button>
    );
            
}
const styles = {
    button:{
        backgroundColor: "#6200ea",
        color: "white"
    }
}
export default Button; 
// permite que seja importado em outros arquivos do projeto