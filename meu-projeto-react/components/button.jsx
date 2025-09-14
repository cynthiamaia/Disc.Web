function Button(){ //criar um componente funcional chamado de Button
    return (
        <button style={styles.button}> Texto</button>
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