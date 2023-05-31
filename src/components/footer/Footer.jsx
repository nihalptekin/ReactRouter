import "./Footer.css";

const Footer = () => {

  const yil = new Date().getFullYear()
  return (

   <footer>Copyright {yil} </footer>
  );
};

export default Footer;
