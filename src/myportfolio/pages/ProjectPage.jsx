import "../styles/project.css"
import githubimg from "../../assets/github.png"
import { projects } from "../data/projects"
import { GrView } from 'react-icons/gr';

export const ProjectPage = () => {
    return (
        <div className="projectBody">
            {projects.map(({id, name, description, technology, img, demo, code }) => (
                <div className="cardPro" key={id}>
                    <img className="imgProCard" src={img} />
                    <div className="descriptionProject">
                        <div className="titleCard">
                            {/* <a className="demo"><GrView className="demoIcon"/></a> */}
                            <p className="titleProject">
                                {name}
                            </p>
                            <a href={code}><img className="avatar" src={githubimg} /></a>
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
