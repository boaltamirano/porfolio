import { useEffect, useRef, useState } from 'react';
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
        <>
            <div className="intro">

                <div className="imgPortfolio">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUMiaDR4gWujVpLgB1yKuNXFPnDNaaZUUDA&usqp=CAU" />
                </div>

                <div className="content">
                    <h2>Hi, I'm Omar</h2>
                    <p> Hi! I'm a Fullstack developer with experience in creating scalable and high quality web applications</p>
                    <button
                        onClick={onViewSumary}
                    >
                        Read more
                    </button>
                </div>

            </div>

            {sumary &&
                <div ref={sumaryRef} className='row sumary'>
                    <h2>Get to Know me</h2>
                    <p>
                        Hi, I am passionate about web development where I have knowledge in programming languages like JavaScript, HTML, CSS and other technologies like React, Node.js, Express and MongoDB.
                    </p>
                    <p>
                        I'm passionate about technology and I'm always looking for new ways to improve my skills and stay updated on the latest development trends and tools. 💡💻
                    </p>
                    <p>
                        I focus on agile development and continuous integration to ensure that the code I produce is of high quality and ready for production release. 🚀🔍
                    </p>
                    <p>
                        If you are looking for a Fullstack developer with solid skills in the latest technologies, feel free to contact me!
                    </p>
                </div>
            }

            <div className="contact">
                <h2>FIND ME ON</h2>
                <p> Feel free to connect with me</p>
                <div className='media'>
                    <i className='fa fa-facebook-f'></i>
                    <i className='fa fa-twitter'></i>
                    <i className='fa fa-instagram'></i>
                    <i className='fa fa-youtube-play'></i>
                </div>
            </div>

        </>
    )
}
