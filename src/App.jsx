
import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/home'
import Novo from './pages/novo'
import Pedidos from './pages/pedidos'
import Sobre from './pages/sobre'
import Erro404 from './pages/Erro404'
import Login from "./pages/login"
import Principal from "./componentes/principal"
import './App.css'


export default function App(){
  const [logado, setLogado] =  useState(false);
  const [usuarioID, setUsuarioID] = useState();

  function handleLogin(){
    setLogado(true);
    setUsuarioID(100);
  }
  function handleLogout(){
    setLogado(false);
  }

  return(
    <BrowserRouter>
      <Routes>
        {logado?
        <>
        <Route path="/" element={<Principal usuarioID={usuarioID} onLogout={handleLogout}/>}>
          <Route index element={<Home />} />
          <Route path="pedidos" element={<Pedidos/>} />
          <Route path="novo" element={<Novo/>} />
          <Route path="sobre/:id" element={<Sobre/>} />  //parametro de rota
        </Route>
        </>
        :
        <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
        }
        <Route path="*" element={<Erro404/>}/>
      </Routes>
    </BrowserRouter>
  )
}






/* import Header from"./componentes/header"
import Principal from "./componentes/principal"
import Footer from "./componentes/footer"

export default function App() {
  return (
    <>
      <Header />
      <Principal />
      <Footer />
    </>
  )  
}
 */
