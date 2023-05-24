import "../styles/technology.css"
import { allTools } from '../data/skills';
import { ItemSkills } from "../components";

export const TechnologyPage = () => {

    return (
        <>
            <h1 className="titleTech">MY SKILLS</h1>
            <div className="technology">
                {
                    allTools.map(({name, tools}, index) => (
                        <div className="card" key={index}>
                            <div className="header">{name}</div>
                            <div className="component-card">
                                <div className="language">
                                    {
                                        tools.map((value) => (
                                            <div key={value.id} >
                                                <ItemSkills {...value} />
                                            </div>
                                        ))

                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
