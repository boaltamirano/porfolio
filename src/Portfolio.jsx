import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { NavBar } from "./myportfolio"

export const Portfolio = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}
