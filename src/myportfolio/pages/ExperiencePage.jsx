import "../styles/experience.css";
import adsimg from '../../assets/ads.png';

export const ExperiencePage = () => {
    return (
        <div className="technology">
            <h2>Desarrollador de software</h2>
            <span>noviembre 2021 – marzo 2022</span>

            • Sistema web Wallet
            • Desarrollo BackEnd Sprint Boot y Python,
            - Desarrollo FrontEnd Reactjs,
            - Manejo base de datos en MySQL,
            - diseño web Bootstrap 4,
            - Verificación de identidad Twilio, Google GMAIL,
            - versionamiento de código GitHub,

            Arquitectura de desarrollo Microservicios,
            Gestión de tareas Jira,
            Deploy aplicación GCP, VPS, Docker,
            Metodología de trabajo Scrum.


            • Sistema web entrega de paqueteria
            • Maquetado de Base de datos draw.io,
            - Control Tareas Jira,
            Creación ambiente de desarrollo Docker para todo el equipo,
            Control Versionamiento GitHub,
            Metodología de trabajo Scrum,
            Desarrollo BackEnd Laravel,
            - Desarrollo FrontEnd Reactjs,
            - Manejo base de datos en MySQL

            <h2>Desarrollador FullStack</h2>
            <span>Marzo 2022 – Marzo 2023</span>

            • Desarrollo API para comunicacion con servicios externos

            • Desarrollo API con Symfony 5, Ambiente desarrollo Docker, Metodología de trabajo Scrum,
            Versionamiento de código GitHub, Testing de API Postman.

            • Desarrollo API y automatización con Zapier
            • Symfony 5, autenticación con JWT, Ambiente desarrollo Docker, Metodología de
            trabajo Scrum, Versionamiento de código GitHub, Testing de API Postman y Zapier, creación de zap,
            Autenticación de API.

            • Desarrollo Plugin para Wordpress
            • Desarrollo con PHP.


            • Sistema Chat Saas
            • Desarrollo BackEnd Symfony 5,
            Desarrollo servidor Socket.io y Node.js,
            Desarrollo FrontEnd React.js,
            Persistencia de Datos MongoDB y Redis,
            Ambiente desarrollo Docker,
            Arquitecturas de desarrollo MVC y cliente-servidor
            Metodología de trabajo Scrum,
            Versionamiento de código GitHub.
            Creacion de sistema embebido
            <div className="cardExp">
                <div className="headerExp">
                    <div>
                        <h3 className="titleExp">Desarrollador FullStack</h3>
                        <a className="nameExp" href="https://fenixcorp.fenixerp.com">ADSSOFTWARE CIA. LTDA</a>
                    </div>
                    <img className="imageExp" src={adsimg}/>
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

            <br/>
            <br/>

            <div className="cardExp">
                <div className="headerExp">
                    <div>
                        <h3 className="titleExp">Desarrollador FullStack</h3>
                        <a className="nameExp" href="https://fenixcorp.fenixerp.com">ADSSOFTWARE CIA. LTDA</a>
                    </div>
                    <img className="imageExp" src={adsimg}/>
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

        </div>
    )
}
