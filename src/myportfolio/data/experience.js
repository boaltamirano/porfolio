import adsimg from '../../assets/ads.png';
import iasimg from '../../assets/ias.jpeg';
import tgimg from '../../assets/tg.jpeg';

export const experiences = [
    {
        id: 'fenix',
        position: 'FullStack Developer',
        company: 'ADSSOFTWARE CIA. LTDA',
        img: adsimg,
        url: 'https://fenixcorp.fenixerp.com',
        activities: [
            'Maintaining web applications using Angular, Laravel and postsgreSQL',
            'Developing new features for web applications, including update functionality, notifications to users of email notifications',
            'Research of technologies to replace the used ones, weblate configuration using tools such as docker, nginx, uwsgi'
        ],
        startDate: 'September 2021',
        endDate: 'December 2021'
    },
    {
        id: 'servir',
        position: 'FullStack Developer',
        company: 'IAservitech',
        img: iasimg,
        url: 'https://www.iaservitech.com',
        activities: [
            'Database management, creation of database schemas for the systems worked on',
            'Develop and maintain web applications using React.js, Spring boot, Laravel, MySQL and PostgreSQL',
            'Collaborate with the design team, communicate with the client to work with a clearer idea of their vision for the product',
            'Creating and implementing docker development environments for the backend team',
            'Creation and implementation of services in charge of user identity verification through text messages and email',
            'Collaborate with DevOps team to build development environments and production environments'
        ],
        startDate: 'November 2021',
        endDate: 'March 2022'
    },
    {
        id: 'idxboost',
        position: 'FullStack Developer',
        company: 'TREMGROUP',
        img: tgimg,
        url: 'https://www.tremgroup.com',
        activities: [
            'Develop web applications using React.js, symfony 5, node.js, mongodb, socket.io and related technologies',
            'Collaborate with the team to implement responsive design and ensure cross-browser compatibility',
            'Participate in code reviews and make necessary changes to code from other developers working with the team',
            'Develop APIs for consumption of multiple third-party services, implementing security with JWT',
            'Collaborative Software as a Service development, embedded systems development'
        ],
        startDate: 'April 2022',
        endDate: 'May 2023'
    }
]