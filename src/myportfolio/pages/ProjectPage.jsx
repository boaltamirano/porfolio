import "../styles/project.css"
import githubimg from "../../assets/github.png"
import giff2img from "../../assets/giff.png"
import { projects } from "../data/projects"

export const ProjectPage = () => {
    return (
        <div className="projectBody">
            {/* <h1>Project</h1> */}
            {projects.map(({id, name, description, technology, img, demo, code }) => (
                <div className="cardPro" key={id}>
                    <img className="imgProCard" src={img} />
                    <div className="descriptionProject">
                        <div className="titleCard">
                            <img className="avatar" src={giff2img} />
                            <p className="titleProject">
                                {name}
                            </p>
                            <img className="avatar" src={githubimg} />
                        </div>
                        <p className="infoProject">
                            {description}
                        </p>
                        <span className="techProject">
                            {technology}
                        </span>
                    </div>
                </div>
            ))}

        </div>
    )
}
