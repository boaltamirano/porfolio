import "../styles/project.css"
import githubimg from "../../assets/github.png"
import giff2img from "../../assets/giff.png"

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

            {/* <div className="cardPro">
                <div className="contentPro">
                    <div className="backPro" >
                        <div
                            className="back-contentPro"
                            style={{
                                backgroundImage: `url(${dockerimg})`,
                                backgroundSize: 'cover'
                            }}
                        >
                            <strong>Hover Me</strong>
                        </div>
                    </div>
                    <div className="frontPro">
                        <div
                            className="frontcontentPro"
                            style={{
                                backgroundImage: `url(${giff2img})`,
                                backgroundSize: 'cover',
                            }}
                        >
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
            </div> */}



            <div className="cardPro">
                <img className="imgProCard" src={giff2img} />
                <div className="descriptionProject">
                    <div className="titleCard">
                        <img className="avatar" src={githubimg} />
                        <p className="titleProject">
                            Giff
                        </p>
                        <img className="avatar" src={githubimg} />
                    </div>
                    <p className="infoProject">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.
                    </p>
                    <div className="techProject">
                        <a href="#">#React</a>
                    </div>
                </div>
            </div>


        </div>
    )
}
