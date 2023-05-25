import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { NavBar } from "./myportfolio"
import { BackGround } from "./myportfolio"
import "./style.css"

export const Portfolio = () => {
    return (
        <BrowserRouter>
            <BackGround />
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}
