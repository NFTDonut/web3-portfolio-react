import { Link } from 'react-scroll';

export default function About() {
    return (
        <div className="container" id="about">
            <div className="container-title-left">
                <h2 data-aos="fade-left">ABOUT</h2>
            </div>
            <div className="container-content">
                <div className="about-card" data-aos="fade-right">
                    <h3>Caleb Rider</h3>
                    <p>&emsp;&emsp;Hello, and welcome! After leaving my full time position as an electrical/software engineer in 2021, 
                        I was sucked into the rabbit hole of Web3... I was fascinated by blockchain technology and 
                        its massive potential! Initially, I explored the world of DeFi (particularly flash loans + 
                        exchange arbitrage), but as my desire 
                        to learn continued to grow, I ended up getting traction in the NFT space as an educator and project 
                        consultant. Now that I have a broader understanding of the Web3 space, I'm doubling down on 
                        the software development side of things, although the more I learn, the more I realize how much I don't know.
                        <br></br>
                        &emsp;&emsp;I'm always looking to expand my network, so if you're 
                        interested in connecting with me for any reason, feel free to reach out!
                    </p>
                    <Link className="gradient-button" activeClass="active" to="connect" spy={true} smooth={true} offset={-60} duration={1000}>
                        <h4>Connect</h4>
                    </Link>
                </div>
            </div>
        </div>

    )
}