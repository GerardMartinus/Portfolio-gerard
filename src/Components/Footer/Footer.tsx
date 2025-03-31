import "./Footer.css";
import InstagramLogo from "../../Assets/Images/instagram-logo.png";
import GitHubLogo from "../../Assets/Icons/icons8-github-100.png";
import ItchLogo from "../../Assets/Images/itch-icon.png";

const Footer = () => {
  return (
    <footer className="footer-container bg-dark row mt-5 p-5">
      <div className="left-footer col text-start d-flex align-items-center justify-content-start text-light">
        <p className="footer-container-text col justify-content-start text-light m-0">
          © 2025 by Gerard Martinus.
        </p>
      </div>
      <div className="contacts col justify-content-end text-end">
        <h5 className="text-light">Contacts</h5>
        <div className="right-footer col justify-content-end text-end">
          <a href="https://www.instagram.com/https.gerard_/" className="mx-2">
            <img src={InstagramLogo} alt="" className="rounded" width="30px" />
          </a>
          <a href="https://github.com/GerardMartinus" className="mx-2">
            <img
              src={GitHubLogo}
              alt=""
              className="rounded negative"
              width="30px"
            />
          </a>
          <a href="gerardmartinus.itch.io" className="mx-2">
            <img src={ItchLogo} alt="" className="rounded" width="30px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
