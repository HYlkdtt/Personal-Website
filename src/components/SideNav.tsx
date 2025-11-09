import { useState, useEffect } from 'react';
import './SideNav.css';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' }
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const scrollContainer = document.getElementById('root');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollY = scrollContainer.scrollTop;
      const windowHeight = scrollContainer.clientHeight;
      const scrollPosition = scrollY + windowHeight / 3;

      let currentSection = navItems[0].id;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            currentSection = item.id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="side-nav">
      <div className="nav-line"></div>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li key={item.id} className={`nav-item ${activeSection === item.id ? 'active' : ''}`}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="nav-button"
              aria-label={`Navigate to ${item.label}`}
            >
              <span className="nav-dot"></span>
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;
