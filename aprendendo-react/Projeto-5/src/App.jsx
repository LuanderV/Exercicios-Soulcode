import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Menu from './components/Navbar';

function App() {
  return (
      <>
        <BrowserRouter>
          <Menu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
