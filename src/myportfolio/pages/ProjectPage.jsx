import "../styles/project.css"
import dockerimg from "../../assets/docker.jpg"

export const ProjectPage = () => {
    return (
        <div className="technology">
            <h1>Project</h1>
            <h2>sistema ecommerce</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id fuga incidunt omnis sint assumenda in vel accusantium laudantium veritatis, hic dolorem dolor eius velit maiores perferendis, maxime iure pariatur.</p>
            <span>React Native, Nodejs, MongoDb</span>

            <h2>Gif app</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id fuga incidunt omnis sint assumenda in vel accusantium laudantium veritatis, hic dolorem dolor eius velit maiores perferendis, maxime iure pariatur.</p>
            <span>React</span>

            <h2>Heroes app</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id fuga incidunt omnis sint assumenda in vel accusantium laudantium veritatis, hic dolorem dolor eius velit maiores perferendis, maxime iure pariatur.</p>
            <span>React</span>

            <h2>Journal</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id fuga incidunt omnis sint assumenda in vel accusantium laudantium veritatis, hic dolorem dolor eius velit maiores perferendis, maxime iure pariatur.</p>
            <span>React, Firebase</span>


            <h2>Calendario</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae id fuga incidunt omnis sint assumenda in vel accusantium laudantium veritatis, hic dolorem dolor eius velit maiores perferendis, maxime iure pariatur.</p>
            <span>React, Nodejs, JWT, MongoDb</span>

            <div className="cardPro">
                <div className="contentPro">
                    <div className="backPro" >
                        <div 
                            className="back-contentPro"
                            style={{background: `url(${dockerimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
                        >
                            <strong>Hover Me</strong>
                        </div>
                    </div>
                    <div className="frontPro">
                        <div className="frontcontentPro">
                            <small className="badgePro">Pasta</small>
                            <div className="descriptionPro">
                                <div className="titlePro">
                                    <p className="titlePro">
                                        <strong>Spaguetti Bolognese</strong>
                                    </p>
                                </div>
                                <p className="card-footerPro">
                                    30 Mins &nbsp; | &nbsp; 1 Serving
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardPro">
                <div className="contentPro">
                    <div className="backPro" >
                        <div
                            className="back-contentPro"
                            style={{ background: `url(${dockerimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                        >
                            <strong>Hover Me</strong>
                        </div>
                    </div>
                    <div className="frontPro">
                        <div className="frontcontentPro">
                            <small className="badgePro">Pasta</small>
                            <div className="descriptionPro">
                                <div className="tags">
                                    <a href="#">html</a>
                                    <a href="#">web-dev</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
