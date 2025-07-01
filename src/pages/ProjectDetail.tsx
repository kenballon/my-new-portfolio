import { useParams, useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const projectData: Record<
  string,
  {
    title: string;
    body: string;
    livesite_url?: string;
    image_url?: string;
    categories?: string;
  }
> = {
  "charltons-law": {
    title: "Charltons Law Firm",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    livesite_url: "https://www.charltonslaw.com",
    image_url:
      "https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: "IDENTITY / CAMPAIGN / PHOTOGRAPHY",
  },
  "ria-activate": {
    title: "RIA Activate New York",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    livesite_url: "https://www.riaactivate.com",
    image_url:
      "https://images.unsplash.com/photo-1749812041360-c922df0e67a3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: "IDENTITY / CAMPAIGN / PHOTOGRAPHY",
  },
  "insurance-business": {
    title: "Insurance Business Magazine",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    livesite_url: "https://www.insurancebusinessmag.com",
    image_url:
      "https://images.unsplash.com/photo-1747167843105-1da5888af928?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    categories: "IDENTITY / CAMPAIGN / PHOTOGRAPHY",
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  //   const navigate = useNavigate();
  const project = projectData[projectId || ""];

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <PageTransition>
      <div className="project-detail min-h-screen bg-[#f7f5ef] text-black pt-9">
        <div className="px-8 pt-8">
          <div className="font-mono text-xs mb-2">{project.categories}</div>
          <h1 className="text-7xl font-light leading-tight mb-2">
            {project.title} <span className="text-2xl align-top">(1)</span>
          </h1>
        </div>
        {project.image_url && (
          <div className="w-full mt-4">
            <img
              src={project.image_url}
              alt={project.title}
              className="w-full object-cover max-h-[400px]"
            />
          </div>
        )}
        <div className="px-8 py-8 max-w-3xl">
          <p className="mb-8 text-lg">{project.body}</p>
          {project.livesite_url && (
            <a
              href={project.livesite_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              View Live Site
            </a>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
