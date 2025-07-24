import './pages.css';
import profileImage from '../assets/psPic.png';
import { useState, useEffect } from 'react';

function Home() {
  const [welcomeText, setWelcomeText] = useState('');
  const [nameText, setNameText] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const fullWelcomeText = 'WELCOME. THIS IS';
  const fullNameText = 'HAOYANG LUO';
  const fullSubtitleText = 'A COMPUTER ENGINEERING STUDENT AT WATERLOO';

  useEffect(function() {
    // Cursor blinking effect
    const cursorInterval = setInterval(function() {
      setShowCursor(function(prev) { return !prev; });
    }, 500);

    // Welcome text animation
    let welcomeIndex = 0;
    const welcomeTimer = setInterval(function() {
      if (welcomeIndex < fullWelcomeText.length) {
        setWelcomeText(fullWelcomeText.slice(0, welcomeIndex + 1));
        welcomeIndex++;
      } else {
        clearInterval(welcomeTimer);
        
        // Start name animation after welcome is done
        let nameIndex = 0;
        const nameTimer = setInterval(function() {
          if (nameIndex < fullNameText.length) {
            setNameText(fullNameText.slice(0, nameIndex + 1));
            nameIndex++;
          } else {
            clearInterval(nameTimer);
            
            // Start subtitle animation after name is done
            let subtitleIndex = 0;
            const subtitleTimer = setInterval(function() {
              if (subtitleIndex < fullSubtitleText.length) {
                setSubtitleText(fullSubtitleText.slice(0, subtitleIndex + 1));
                subtitleIndex++;
              } else {
                clearInterval(subtitleTimer);
                // Stop cursor blinking when all text is done
                setTimeout(function() {
                  clearInterval(cursorInterval);
                  setShowCursor(false);
                }, 2000);
              }
            }, 50);
          }
        }, 100);
      }
    }, 100);

    // Cleanup function
    return function() {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-content">
          <div className="text-section">
            <p className="welcome-text">
              {welcomeText}
              {welcomeText === fullWelcomeText ? '' : (showCursor ? '|' : '')}
            </p>
            <h1 className="name-title">
              {nameText}
              {nameText === fullNameText ? '' : (showCursor ? '|' : '')}
            </h1>
            <p className="subtitle">
              {subtitleText}
              {subtitleText === fullSubtitleText ? '' : (showCursor ? '|' : '')}
            </p>
          </div>
          <div className="image-section">
            <div className="profile-image">
              <img src={profileImage} alt="Haoyang Luo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;