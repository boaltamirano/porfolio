import { useState } from "react";
import { ItemExperience } from "./ItemExperience";

export const ItemSkills = ({ img, name, experience, porcental }) => {

    const [skillView, setSkillView] = useState(true);

    const handleViewIn = () => {
        setSkillView(false);
        console.log("adasdsad:: ", skillView)
    };

    const handleViewOut = () => {
        setSkillView(true);
        console.log("Sale:: ", skillView)
    };


    return (
        <div className="tech-body">
            {skillView
                ? <img
                    className="image-skill"
                    src={img}
                    alt={name}
                    onMouseEnter={handleViewIn}
                />
                : <ItemExperience key={name} experience={experience} porcental={porcental} handleViewOut={handleViewOut} />

            }
            <p>{name}</p>
        </div>
    )
}
