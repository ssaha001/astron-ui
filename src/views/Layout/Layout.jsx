import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Layout.css"; // Assuming you have a separate CSS file for styling
import { HeaderNavOptions } from "../../Components";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar  expand="lg" id="nav-bar">
          <Container>
          <Navbar.Brand>
              <img src="https://live.staticflickr.com/65535/53588292936_8a8853a9ae_o.png" alt="AstroN" className="header-logo" />
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
            <Navbar.Text >Footer - Bottom Part</Navbar.Text>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default Layout;
