import React from "react";
import Container from "../container";

function Layout({ children }) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}

export default Layout;
