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
            <Navbar.Brand className="mr-auto">Header - Top Part</Navbar.Brand>
            <HeaderNavOptions />
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
}

export default Layout;
