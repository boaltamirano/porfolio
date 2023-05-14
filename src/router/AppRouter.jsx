import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, ContactPage, ExperiencePage, ProjectPage, TechnologyPage } from "../myportfolio";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={ <AboutPage /> }/>
            <Route path="/contact" element={ <ContactPage /> }/>
            <Route path="/experience" element={ <ExperiencePage /> }/>
            <Route path="/project" element={ <ProjectPage /> }/>
            <Route path="/technology" element={ <TechnologyPage /> }/>
        </Routes>
    )
}
