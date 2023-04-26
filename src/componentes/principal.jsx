import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'


export default function Principal(props){
    return(
        <>
        <Header onLogout={props.onLogout}/>
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    )
}