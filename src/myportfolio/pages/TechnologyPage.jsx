import "../styles/technology.css"
import { languages } from '../data/skills';
import { ItemSkills } from "../components";

export const TechnologyPage = () => {


    return (
        <div className="technology">
            <h1>MY SKILLS</h1>
            <h2>Lenguajes de programacion</h2>
            <div className="language">
                {
                    languages.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>


            <h2>Frontend</h2>




            HTML5
            Bootstrap
            React Native


            <h2>Backend</h2>
            Symfony
            Laravel
            NodeJS


            <h2>Libraries</h2>
            React
            Socket.io
            React Router
            Redux

            <h2>Database</h2>
            MongoDB
            Redis
            Postgres
            MySQL

            <h2>Herramientas</h2>
            Expo
            Insomnia
            Docker
            ElasticSearch
            Jira
            Postman
            Kubernetes


            <h2>cloud computing</h2>
            AWS
            Heroku
            DigitalOcean
            Google Cloud
            Shell Script
            Jenkins


            <h2>Administrador de paquetes</h2>
            NPM
            YARN

            <h2>Sistemas operativos</h2>
            Linux,
            Windows

            <h2>Estandares/Plataformas</h2>
            MUI
            JWT

        </div>
    )
}
