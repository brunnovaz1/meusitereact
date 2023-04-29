import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import './principal.css'


export default function Principal(props){
    return(
        <>
        <Header usuarioID={props.usuarioID} onLogout={props.onLogout}/>
        <main>
            <Outlet />    
        </main>
        <Footer />
        </>
    )
}