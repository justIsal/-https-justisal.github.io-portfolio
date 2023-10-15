import About from "./components/Pages/About/About"
import Awards from "./components/Pages/Awards/Awards"
import Education from "./components/Pages/Education/Education"
import Experience from "./components/Pages/Experience/Experience"
import Home from "./components/Pages/Home/Home"
import Contact from "./components/Pages/Contact/Contact"
import Skills from "./components/Pages/Skills/Skills"


export const Router = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/awards",
        element: <Awards />
    },
    {
        path: "/experience",
        element: <Experience />
    },
    {
        path: "/Contact",
        element: <Contact />
    },
    {
        path: "/skills",
        element: <Skills />
    },
    {
        path: "/education",
        element: <Education />
    },
]