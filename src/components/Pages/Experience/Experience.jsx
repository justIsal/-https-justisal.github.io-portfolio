import Sidebar from "../../Layouts/Sidebar"
import "./Experience.scss"
import ImgMysql from "../../../assets/images/mysql.png";
const Experience = ()=> {
    return(
        <Sidebar > 
            <div className="experience-container">
                <h1 className="title">EXPERIENCE</h1>
                <div className="experience-content">
                    <div className="content__box">
                        <div className="content__box-img">
                            <img src={ImgMysql} alt="" />
                        </div>
                        <div className="content__box-flex">
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="content__box">
                        <div className="content__box-img">
                            <img src={ImgMysql} alt="" />
                        </div>
                        <div className="content__box-flex">
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="content__box">
                        <div className="content__box-img">
                            <img src={ImgMysql} alt="" />
                        </div>
                        <div className="content__box-flex">
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="content__box">
                        <div className="content__box-img">
                            <img src={ImgMysql} alt="" />
                        </div>
                        <div className="content__box-flex">
                            <p>Experience</p>
                        </div>
                    </div>
                    <div className="content__box">
                        <div className="content__box-img">
                            <img src={ImgMysql} alt="" />
                        </div>
                        <div className="content__box-flex">
                            <p>Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}
export default Experience