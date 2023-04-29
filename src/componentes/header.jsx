import { NavLink, useNavigate } from "react-router-dom";
import './header.css'

export default function Header(props) {
  const navigate = useNavigate()

  function handleClick(event) {
    props.onLogout()
    navigate("/login")
  }
  return (
    <header>
      <h1>Meu Site React</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/pedidos">Meus Pedidos</NavLink></li>
          <li><NavLink to="/novo">Novo Pedido</NavLink></li>
          <li><NavLink to={`/sobre/${props.usuarioID}`}>Sobre</NavLink></li>
          <li><button onClick={handleClick}>Sair</button></li>
        </ul>
      </nav>
    </header>
  )
}