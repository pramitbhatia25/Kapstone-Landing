import CustomNavbar from "../components/Navbar";
import "./index.css";
import { Button, Spacer } from '@nextui-org/react';
import projects from "../data/projects";
import msfs from "../assets/msfspng.png"
import sx from "../assets/sx.webp"
import gt from "../assets/gt.png"
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function LandingPage({ isSidebarOpen, setIsSidebarOpen }) {

    const navigate = useNavigate();
    
    const handleProjectClick = (projectId) => {
        navigate(`/projects/${projectId}`);
    };


    return (

        <div className="landingpage">

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


                <div className={`main h-full overflow-scroll w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
                    <div className="flex flex-col items-center md:items-start  justify-center p-4 pt-[5dvh] w-full mx-auto h-fit">

                        <div className="text-4xl md:text-7xl text-center md:text-left w-[95%] font-bold">
                            Project Sourcing Made <span className="text-green-400">Easy</span>
                        </div>

                        <Spacer y={4} />

                        <div className="text-sm md:text-lg text-center md:text-left w-[95%]">
                            <div>
                                Browse 200+ completed CS projects in 20+ different fields, complete with project completion guides, source code & attribution.
                            </div>
                            <div>
                                High School, Undergraduate & Masters level projects now availabe!
                            </div>
                        </div>

                        <Spacer y={4} />

                        <div className="z-[3] flex flex-col sm:flex-row gap-4 max-w-[500px]">
                            <div className="flex gap-4 m-auto">
                                <Button size={"sm"} className="px-8 custom_btn bg-gradient-to-br from-green-500 to-lime-200 border-small border-white/50 shadow-lime-500/30 text-black" onClick={() => { navigate("/projects") }}>
                                    View All Projects
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="h-fit w-full overflow-auto"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        <div className="flex flex-row px-5 md:px-10 md:justify-around animate-marquee"
                            style={{ animation: "marquee 100s linear infinite" }}
                        >
                            <div className="h-full w-full flex gap-5 p-4"
                            >
                                {projects.slice(0, 9)
                                    .map((project) => (
                                        <div key={project.name} className={`w-[80dvw] md:w-[25dvw]`}>
                                            <div
                                                className={`h-[30dvh] max-h-[200px] flex flex-col items-center space-y-2 bg-[#0f0f0f] rounded-lg overflow-hidden`}
                                            >
                                                <div className="h-full w-full hover:scale-[1.1] hover:cursor-pointer transition-transform duration-300 ease-in-out"
                                                onClick={() => {handleProjectClick(project.id)}}                                
                                                >
                                                    <img
                                                        src={`https://kapstoneimages.blob.core.windows.net/images/${project.id}.jpg`}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                className={`w-[80dvw] md:w-[25dvw] md:max-w-[350px] text-white py-2 flex flex-row flex-wrap`}
                                            >
                                                <div className="flex flex-col w-[85%]">
                                                    <h3 className="hover:cursor-pointer w-full font-semibold text-sm flex flex-wrap">
                                                        {project.name}
                                                    </h3>
                                                    <p className="text-xs text-gray-400">@{project.userName}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                        </div>
                    </div>
                    <Spacer y={20} />

                    <div className="h-fit flex justify-center items-center flex-col overflow-hidden">
                        <div className="text-2xl md:text-2xl w-[100%] font-bold gap-[10px] flex items-center justify-center md:justify-start md:ml-10 ">
                            Supported  By
                        </div>

                        <Spacer y={8} />

                        <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row w-full"
                        >
                            <img
                                src={sx}
                                className="h-10 md:h-20 mx-[50px] my-[20px]"
                            />
                            <img
                                src={gt}
                                className="h-15 md:h-20 mx-[50px] my-[20px]"
                            />
                            <img
                                src={msfs}
                                className="h-15 md:h-20 mx-[50px] my-[20px]"
                            />
                        </div>
                    </div>
                    
                    <Footer />

                </div>

            </div>
        </div>
    );
}

export default LandingPage;