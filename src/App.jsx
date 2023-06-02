
import { useState } from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/home'
import Grade from './pages/grade'
import Notas from './pages/notas'
import Financeiro from './pages/financeiro'
import Erro404 from './pages/Erro404'
import Login from "./pages/login"
import Sobre from "./pages/sobre"
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
          <Route path="grade" element={<Grade/>} />
          <Route path="notas" element={<Notas/>} />
          <Route path="financeiro" element={<Financeiro/>} />
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






