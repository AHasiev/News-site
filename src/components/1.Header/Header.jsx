import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { OffCanvasExample } from '../2.Offcanvas/Offcanvas';
import './header.module.css'
import styles from "../1.Header/header.module.css"



function Header() {
  return (
    <>
         
      <Navbar  bg="primary" variant="dark">
      
        <Container>
          <Navbar.Brand href="#home">News</Navbar.Brand>
          <button className={styles.buttonInput}>Войти</button>
          
        </Container>        
          <OffCanvasExample placement={'end'}/>
      </Navbar>
      

   
    </>
  );
}

export default Header;