import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import brand from "../assets/Logo Header 1.png";
import igicon from "../assets/ig.png"
import inicon from "../assets/in.png"
import yticon from "../assets/yt.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const itemUrl = "/Productos";
  return (
    <Navbar collapseOnSelect expand="lg" className="" >
      <Container style={{background: "#fff"}}>
        <Navbar.Brand onClick={() => {navigate('/')}}>
          <img
            src={brand}
            className="brand"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex nav-items m-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown" onClick={() => navigate(itemUrl)}>
              <NavDropdown.Item onClick={() => navigate(itemUrl)}>
                TARJETAS & DIJES
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(itemUrl)}>
                DIJES DE MESA
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(itemUrl)}>
                REGALOS & RECUERDOS
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(itemUrl)}>TOPPERS 3D</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate(itemUrl)}>
                REGALOS INSTITUCIONALES
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link mx-1" to="/Faq">Preguntas Frecuentes</Link>
            <Link className="nav-link mx-1" to="/quienessomos">¿Quienes Somos?</Link>
            <Link className="nav-link mx-1" to="/contacto">Contacto</Link>
            <Nav className="nav-icons">
            <Nav.Link href="https://www.instagram.com/crear_good/"><img src={igicon}/></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/jenny-franco/"><img src={inicon}/></Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UCXY_6zfccY-yccy5xV6IgEA"><img src={yticon}/></Nav.Link>  
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
