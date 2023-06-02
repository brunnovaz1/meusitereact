import { useState } from "react"
import { useNavigate} from "react-router-dom"
import Section from "../componentes/section"
import './login.css'



export default function Login(props){
    
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    function handleClick(event){
        props.onLogin()
        navigate("/")
    }

    function handleFocus(event){
        console.log("entrou do campo email")
    }
    function handleBlur(event){
        console.log("saiu do campo email")
    }

    function handleChange(event){
        setEmail(event.target.value)

    }


    return(       
        <Section titulo="Login">
            <p>{email}</p>
            <input type="email" placeholder="e-mail" onChange={handleChange} 
                onFocus={handleFocus} onBlur={handleBlur} />
            <input type="password" placeholder="senha"/>
            <button onClick={handleClick}>Entrar</button>
        </Section>
    )
}