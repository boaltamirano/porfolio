import { useEffect, useRef, useState } from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';


import '../styles/about.css';

export const AboutPage = () => {

    const [sumary, setSumary] = useState(false);
    const sumaryRef = useRef(null);

    useEffect(() => {
        if (sumary && sumaryRef.current) {
            sumaryRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [sumary]);

    const onViewSumary = () => {
        setSumary(!sumary)
    }

    return (
        <div className='about'>
            <div className="intro">
                <div className="imgPortfolio">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUMiaDR4gWujVpLgB1yKuNXFPnDNaaZUUDA&usqp=CAU" />
                </div>

                <div className="content">
                    <h2>Hi, I'm <span>Omar</span></h2>
                    <p> Hi! I'm a <span>Fullstack developer</span> with experience in creating scalable and high quality <span>web applications</span></p>
                    <button
                        onClick={onViewSumary}
                    >
                        Read more
                    </button>
                </div>

            </div>

            <div ref={sumaryRef} className=' sumary'>
                <h2>Get to Know me</h2>
                <p>
                    Hi, I am passionate about web development where
                    I have knowledge in programming languages like <span>JavaScript, HTML, CSS</span> and other technologies like <span>React, Node.js, Express</span> and <span>MongoDB</span>.
                </p>
                <p>
                    I'm passionate about technology and I'm always looking for new ways to improve my skills and stay updated on the latest development trends and tools. 💡💻
                </p>
                <p>
                    I focus on <span>agile development</span> and <span>continuous integration</span> to ensure that the code I produce is of high quality and ready for production release. 🚀🔍
                </p>
                <p>
                    If you are looking for a <span>Fullstack developer</span> with solid skills in the latest technologies, feel <span>free to contact me!</span>
                </p>
            </div>

            <div className="contact">
                <h2 className='contactTittle'>FIND ME ON</h2>
                <p> Feel free to connect with me</p>
                <div className='media'>
                    <i className='fa github'><FaGithub className='githubIcon'/></i>
                    <i className='fa linkedin'><FaLinkedinIn className='linkedinIcon'/></i>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-youtube-play'></i>
                </div>
            </div>

        </div>
    )
}
