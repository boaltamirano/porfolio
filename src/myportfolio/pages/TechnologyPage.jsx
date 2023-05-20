import "../styles/technology.css"
import { allTools } from '../data/skills';
import { ItemSkills } from "../components";

export const TechnologyPage = () => {

    return (
        <div className="technology">
            <h1 className="blinking-shadow">MY SKILLS</h1>
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
    )
}
