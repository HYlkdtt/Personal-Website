import './pages.css';
import AboutImage from '../assets/aboutPic.png';

function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="about-content">
          {/* Left side - Profile Image */}
          <div className="about-image">
            <img src={AboutImage} alt="Haoyang Luo" />
          </div>

          {/* Right side - Content */}
          <div className="about-text">
            <div className="about-intro">
              <h2>ABOUT ME</h2>
              <h1>HAOYANG LUO</h1>
              <p className="subtitle">SOFTWARE DEVELOPER</p>
            </div>

            <div className="about-description">
              <p>
                I'm a Computer Engineering student at the University of Waterloo with a passion for 
                creating innovative software solutions.
              </p>
              <p>
                When I'm not coding, you'll find me on the basketball court or exploring the world 
                through my camera lens. 
              </p>
            </div>

            {/* Programming Languages */}
            <div className="languages-section">
              <h3>LANGUAGES I USE</h3>
              <div className="language-blocks">
                <div className="language-block python">
                  <div className="language-symbol">🐍</div>
                  <span>PYTHON</span>
                </div>
                <div className="language-block javascript">
                  <div className="language-symbol">🌐</div>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="language-block cpp">
                  <div className="language-symbol">⚙️</div>
                  <span>C/C++</span>
                </div>
                <div className="language-block sql">
                  <div className="language-symbol">🗂️</div>
                  <span>SQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;