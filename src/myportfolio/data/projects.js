import giffimg from "../../assets/giff.png";
import heroesimg from "../../assets/heroes.png";
import journalimg from "../../assets/journal.png";
import calendarimg from "../../assets/calendar.png";

export const projects = [
    {
        id: "ecommerce",
        name: "Ecommerce",
        description: "Mobile application that allows users to browse product catalogs, add items to the shopping cart, make secure payments and track orders.",
        technology: "#React Native #nodejs #Express #Mongoose ",
        img: giffimg,
        demo: "#",
        code: "#"
    },
    {
        id: "giffs",
        name: "Giff App",
        description: "The application connects to the Giphy Developers API, which allows requests to be made and results to be obtained in real time. Users can search for GIFs using keywords.",
        technology: "#React",
        img: giffimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/app-gif"
    },
    {
        id: "heroes",
        name: "Heroes App",
        description: "An application where users can navigate between different windows, such as the home page, the list of superheroes, and the details of each superhero, the system also has a simple login system.",
        technology: "#React #react-router",
        img: heroesimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/heroes-app"
    },
    {
        id: "journal",
        name: "Journal App",
        description: "The journal application is a platform designed to help users keep an organized and accessible personal record, the user can perform CRUD of notes. In addition, it has a login functionality using Firebase, which allows users to register, log in and keep their notes synchronized across different devices.",
        technology: "#React #mui #react-router #react-redux #sweetalert2",
        img: journalimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/journal-app"
    },
    {
        id: "calendar",
        name: "Calendar App",
        description: "It is an application that gives users the ability to perform CRUD operations on their calendar events. The application has a login functionality. For data backup the application has a Node.js API that connects to a MongoDB database.",
        technology: "#React #bootstrap #react-router #react-redux #nodejs #mongoose #express #jwt",
        img: calendarimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/calendar"
    }
]