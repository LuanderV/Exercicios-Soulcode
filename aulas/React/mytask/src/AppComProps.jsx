import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import EditarTarefa from "./pages/EditarTarefa";
import Rodape from "./components/Rodape";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";


// BrowserRouter: componente essencial para conduzir o roteamento no navegador.
// Route: indicamos a rota (path) e o elemento que será exibido na tela.

function App() {
  // O estado de usuario indica se ele esta logado ou nao
  // null = deslogado
  const [ usuarioLogado, setUsuarioLogado ] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // user é nulo -> usuario deslogou
      // se tem objeto -> usuario logou
      setUsuarioLogado(user);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Menu usuario={usuarioLogado}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/tarefas" element={<Tarefas />}/>
          <Route path="/tarefas/adicionar" element={<NovaTarefa />}/>
          <Route path="/tarefas/editar/:id" element={<EditarTarefa />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;