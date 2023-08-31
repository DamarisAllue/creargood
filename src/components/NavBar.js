import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import brand from "../assets/Logo Header 1.png";
import igicon from "../assets/ig.png"
import inicon from "../assets/in.png"
import yticon from "../assets/yt.png"
import { Link } from "react-router-dom";
import { BsYoutube, BsInstagram, BsLinkedin } from "react-icons/bs";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={brand}
            className="brand"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="d-flex nav-items m-auto">
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                TARJETAS & DIJES
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                DIJES DE MESA
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                REGALOS & RECUERDOS
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">TOPPERS 3D</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                REGALOS INSTITUCIONALES
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link mx-1" to="/Faq">Preguntas Frecuentes</Link>
            <Link className="nav-link mx-1" to="/">¿Quienes Somos?</Link>
            <Link className="nav-link mx-1" to="/">Contacto</Link>
            <Nav className="nav-icons">
              <Link className="nav-link" to="/">
                <img src={igicon}></img>
              </Link>
              <Link className="nav-link" to="/">
              <img src={inicon}></img>
              </Link>
              <Link className="nav-link" to="/">
              <img src={yticon}></img>
              </Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

{
  /* <div>
            
        <Navbar collapseOnSelect expand="md" fixed='top'>
            <Container className="navbar-container">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="navbar">
                        <Navbar.Brand><Nav.Link className="nav-brand" to="/" >CTG</Nav.Link></Navbar.Brand>
                        <Nav className="ms-auto">
                        <Link className="nav-link mx-1" to="/">Inicio</Link>
                        <Link className="nav-link mx-1" to="/Acerca-De">Sobre Mí</Link>
                        <Link className="nav-link mx-1" to="/Portfolio">Portfolio</Link>
                        <Link className="nav-link mx-1" to="/Contacto">Contacto</Link>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div> */
}

export default NavBar;