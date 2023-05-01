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
      <h1>FACIT</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/grade">Grade Horaria</NavLink></li>
          <li><NavLink to="/notas">Notas</NavLink></li>
          <li><NavLink to="/financeiro">Financeiro</NavLink></li>
          <li><NavLink to={`/sobre/${props.usuarioID}`}>Sobre</NavLink></li>
          <li><button onClick={handleClick}>Sair</button></li>
        </ul>
      </nav>
    </header>
  )
}