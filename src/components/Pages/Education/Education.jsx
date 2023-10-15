import Sidebar from "../../Layouts/Sidebar"
import imgEducation from "./../../../assets/images/education.png";
import "./Education.scss";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


const Education = ()=> {
    return(
        <Sidebar > 
            <div className="education-container">
                <h1 className="title">EDUCATION</h1>
                <div className="education-content">
                    <div className="education-content__left">
                        <ul>
                            <li>
                                <CircleOutlinedIcon />
                                KARYASARI 2 (2013-2015)
                            </li>
                            <li>
                                <CircleOutlinedIcon />
                                SMPN 1 LEUWIGOONG (2015-2018)
                            </li>
                            <li>
                                <CircleOutlinedIcon />
                                SMAN 10 GARUT (2018-2021)
                            </li>
                            <li>
                                <CircleOutlinedIcon />
                                INSTITUT TEKNOLOGI GARUT (2021- Now)
                            </li>
                        </ul>
                    </div>
                    <div className="education-content__right">
                        <img src={imgEducation} alt="education" />
                    </div>
                </div>
            </div>
        </Sidebar>
    )
}
export default Education