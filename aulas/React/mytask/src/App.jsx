import Menu from "./components/Menu";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Ajuda from "./pages/Ajuda"
import NotFound from "./pages/NotFound"
import Politicas from "./pages/Politicas";
import Rodape from "./components/Rodape";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// BrowserRouter: Componente essencial para conduzir o roteamento no navegador.

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App