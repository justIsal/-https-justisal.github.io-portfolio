import { NavLink } from "react-router-dom"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import "./Layouts.scss"
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Logo from "./../../assets/images/logo.jpg";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LaptopIcon from '@mui/icons-material/Laptop';
const Sidebar = ({children})=> {
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <HomeOutlinedIcon />
        },
        {
            path: "/about",
            name: "About",
            icon: <MenuBookIcon />
        },
        {
            path: "/education",
            name: "Education",
            icon: <SchoolOutlinedIcon />
        },
        {
            path: "/skills",
            name: "Skills",
            icon: <SettingsSuggestIcon />
        },
        {
            path: "/experience",
            name: "Experience",
            icon: <LaptopIcon />
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <PhoneOutlinedIcon />
        },


    ]
    return(
        <div className="container">
            <sidebar className="sidebar-container">
                <div className="sidebar__logo">
                    <img src={Logo} alt="logo" />
                    <p>ツァルマン</p>
                </div>
                <ul className="sidebar__navItem">
                    {menuItem.map((item,index)=> (
                        <NavLink to={item.path} className="sidebar__navList">
                            {item.icon} {item.name}
                        </NavLink>
                    ))}
                </ul>
            </sidebar>
            <main className="content-container">
                {children}
            </main>
        </div>
        
    )
}
export default Sidebar