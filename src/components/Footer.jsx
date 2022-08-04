import github from "../images/gitHub-icon.png"
import linkedin from "../images/linkedin-icon.png"

export default function Footer() {
    return(
       <div className="footer">
           <a href="https://github.com/mhdalihoria" className="footer--icon" target="_blank">
               <img src={github} alt="" />
           </a>

           <a href="https://www.linkedin.com/in/ali-horia/" className="footer--icon" target="_blank">
               <img src={linkedin} alt="" />
           </a>
       </div>
    )
}