import "../styles/technology.css"
import { languages, frontend, backend, libraries, databases, tools, cloud, adminPackage, systemO, estandars } from '../data/skills';
import { ItemSkills } from "../components";

export const TechnologyPage = () => {


    return (
        <div className="technology">
            <h1 className="blinking-shadow">MY SKILLS</h1>
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
            <div className="language">
                {
                    frontend.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>



            <h2>Backend</h2>
            <div className="language">
                {
                    backend.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>


            <h2>Libraries</h2>

            <div className="language">
                {
                    libraries.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>


            <h2>Database</h2>
            <div className="language">
                {
                    databases.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>


            <h2>Herramientas</h2>
            <div className="language">
                {
                    tools.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>



            <h2>cloud computing</h2>
            <div className="language">
                {
                    cloud.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>



            <h2>Administrador de paquetes</h2>
            <div className="language">
                {
                    adminPackage.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>

            <h2>Sistemas operativos</h2>
            <div className="language">
                {
                    systemO.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>

            <h2>Estandares/Plataformas</h2>
            <div className="language">
                {
                    estandars.map((value) => (
                        <div key={value.id} >
                            <ItemSkills {...value} />
                        </div>
                    ))

                }
            </div>

        </div>
    )
}
