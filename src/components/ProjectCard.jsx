export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn secondary">
            View More
          </a>
        )}
      </div>
    </div>
  );
}
