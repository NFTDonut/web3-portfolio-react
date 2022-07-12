export default function Projects() {
    return (
        <div className="container" id="projects">
            <div className="container-title-left">
                <h2 data-aos="fade-left">PROJECTS</h2>
            </div>
            <div className="container-content">
                <div className="project-card" data-aos="fade-right">
                    <h3>Web3 Dashboard</h3>
                    <img src={require("./images/web3-dashboard.PNG")} alt="Dashboard screenshot" className="card-img"></img>
                    
                    <div className="project-skills-container">
                        <h5>Requirements:</h5>
                        <ul>
                            <li><b>Next.js</b> for front end development</li>
                            <li><b>Ethers.js</b> for MetaMask + blockchain interactions</li>
                            <li><b>Alchemy</b> + <b>Etherscan APIs</b> to get data</li>
                        </ul>
                    </div>
                    <div className="projectBtnContainer">
                        <a className="gradient-button" href="https://dash.web3dev.dev/">
                            <h4>Site</h4>
                        </a>
                        <a className="gradient-button" href="https://github.com/NFTDonut/web3-dashboard">                      
                            <h4>Code</h4>
                        </a>
                    </div>
                </div>
                <div className="project-card" data-aos="fade-right">
                    <h3>ERC721 Minting Bot</h3>
                    <img src={require("./images/nft-minting-bot.PNG")} alt="Bot screenshot" className="card-img"></img>
                    
                    <div className="project-skills-container">
                        <h5>Requirements:</h5>
                        <ul>
                            <li><b>Solidity</b> for ERC721 NFT contract</li>
                            <li><b>Hardhat</b> for contract testing</li>
                            <li><b>Alchemy</b> for API connection</li>
                            <li><b>Ethers.js</b> for MetaMask + blockchain</li>
                            <li><b>React JS</b> for front end development</li>
                        </ul>
                    </div>
                    <div className="projectBtnContainer">
                        <a className="gradient-button" href="https://bot.web3dev.dev/">
                            <h4>Site</h4>
                        </a>
                        <a className="gradient-button" href="https://github.com/NFTDonut/nft-minting-bot">
                            <h4>Code</h4>
                        </a>
                    </div>
                </div>
                <div className="project-card" data-aos="fade-right">
                    <h3>Buy Me a Donut</h3>
                    <img src={require("./images/buy-me-a-donut.PNG")} alt="Project screenshot" className="card-img"></img>
                    
                    <div className="project-skills-container">
                        <h5>Requirements:</h5>
                        <ul>
                            <li><b>Solidity</b> for smart contract development</li>
                            <li><b>Hardhat</b> for contract testing</li>
                            <li><b>Alchemy</b> for API connection</li>
                            <li><b>Ethers.js</b> for MetaMask + blockchain interactions</li>
                            <li><b>Next.js</b> for front end development</li>
                        </ul>
                    </div>
                    <div className="projectBtnContainer">
                        <a className="gradient-button" href="https://donut.web3dev.dev/">
                            <h4>Site</h4>
                        </a>
                        <a className="gradient-button" href="https://github.com/NFTDonut/buy-me-a-donut">
                            <h4>Code</h4>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}