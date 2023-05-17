import { useEffect, useRef, useState } from 'react';
import '../styles/about.css';
import '../styles/contact.scss';

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
        <div className="container">
            <div className="row info">
                <div className="col">
                    <div className="content">
                        <h2>Hi, I'm Omar</h2>
                        <p> Hi! I'm a Fullstack developer with experience in creating scalable and high quality web applications</p>
                        <button 
                            onClick={ onViewSumary }
                        >
                            Read more
                        </button>
                    </div>

                </div>
                <div className="col imgBx">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUMiaDR4gWujVpLgB1yKuNXFPnDNaaZUUDA&usqp=CAU" />
                </div>

            </div>

            {
                sumary && 
                <div ref={sumaryRef} className='row sumary'>
                    <h2>Get to Know me</h2>
                    <p>
                        Hi! 👋 I'm a Fullstack developer with experience in creating scalable and high quality web applications. 💻🌐 I have solid skills in programming languages like JavaScript, HTML, CSS and frameworks like React, Node.js, Express and MongoDB. I also have experience in implementing RESTful APIs and mobile app development with React Native. 📱🚀
                    </p>
                    <p>
                        I enjoy working in a team and collaborating on challenging projects. I'm passionate about technology and I'm always looking for new ways to improve my skills and stay updated on the latest development trends and tools. 💡💻 In addition, I focus on agile development and continuous integration to ensure that the code I produce is of high quality and ready for production release. 🚀🔍
                    </p>
                    <p>
                        If you are looking for a Fullstack developer with solid skills in the latest technologies, feel free to contact me!
                    </p>
                </div>
            }
        </div>
    )
}
