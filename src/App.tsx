import React from "react";
import GlobalStyles from "./GlobalStyles";

import { Container, Pages} from "./styles";

import CoverProvider from "./components/context/CoverContext";
import PageProvider from "./components/context/PageContext";

import Songbar from "./components/Songbar";
import Sidebar from "./components/Sidebar";
import PageWrapper from "./components/pages/PageWrapper";

function App() {

  return (  
    <PageProvider>
      <CoverProvider>
        <Container>
          <Sidebar/>
          <Songbar/>
          <PageWrapper/>
          <GlobalStyles />
        </Container>
      </CoverProvider>
    </PageProvider>
  );
}

export default App;
