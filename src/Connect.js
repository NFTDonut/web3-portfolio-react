import { FaYoutube } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillGithub, AiFillYoutube, AiFillMail} from "react-icons/ai";
import { IconContext } from "react-icons/";

export default function Connect() {
    return (
            <div className="container" id="connect">
                <div className="container-title-right">
                    <h2 data-aos="fade-right">CONNECT</h2>
                </div>
                <IconContext.Provider value={{ className: "connectIcons" }}>
                    <div className="iconContainer" data-aos="fade-left">
                        <a href="https://twitter.com/TheCalebRider" className="iconBackground">
                            <AiFillTwitterCircle color="#1da1f2"/>
                        </a>
                        <a href="https://www.youtube.com/channel/UCIBNMyTqHovTeEFFZP3sUaQ" className="iconBackground">
                            <FaYoutube color="ff0000"/>
                        </a>
                        <a href="https://github.com/calebrider" className="iconBackground">
                            <AiFillGithub color="#171515"/>
                        </a>
                        <a href="mailto: calebrider.dev@gmail.com" className="iconBackground">
                            <AiFillMail color="#22BC22"/>
                        </a>
                    </div>
                </IconContext.Provider>
            </div>
    )
}