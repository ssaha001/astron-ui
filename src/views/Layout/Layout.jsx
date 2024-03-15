import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "./Layout.css"; // Assuming you have a separate CSS file for styling
import { HeaderNavOptions } from "../../Components";

function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
          <Navbar.Brand>
              <img src="https://live.staticflickr.com/65535/53588292936_8a8853a9ae_o.png" alt="AstroN" className="header-logo" />
            </Navbar.Brand>   
           <HeaderNavOptions />
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Text>Footer - Bottom Part</Navbar.Text>
          </Container>
        </Navbar>
      </footer>
    </div>
  );
}

export default Layout;
