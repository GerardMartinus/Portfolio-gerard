import "./Portfolio.css"
import Window from "../../Components/Window/Window";
import GitHubLogo from "../../Assets/Icons/icons8-github-100.png"
import ItchLogo from "../../Assets/Icons/icons8-itch-io-100.png"
import ItchGamesList from "../../APIs/ItchIo/ItchIo";

function Portfolio() {
    return (
      <div className="Portfolio container mt-5">
        <Window title="Portfolio">
            <h2 className="text-center my-3">My last game projects</h2>
            <div className="projects-list d-flex justify-content-center flex-wrap gap-2">
                <ItchGamesList />
                <iframe src="https://itch.io/embed/3152660" width="530" height="167"><a href="https://powerwave-game-studio.itch.io/twofalls">TwoFalls by Powerwave Studio</a></iframe>
                <iframe src="https://itch.io/embed/2817341" width="530" height="167"><a href="https://pink-hat-game-studio.itch.io/travessia-desorientada-atraves-dos-horizontes">Travessia Desorientada Através dos Horizontes by Pink Hat Studio</a></iframe>
                <iframe src="https://itch.io/embed/2789711" width="530" height="167" ><a href="https://pink-hat-game-studio.itch.io/rs-flood-aid-trials-of-kindness">RS Flood Aid: Trials of Kindness by Pink Hat Studio</a></iframe>
                <iframe src="https://itch.io/embed/2553571" width="530" height="167"><a href="https://garapagames.itch.io/bastard-rebels">Bastard Rebels by GarapaGames</a></iframe>
                <iframe src="https://itch.io/embed/2086333" width="530" height="167"><a href="https://gerardmartinus.itch.io/forgotten-past-stargaze">Forgotten Past: Stargaze by Gerard Games</a></iframe>
            </div>
            <h2 className="text-center my-3">My contributions</h2>
            <div className="projects-list d-flex justify-content-center flex-wrap gap-2">
                <a href="https://github.com/GerardMartinus">
                    <img src={GitHubLogo} alt="github logo" className="negative" />
                </a>
                <a href="https://gerardmartinus.itch.io">
                    <img src={ItchLogo} alt="itch.io logo" className="negative" />
                </a>
            </div>
        </Window>
      </div>
    );
}
  
export default Portfolio;