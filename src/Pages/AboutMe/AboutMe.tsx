import Window from "../../Components/Window/Window";
import RocketRank from "../../Assets/Images/rocket-rank-pixel-art.png";
import ProaAward from "../../Assets/Images/proa-award.png";
import SemanaGeek from "../../Assets/Images/semana-geek-award.png";
import MarioKart from "../../Assets/Images/mario-kart-8-pixel-art.png";

function AboutMe() {
  return (
    <div className="about-me container my-5">
      <Window title="About me">
        <div className="about-me-content d-flex">
          <div className="left-content d-flex align-items-center">
            I love making games that are fun and interesting to play. I enjoy
            trying out different ideas for gameplay, stories, and design to
            create unique experiences. Experimenting with new mechanics and ways
            to make a game feel more engaging is something I really enjoy.
            Besides game development, I also like exploring web technologies and
            how they can make games more interactive. I'm always looking for new
            things to learn and new challenges to take on!
          </div>
        </div>
        <div className="fun-facts-awards-container"></div>
        <div className="fun-facts d-flex justify-content-center align-items-center flex-column m-4">
          <h4>Fun Facts</h4>
          <div className="fun-facts-content row">
            <div className="rocket-rank col-12 col-md-6 justify-content-center text-center text-wrap">
              <img src={RocketRank} alt="" width="200px" />
              <h5>Rocket League Player</h5>
              <p>
                I'm a highly skilled (or at least I like to think so)
                competitive Rocket League player. One day I'm soaring through
                the ranks as a Champion, feeling like a pro, and the next, I'm
                tumbling back down to Diamond, questioning all my life choices.
                It's a never-ending rollercoaster of wins, losses, and
                completely missing the ball at the worst possible moments.
              </p>
            </div>
            <div className="mario-kart-rank col-12 col-md-6 justify-content-center text-center text-wrap">
              <img src={MarioKart} alt="" width="100px" />
              <h5 className="text-center">Regional Winner of Mario Kart 8 – Museu do Videogame Itinerante, Shopping Itaquera (2019)</h5>
            </div>
          </div>
        </div>
        <div className="awards d-flex justify-content-center align-items-center flex-column m-4">
          <h4>Awards</h4>
          <div className="awards-content row justify-content-center text-center">
            <div className="proa-award col-12 col-md-6 justify-content-center text-center text-wrap">
              <img src={ProaAward} alt="" width="75px" />
              <h5>Outstanding Student - Instituto PROA</h5>
              <p>
                I was recognized as an outstanding student in the [course name]
                for my performance and high attendance. I stayed consistent,
                worked hard, and made sure to always be present and engaged. It
                was a great experience and a nice recognition of my effort!
              </p>
            </div>
            <div className="semana-geek-award col-12 col-md-6 justify-content-center text-center text-wrap">
              <img src={SemanaGeek} alt="" width="300px" />
              <h5>Semana Geek SP 2023 - 3rd Place in the Game Jam</h5>
              <p>
                Developed a digital game with the theme "Fala Quebrada". We
                created "Versos da Quebrada", which won 3rd place at the event.
              </p>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}

export default AboutMe;
