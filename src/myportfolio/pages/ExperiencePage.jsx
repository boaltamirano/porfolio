import "../styles/experience.css";
import { experiences } from "../data";

export const ExperiencePage = () => {
    return (
        <div className="experience">
            {experiences.map(({ id, position, company, img, url, activities, startDate, endDate }) => (
                <div key={id} className="cardExp">
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
                    <dl className="datesExp">
                        <div className="crExp">
                            <dt className="dtExp">{startDate}</dt>
                            <dd className="ddExp">Date Start</dd>
                        </div>
                        <div className="crExp">
                            <dt className="dtExp">{endDate}</dt>
                            <dd className="ddExp">End date</dd>
                        </div>
                    </dl>
                </div>
            ))}
        </div>

    )
}
