import { useNavigate } from "react-router-dom"
import Section from "../componentes/section"

export default function Login(props){

    const navigate = useNavigate()

    function handleClick(event){
        props.onLogin()
        navigate("/")
    }


    return(
        <Section titulo="Login">
            <button onClick={handleClick}>Entrar</button>
        </Section>
    )
}