import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Global from "./styles/global";
import Header from "./components/Header";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes />
      <Global />
    </BrowserRouter>
  );
};

export default App;
