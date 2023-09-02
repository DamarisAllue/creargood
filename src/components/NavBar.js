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
            <NavDropdown title="Productos" id="collasible-nav-dropdown" >
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
              <NavDropdown.Item href="#action/3.4">
                REGALOS INSTITUCIONALES
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link mx-1" to="/Faq">Preguntas Frecuentes</Link>
            <Link className="nav-link mx-1" to="/quienessomos">¿Quienes Somos?</Link>
            <Link className="nav-link mx-1" to="/contacto">Contacto</Link>
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


export default NavBar;
