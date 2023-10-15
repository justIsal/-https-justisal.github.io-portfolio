import Form from "../../Fragments/Form/Form"
import Sidebar from "../../Layouts/Sidebar";
import "./Contact.scss"
const Contact = ()=> {
    return(
        <Sidebar > 
            <div className="contact-container">
                <h1 className="title">CONTACT</h1>
                <div className="contact-content">
                    <Form />
                </div>
            </div>
        </Sidebar>
    )
}
export default Contact