import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Logofooter from "../assets/Logo Principal (Footer).png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import igicon from "../assets/ig.png"
import inicon from "../assets/in.png"
import yticon from "../assets/yt.png"



const Footer = () => {
  const navigate = useNavigate();
  const itemUrl = "/Productos";
  return (

    <Container className="footer">
      <Row className="elements-footer">
        <Col onClick={() => { navigate('/') }}>
          <img
            src={Logofooter}
            className="logofooter"
            alt="Logo creargood"></img>
        </Col>

        <Col md={6}>
          <Stack gap={3}><div className="p-2">First item</div>
            <div className="p-2">Second item</div>
            <div className="p-2">Third item</div>
          </Stack>
        </Col>

        <Col>
          <Stack gap={3}>
            <div className="p-2">Seguinos para enterarte de las últimas novedades y ofertas:</div>
            <div className="p-2">
              <div className="footer-icons">
                <Link className="footer-link" to="/">
                  <img src={igicon} className="footer-icon"></img>
                </Link>
                <Link className="footer-link" to="/">
                  <img src={inicon} className="footer-icon"></img>
                </Link>
                <Link className="footer-link" to="/">
                  <img src={yticon} className="footer-icon"></img>
                </Link>
              </div>
            </div>

          </Stack>
        </Col>
      </Row>

      <div className="footer-copyright">© Copyright 2023 - Todos los derechos reservados Crear Good</div>
    </Container>
  )
}

export default Footer;