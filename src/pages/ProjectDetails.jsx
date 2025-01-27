import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Spacer } from "@nextui-org/react";

function ProjectDetails({ isSidebarOpen, setIsSidebarOpen }) {
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
        console.log(data)
        setProject(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

  return (<div className="projectdetails">

    <div className="w-full top-0 z-[50]">
      <CustomNavbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
    </div>


    <div className="content w-[100dvw] h-[max(90dvh,calc(100dvh-60px))] flex flex-row">

      <div
        className={`sidebar h-[max(90dvh,calc(100dvh-60px))] bg-[#0f0f0f]
            ${isSidebarOpen ? 'absolute w-[50dvw] h-[max(90dvh,calc(100dvh-60px))] left-0 z-10 md:relative md:w-[15vw]' : 'relative w-0 md:w-[5vw]'}
            `}
      >
        <Sidebar isSidebarOpen={isSidebarOpen} />
      </div>



      <div className={`main h-full w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>

        {loading && <div className={`h-[max(90dvh,calc(90dvh-60px))] flex justify-center items-center w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
          Loading...
        </div>}

        {project && <div className={`h-[max(90dvh,calc(90dvh-60px))] p-4 flex flex-col overflow-auto w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>

          <div className="w-full h-fit flex justify-center md:justify-start mb-6 rounded-lg">
            <img src={`https://kapstoneimages.blob.core.windows.net/images/${project.id}.jpg`} alt={`${project.name}`} className="w-[90%] md:w-[55%] object-cover h-[300px] md:h-[300px] rounded-lg" />
          </div>

          <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-white mb-5">{project.name}</h1>

          <div className="guide">
            <div className="md:text-xl font-semibold text-white mb-2">Installation</div>
            <div className="text-md text-white mb-2">
              1. Clone the repository:
              <code className="text-md block md:inline bg-gray-100 text-black px-2 py-1 my-5 md:my-0 mx-5 rounded">git clone https://github.com/your-username/project-name</code>
            </div>
            <div className="text-md text-white mb-2">
              2. Install dependencies:
              <code className="text-md block md:inline bg-gray-100 text-black px-2 py-1 my-5 md:my-0 mx-5 rounded">npm install</code>
            </div>
            <div className="text-md text-white mb-2">
              3. Run the project:
              <code className="text-md block md:inline bg-gray-100 text-black px-2 py-1 my-5 md:my-0 mx-5 rounded">npm start</code>
            </div>

            <Spacer y={10} />

            <div className="md:text-xl font-semibold text-white mb-2">Usage</div>
            <div className="text-md text-white mb-4">
              To use the project, follow these steps:
              <ul className="list-disc pl-5">
                <li>Start by configuring the project settings.</li>
                <li>Run the app on your local server and open your browser.</li>
                <li>Interact with the features and make adjustments based on your needs.</li>
              </ul>
            </div>

            <Spacer y={10} />

            <div className="md:text-xl font-semibold text-white mb-2">Contributing</div>
            <div className="text-md text-white mb-4">
              We welcome contributions! Here's how you can contribute:
              <ul className="list-disc pl-5">
                <li>Fork the repo.</li>
                <li>Create a new branch for your feature.</li>
                <li>Make your changes and submit a pull request.</li>
              </ul>
            </div>

          </div>
        </div>}
      </div>

    </div>

  </div>



  );
}

export default ProjectDetails;
