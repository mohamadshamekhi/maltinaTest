import React from "react";
import Container from "../container";
import Seo from "./seo";
function Layout({ children , title}) {
  return (
    <main>
      <Seo title={title} />
      <Container>{children}</Container>
    </main>
  );
}

export default Layout;
