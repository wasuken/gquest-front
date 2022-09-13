import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuth } from "../hooks/auth";
import "./Navigation.css"

const Navigation = () => {
  const { token, onLogout } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Navbar.Text>Guild Quest</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Navbar.Brand className="nav-item">
              <NavLink to="/">Home</NavLink>
            </Navbar.Brand >
            <Navbar.Brand className="nav-item">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </Navbar.Brand>
            {token && (
              <Navbar.Brand className="nav-item">
                <button type="button" onClick={onLogout}>
                  Sign Out
                </button>
              </Navbar.Brand>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
