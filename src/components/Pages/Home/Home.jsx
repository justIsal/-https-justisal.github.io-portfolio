import Sidebar from "../../Layouts/Sidebar";
import "./home.scss";
import Programmer from "./../../../assets/images/programmer.png";
import { Button } from "../../Elements/Buttons/Button";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Home = ()=> {
    return(
        <Sidebar >
            <div className="home-container">
                <div className="home-content">
                    <div className="home-content__left">
                        <h1 className="title-home">Hi i'm Muhammad Tsalman</h1>
                        <p className="description">Based in Garut, Indonesia, I am a web developer</p>
                        <Button 
                            to="/about"
                            className="home-btn"
                        >Details..</Button>
                    </div>
                    <div className="home-content__right">
                        <img src={Programmer} alt="" />
                    </div>
                </div>
                <div className="icon-contact">
                    <FacebookOutlinedIcon className="icon"/>
                    <InstagramIcon className="icon"/>
                    <GitHubIcon className="icon"/>
                    <TwitterIcon className="icon"/>
                    <LinkedInIcon className="icon"/>
                </div>
            </div>  
        </Sidebar>
    )
}
export default Home