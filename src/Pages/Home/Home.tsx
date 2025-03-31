import "./Home.css";

import GodotIconPixelArt from "../../Assets/Images/Godot-icon-pixel-art.png";
import AngularIconPixelArt from "../../Assets/Images/Angular-icon-pixel-art.png";
import ReactIconPixelArt from "../../Assets/Images/React-icon-pixel-art.png";
import UnityIconPixelArt from "../../Assets/Images/Unity-icon-pixel-art.png";
import AsepriteIconPixelArt from "../../Assets/Images/aseprite-icon-pixel-art.png";
import FigmaIconPixelArt from "../../Assets/Images/Figma-icon-pixel-art.png";
import GGProfileAvatar from "../../Assets/Images/gg-profile-avatar-128.png";

import PopUp from "../../Components/PopUp/PopUp";
import Window from "../../Components/Window/Window";

interface Stack {
  name: string;
  image: string;
}

const stacks: Stack[] = [
  { name: "React", image: ReactIconPixelArt },
  { name: "Angular", image: AngularIconPixelArt },
  { name: "Godot", image: GodotIconPixelArt },
  { name: "Unity", image: UnityIconPixelArt },
  { name: "Aseprite", image: AsepriteIconPixelArt },
  { name: "Figma", image: FigmaIconPixelArt },
];

function StackCard({ stack }: { stack: Stack }) {
  return (
    <div className="col-12 col-md-4 justify-content-center text-center text-wrap">
      <img
        src={stack.image}
        alt={stack.name}
        width="100px"
        className="mx-auto mb-4"
      />
      <p className="text-xl font-bold text-center">{stack.name}</p>
    </div>
  );
}

function Home() {
  return (
    <div className="Home">
      <div className="container mt-5">
        <Window title="Home">
          <div className="home-pop-up d-flex flex-column flex-md-row align-items-center justify-content-end w-100 gap-4">
            <div className="home-content d-flex justify-content-end w-50">
              <div className="d-flex flex-column gap-2">
                <h4 className="text-2xl font-bold text-center mb-6">
                  My Stacks
                </h4>
                <div className="row justify-content-center text-center">
                  {stacks.map((stack, index) => (
                    <StackCard key={index} stack={stack} />
                  ))}
                </div>
              </div>
            </div>

            <PopUp>
              <div className="d-flex flex-column">
                <div className="d-flex my-2">
                  <h4>About me</h4>
                </div>

                <p>
                  Focused on game development using engines like Godot and
                  Unity, with experience in creating platformers, puzzles, and
                  interactive mechanics. Also involved in web development,
                  exploring opportunities to combine programming skills with
                  game design and interactive experiences. Always eager to learn
                  and take on new challenges.
                </p>

                <a
                  href="/about-me"
                  className="d-flex justify-content-center align-items-center flex-column text-decoration-none text-warning"
                >
                  <div className="card bg-secondary">
                    <img src={GGProfileAvatar} alt="" width="100px" />
                  </div>
                  More about me
                </a>
              </div>
            </PopUp>
          </div>
          <div className="project-content d-flex justify-content-around flex-column flex-md-row gap-4 my-5">
            <div className="left-content col-12 col-md-4 justify-content-center text-center text-wrap">
              <h4 className="font-bold mb-6">Last Project</h4>
              <iframe
                src="https://itch.io/embed/3152660"
                width="200"
                height="200"
              >
                <a href="https://powerwave-game-studio.itch.io/twofalls">
                  TwoFalls by Powerwave Studio
                </a>
              </iframe>
              
              <p>TwoFalls by Powerwave Studio</p>
            </div>
            <div className="right-content">
              <PopUp>
                <div className="d-flex flex-column align-items-center justify-content-end w-100">
                  <div className="d-flex justify-content-end my-2 w-100">
                    <h4>My Games</h4>
                  </div>

                  <div className="d-flex flex-column justify-content-end my-2 w-100 text-end">
                    <p>
                      I've always loved playing video games, and now I'm excited
                      about creating them. I've been learning tools like Unity,
                      Godot and Construt to get better at game development, and
                      I have contributions in game development, such as Game
                      Producer, Game Designer, and Artist, and I would like to
                      learn more about the game industry.
                    </p>

                    <a
                      href="/portfolio"
                      className="d-flex justify-content-end text-decoration-none text-warning"
                    >
                      My Portfolio
                    </a>
                  </div>
                </div>
              </PopUp>
            </div>
          </div>
        </Window>
      </div>
    </div>
  );
}

export default Home;
