import { useParams } from "react-router-dom"
import Section from "../componentes/section"

export default function Sobre(){
    const {id} = useParams()
    
    return(
        <Section titulo="Sobre">
            <p>Usuario {id}</p>
        </Section>
    )
}