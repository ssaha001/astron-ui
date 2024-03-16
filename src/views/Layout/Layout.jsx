import React from "react";
import { Container, Navbar} from "react-bootstrap";
import "./Layout.css"; // Assuming you have a separate CSS file for styling
import { HeaderNavOptions } from "../../Components";
import { useNavigate, Link } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <div className="layout">
      <header>
        <Navbar  expand="lg" id="nav-bar">
          <Container>
          <Navbar.Brand>
              <img src="https://live.staticflickr.com/65535/53588292936_8a8853a9ae_o.png" alt="AstroN" className="header-logo" onClick={()=>navigate('/')}/>
            </Navbar.Brand>   
           <HeaderNavOptions />
          </Container>
        </Navbar>
      </header>
      <main>
        <Container id={"container-id"}>{children}</Container>
      </main>
      <footer id="footer">
        <Navbar expand="lg">
          <Container>
            <Navbar.Text > <Link to="/dashboard" class="btn btn-lg  bg-transparent text-white">About Us</Link></Navbar.Text>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default Layout;
