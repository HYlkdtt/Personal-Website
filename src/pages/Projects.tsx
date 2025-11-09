import './Page.css';

const Projects = () => {
  const projects = [
    {
      title: "Regression Line Grapher",
      description: "This is a dedicated web app for IBDP Physics Internal Assessment",
      link: "https://github.com/HYlkdtt/regressionLineGrapher",
      tags: ["React", "FastAPI", "Javascript", "Python"]
    },
  ];

  return (
    <section className="page" id="projects">
      <div className="page-content">
        <div className="projects-container">
          <h2 className="section-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
