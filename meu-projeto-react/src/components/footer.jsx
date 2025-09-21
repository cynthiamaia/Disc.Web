function Footer() { //indica a seção de rodapé da página
    
   return (
    
     <footer style={styles.footer}>
       <p>Todos os direitos reservados</p>
     </footer>
   );
 }
  const styles = {
   footer: {
     backgroundColor: "#6200ea", //Define a cor de fundo do rodapé.
   },
 };
  export default Footer;