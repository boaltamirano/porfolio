import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, ExperiencePage, ProjectPage, TechnologyPage } from "../myportfolio";

export const AppRouter = () => {
    return (
        <>
            <div className="container">
                <Routes>
                    <Route path="about" element={<AboutPage />} />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="project" element={<ProjectPage />} />
                    <Route path="technology" element={<TechnologyPage />} />
                    <Route path="/" element={<Navigate to="/about" />} />

                </Routes>
            </div>
        </>
    )
}
