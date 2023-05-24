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
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.",
        technology: "#React",
        img: giffimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/app-gif"
    },
    {
        id: "heroes",
        name: "Heroes App",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.",
        technology: "#React #react-router",
        img: heroesimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/heroes-app"
    },
    {
        id: "journal",
        name: "Journal App",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.",
        technology: "#React #mui #react-router #react-redux #sweetalert2",
        img: journalimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/journal-app"
    },
    {
        id: "calendar",
        name: "Calendar App",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis nemo fugit autem possimus, magnam consequatur sint esse.",
        technology: "#React #bootstrap #react-router #react-redux #nodejs #mongoose #express #jwt",
        img: calendarimg,
        demo: "http://localhost:5173/project",
        code: "https://github.com/boaltamirano/calendar"
    }
]