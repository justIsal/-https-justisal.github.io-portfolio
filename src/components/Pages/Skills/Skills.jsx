import Sidebar from "../../Layouts/Sidebar";
import "./Skills.scss";
import ImgHtml from "../../../assets/images/html.png";
import Imgjs from "../../../assets/images/js.png";
import ImgCss from "../../../assets/images/css.png";
import ImgMongodb from "../../../assets/images/mongodb.png";
import ImgNodeJs from "../../../assets/images/nodeJs.png";
import ImgReact from "../../../assets/images/react.png";
import ImgSass from "../../../assets/images/sass.png";
import ImgTailwind from "../../../assets/images/tailwind.png";
import ImgMysql from "../../../assets/images/mysql.png";

const imgItems = [
    // {
    //     img_name: 'css',
    //     image: ImgCss,
    // },
    {
        img_name: 'html',
        image: ImgHtml,
    },
    {
        img_name: 'Javascript',
        image: Imgjs,
    },
    {
        img_name: 'tailwind css',
        image: ImgTailwind,
    },
    {
        img_name: 'Sass',
        image: ImgSass,
    },
    {
        img_name: 'React js',
        image: ImgReact,
    },
    {
        img_name: 'Mysql',
        image: ImgMysql,
    },
    {
        img_name: 'MongoDb',
        image: ImgMongodb,
    },
    {
        img_name: 'Node Js',
        image: ImgNodeJs,
    },
]
const Skills = ()=> {
    return(
        <Sidebar > 
            <div className="skills-container">
                <h1 className="title">SKILLS</h1>
                <div className="skills-content">
                    {imgItems.map((item,index)=>(
                        <div className="box-item" key={index}>
                            <img src={item.image} className="img-logo" alt={item.img_name} />
                        </div>
                    ))}
                </div>
            </div>
        </Sidebar>
    )

}
export default Skills