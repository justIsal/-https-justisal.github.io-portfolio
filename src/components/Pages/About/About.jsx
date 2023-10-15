import Sidebar from "../../Layouts/Sidebar"
import "./about.scss"
const About = ()=> {
    return(
        <Sidebar > 
            <div className="about-container">
                <h1 className="title">ABOUT</h1>
                <div className="about-content">
                    <div className="about-content__left">
                        <h2>Welcome to my "About" page!</h2>
                        <p>I am Tsalman, a web developer with a passion for creating engaging and functional online experiences. I believe that web design and development is an art, and I always strive to create work that combines charming aesthetics with powerful functionality.</p>
                    </div>
                    <div className="about-content__right">
                        <p>My experience in the world of web development spans a variety of technologies and programming languages. I am skilled in HTML, CSS, JavaScript, and have experience in using frameworks such as React, or Tailwind CSS which focuses on the front-end. I also master programming languages ​​such as Python and MySQL, which allows me to develop web solutions that suit client needs.</p>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}
export default About