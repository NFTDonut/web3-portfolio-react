export default function Skills() {
    return (
        <div className="container" id="skills">
            <div className="container-title-right">
                <h2 data-aos="fade-right">SKILLS</h2>
            </div>
            <div className="container-content">
                <div className="skill-card" data-aos="fade-left">
                    <h3>Solidity</h3>
                    <img src={require("./images/solidity-logo.png")} alt="Solidity logo" className="solidity-img"></img>
                    <a className="gradient-button" href="https://soliditylang.org/">
                        <h4>Visit Website</h4>
                    </a>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>React JS</h3>
                    <img src={require("./images/react-logo.png")} alt="React JS logo" className="card-img"></img>
                    <a className="gradient-button" href="https://reactjs.org/">
                        <h4>Visit Website</h4>
                    </a>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>Ethers.js</h3>
                    <img src={require("./images/ethers-js-logo.png")} alt="Ethers.js logo" className="ethers-js-img"></img>
                    <a className="gradient-button" href="https://docs.ethers.io/v5/">
                        <h4>Visit Website</h4>
                    </a>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>Hardhat</h3>
                    <img src={require("./images/hardhat-logo.png")} alt="Hardhat logo" className="card-img"></img>
                    <a className="gradient-button" href="https://hardhat.org/">
                        <h4>Visit Website</h4>
                    </a>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>Alchemy</h3>
                    <img src={require("./images/alchemy-logo.png")} alt="Alchemy logo" className="card-img"></img>
                    <a className="gradient-button" href="https://www.alchemy.com/">
                        <h4>Visit Website</h4>
                    </a>
                </div>
                <div className="skill-card" data-aos="fade-left">
                    <h3>MetaMask</h3>
                    <img src={require("./images/metamask-logo.png")} alt="MetaMask logo" className="card-img"></img>
                    <a className="gradient-button" href="https://metamask.io/">
                        <h4>Visit Website</h4>
                    </a>
                </div>
            </div>
        </div>

    )
}