import "../styles/experience.css";
import { experiences } from "../data";

export const ExperiencePage = () => {
    return (
        experiences.map(({id, position, company, img, url, activities, startDate, endDate}) => (
            <div key={id} className="experience">
                <div className="cardExp">
                    <div className="headerExp">
                        <div>
                            <h3 className="titleExp">{position}</h3>
                            <a className="nameExp" href={url}>{company}</a>
                        </div>
                        <img className="imageExp" src={img} />
                    </div>
                    <div className="descriptionExp">
                        {activities.map((value, index) => (
                            <p key={index}>{value}</p>
                        ))}
                    </div>
                    <dl className="post-infoExp">
                        <div className="crExp">
                            <dt className="dtExp">{startDate}</dt>
                            <dd className="ddExp">September 2021</dd>
                        </div>
                        <div className="crExp">
                            <dt className="dtExp">End date</dt>
                            <dd className="ddExp">{endDate}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        ))

    )
}
