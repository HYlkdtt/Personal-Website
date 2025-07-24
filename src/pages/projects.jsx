import './pages.css';
import { useState } from 'react';
import RegressionImage from '../assets/RegressionLineGrapher.png';

function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  // Your projects data
  const projects = [
    {
      id: 1,
      title: "Regression Line Grapher",
      description: "An interactive web application that allows users to plot data points and visualize regression lines with statistical analysis. NOT FINISHED!!! STILL WORKING ON IT.",
      image: RegressionImage,
      technologies: ["Python", "Fast API", "JavaScript", "HTML/CSS"],
      github: "https://github.com/HYlkdtt/regressionLineGrapher",
      features: [
        "Interactive data point plotting",
        "Real-time regression line calculation",
        "Statistical analysis display"
      ]
    }
  ];

  const nextProject = function() {
    setCurrentProject(function(prev) {
      return (prev + 1) % projects.length;
    });
  };

  const prevProject = function() {
    setCurrentProject(function(prev) {
      return (prev - 1 + projects.length) % projects.length;
    });
  };

  const project = projects[currentProject];

  return (
    <div className="page">
      <div className="container">
        
        {/* Header */}
        <section className="projects-header-compact">
          <h1 className="projects-title">PROJECTS</h1>
        </section>

        {/* Main Project Display */}
        <section className="project-showcase-compact">
          <div className="project-container-compact">
            
            {/* Navigation Arrows */}
            {projects.length > 1 && (
              <>
                <button className="nav-arrow left-arrow" onClick={prevProject}>
                  &#8249;
                </button>
                <button className="nav-arrow right-arrow" onClick={nextProject}>
                  &#8250;
                </button>
              </>
            )}

            {/* Project Image - Takes up more space */}
            <div className="project-image-section">
              <div className="project-image-compact">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={function(e) {
                    e.target.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div className="project-info-compact">
                <h2 className="project-title-compact">{project.title}</h2>
                <p className="project-description-compact">{project.description}</p>
                
                {/* Technologies Used */}
                <div className="technologies-compact">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map(function(tech, index) {
                      return (
                        <span key={index} className="tech-tag">{tech}</span>
                      );
                    })}
                  </div>
                </div>

                {/* Action Button */}
                <div className="project-actions">
                  <a href={project.github} className="btn-github" target="_blank" rel="noopener noreferrer">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Projects;