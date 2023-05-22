import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { NavBar } from "./myportfolio"
import "./style.css"

export const Portfolio = () => {
    return (
        <BrowserRouter>
            <div className="background">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}
