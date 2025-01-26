import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProjectDetails() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`https://kapstone-landing-server.vercel.app/projects/${projectId}`);
        if (!response.ok) {
          throw new Error('Project not found!');
        }
        const data = await response.json();
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return <div>Loading project...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <p>{project.userName}</p>
      <p>Tags: {project.category.join(", ")}</p>
    </div>
  );
}

export default ProjectDetails;
