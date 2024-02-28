import { Outlet} from "react-router-dom"
import Footer from '../pages/Footer'
import BurgerMenu from "../components/BurgerMenu"

export default function RootLayout() {
    return (
        <>
        <div id="outer-container">
            <BurgerMenu/>
            <div id="page-wrap">
                <Outlet/>
            </div>
            <Footer/>
        </div>
        </>
    )
}