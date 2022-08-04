import profilePic from "../images/profile-photo.jpg"
import emailIcon from "../images/email-icon.png"

export default function Info() {
    return(
        <div className="info">

            <img src={profilePic} alt="" className="info--profile--photo" />

            <div className="info--container">
                <h1 className="info--name">Mhd Ali Houria</h1>

                <h4 className="info--occupation">Front-end Dev</h4>

                <h6 className="info--website"><a href="https://ali-1st-portfolio.netlify.app/" target="_blank">ali-1st-portfolio.netlify.app</a></h6>

                <button type="submit" className='info--email--btn'>
                    <img src={emailIcon} alt="" className="info--email--btn__icon" />
                    Email
                </button>
            </div>
        </div>
    )
}