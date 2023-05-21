import "../styles/experience.css";
import adsimg from '../../assets/ads.png';
import iasimg from '../../assets/ias.jpeg';
import tgimg from '../../assets/tg.jpeg';

export const ExperiencePage = () => {
    return (
        <div className="technology">
            <div className="cardExp">
                <div className="headerExp">
                    <div>
                        <h3 className="titleExp">FullStack Developer</h3>
                        <a className="nameExp" href="https://fenixcorp.fenixerp.com">ADSSOFTWARE CIA. LTDA</a>
                    </div>
                    <img className="imageExp" src={adsimg} />
                </div>
                <div className="descriptionExp">
                    <p>Maintaining web applications using Angular, Laravel and postsgreSQL.</p>
                    <p>Developing new features for web applications, including update functionality, notifications to users of email notifications.</p>
                    <p>Research of technologies to replace the used ones, weblate configuration using tools such as docker, nginx, uwsgi.</p>
                </div>
                <dl className="post-infoExp">
                    <div className="crExp">
                        <dt className="dtExp">Start date</dt>
                        <dd className="ddExp">September 2021</dd>
                    </div>
                    <div className="crExp">
                        <dt className="dtExp">End date</dt>
                        <dd className="ddExp">December 2021</dd>
                    </div>
                </dl>
            </div>

            <br />
            <br />

            <div className="cardExp">
                <div className="headerExp">
                    <div>
                        <h3 className="titleExp">FullStack Developer</h3>
                        <a className="nameExp" href="https://www.iaservitech.com">IAservitech</a>
                    </div>
                    <img className="imageExp" src={iasimg} />
                </div>
                <div className="descriptionExp">
                    <p>Database management, creation of database schemas for the systems worked on</p>
                    <p>Develop and maintain web applications using React.js, Spring boot, Laravel, MySQL and PostgreSQL</p>
                    <p>Collaborate with the design team, communicate with the client to work with a clearer idea of their vision for the product</p>
                    <p>Creating and implementing docker development environments for the backend team</p>
                    <p>Creation and implementation of services in charge of user identity verification through text messages and email</p>
                    <p>Collaborate with DevOps team to build development environments and production environments</p>
                </div>
                <dl className="post-infoExp">
                    <div className="crExp">
                        <dt className="dtExp">Start date</dt>
                        <dd className="ddExp">November 2021</dd>
                    </div>
                    <div className="crExp">
                        <dt className="dtExp">End date</dt>
                        <dd className="ddExp">March 2022</dd>
                    </div>
                </dl>
            </div>

            <br />
            <br />

            <div className="cardExp">
                <div className="headerExp">
                    <div>
                        <h3 className="titleExp">FullStack Developer</h3>
                        <a className="nameExp" href="https://www.tremgroup.com">TREMGROUP</a>
                    </div>
                    <img className="imageExp" src={tgimg} />
                </div>
                <div className="descriptionExp">
                    <p>Develop web applications using React.js, symfony 5, node.js, mongodb, socket.io and related technologies</p>
                    <p>Collaborate with the team to implement responsive design and ensure cross-browser compatibility</p>
                    <p>Participate in code reviews and make necessary changes to code from other developers working with the team</p>
                    <p>Develop APIs for consumption of multiple third-party services, implementing security with JWT</p>
                    <p>Collaborative Software as a Service development, embedded systems development. </p>
                </div>
                <dl className="post-infoExp">
                    <div className="crExp">
                        <dt className="dtExp">Start date</dt>
                        <dd className="ddExp">April 2022</dd>
                    </div>
                    <div className="crExp">
                        <dt className="dtExp">End date</dt>
                        <dd className="ddExp">May 2023</dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}
