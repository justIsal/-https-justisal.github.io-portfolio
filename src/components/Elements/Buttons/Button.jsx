import { Link } from "react-router-dom";
import "./Button.scss"
export const Button = ({to,children,className})=> {
    return(
        <div className="btn">
            <Link to={to} className={`button ${className}`}>{children}</Link>
        </div>
    )
}