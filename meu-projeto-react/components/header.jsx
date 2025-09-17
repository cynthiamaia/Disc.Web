function Header() {
   return (
     <header style={styles.header}>
       <h1>Meu Projeto React</h1>
     </header>
   );
 }
  const styles = {
   header: {
     backgroundColor: "#6200ea", //Define a cor de fundo do cabeçalho
     color: "white", //Define a cor do texto dentro do cabeçalho como branca.
   },
 };
  export default Header;