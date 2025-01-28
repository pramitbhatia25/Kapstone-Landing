import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CustomNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight'

function ProjectDetails({ isSidebarOpen, setIsSidebarOpen }) {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const markdownContent = `# AI-Powered Virtual Assistant\n\n## Introduction\nThe AI-Powered Virtual Assistant is a Python-based project built with TensorFlow that leverages state-of-the-art machine learning techniques to provide an intelligent and interactive user experience. This assistant can perform tasks such as answering questions, managing schedules, and even processing natural language commands, making it an ideal tool for personal and professional productivity. With its modular design, it can be extended to integrate additional features and functionalities.\n\n## Features\n- **Natural Language Processing (NLP):** Understand and respond to human language effectively.\n- **Task Automation:** Execute repetitive tasks such as scheduling and reminders.\n- **Speech Recognition:** Convert spoken words into text using advanced AI models.\n- **Customizable Workflows:** Easily adapt the assistant to fit your unique needs.\n\n## Installation\nFollow these steps to install and set up the virtual assistant on your local machine:\n\n1. Clone the repository:\n~~~js\ngit clone https://github.com/your-repo/ai-powered-virtual-assistant.git\n~~~\n\n2. Navigate to the project directory:\n~~~js\ncd ai-powered-virtual-assistant\n~~~\n\n3. Create a virtual environment and activate it:\n~~~js\npython3 -m venv env\nsource env/bin/activate\n~~~\n\n4. Install the required dependencies:\n~~~js\npip install -r requirements.txt\n~~~\n\n5. (Optional) Install additional packages for speech recognition or other advanced features:\n~~~js\npip install SpeechRecognition pyaudio\n~~~\n\n## Usage\nOnce installed, you can start the assistant with the following command:\n\n~~~js\npython assistant.py\n~~~\n\nInteract with the assistant by typing commands or speaking into the microphone if speech recognition is enabled. Example commands:\n- \"What's the weather today?\"\n- \"Set a reminder for my meeting at 3 PM.\"\n- \"Tell me a fun fact.\"\n\nFor a complete list of supported commands, refer to the commands.md file in the repository.\n\n## Contributing\nWe welcome contributions from developers and enthusiasts to enhance the project. Here’s how you can contribute:\n\n1. Fork the repository and create a new branch for your feature:\n~~~js\ngit checkout -b feature-name\n~~~\n\n2. Make your changes and commit them:\n~~~js\ngit commit -m \"Add feature: feature-name\"\n~~~\n\n3. Push your changes and submit a pull request:\n~~~js\ngit push origin feature-name\n~~~\n\nPlease make sure to follow the contribution guidelines outlined in the CONTRIBUTING.md file.\n\n## Additional Resources\n- **Documentation:** Comprehensive documentation is available in the docs/ folder, covering all aspects of the project.\n- **Support:** If you encounter issues, please check the FAQ.md file or open an issue on the GitHub repository.\n- **Examples:** Ready-to-use examples are available in the examples/ folder to help you get started quickly.\n\n## Future Plans\nWe aim to continually improve this virtual assistant by integrating the following features:\n- Machine learning-based personalization.\n- Advanced dialogue management systems.\n- Integration with third-party APIs such as Google Calendar and Slack.\n\nWe’re excited to have you join us on this journey of creating a smarter, AI-driven future!`;

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
        console.log(err.message);
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



      <div className={`main w-[100dvw] h-fit ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>

        {loading &&
          <div className={`h-full flex justify-center items-center w-full`}>
            Loading...
          </div>}

        {!loading && project &&
          <div className={`flex md:flex-row w-full `}>
            <div className={`h-[max(85dvh,calc(95dvh-60px))] md:h-[max(90dvh,calc(100dvh-60px))] p-4 flex flex-col overflow-auto w-[100%] md:w-[70%]`}>
              <div className="w-full h-fit flex justify-center md:justify-start mb-6 rounded-lg">
                <img src={`https://kapstoneimages.blob.core.windows.net/images/${project.id}.jpg`} alt={`${project.name}`} className="w-fit object-cover h-[300px] md:h-[300px] rounded-lg" />
              </div>
              <div className="text-white md:w-[95%]">
                <ReactMarkdown
                  rehypePlugins={[rehypeHighlight]}

                  components={{
                    h1: ({ node, ...props }) => (
                      <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left text-white mb-10" {...props} />
                    ),
                    code: ({ inline, className, children, ...props }) => (
                      <code
                        className={`text-sm block w-full bg-[#151b23] text-white my-2 p-2 overflow-auto`}
                        {...props}
                      >
                        {children}
                      </code>
                    ),
                    h2: ({ node, ...props }) => (
                      <div className="md:text-xl font-semibold text-white my-5" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                      <p className="text-md text-white mb-2" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="list-disc pl-5 text-md text-white mb-4" {...props} />
                    ),
                    li: ({ node, ...props }) => <li className="text-md" {...props} />,
                  }}
                >{markdownContent}</ReactMarkdown>
              </div>
            </div>
            <div className={`h-[max(85dvh,calc(95dvh-60px))] md:h-[max(90dvh,calc(100dvh-60px))] p-4 hidden md:flex md:flex-col md:justify-center md:items-center overflow-hidden md:w-[30%]`}>
              ✨ AI Chat Coming Soon 😉
            </div>
            <div className="md:hidden absolute bottom-0 h-[4dvh] bg-[#0f0f0f] w-[95%] mx-[2.5%] my-[0.5dvh] rounded-xl flex justify-center items-center">
              ✨ AI Chat Coming Soon 😉
            </div>
          </div>
        }

      </div>

    </div>

  </div>



  );
}

export default ProjectDetails;
