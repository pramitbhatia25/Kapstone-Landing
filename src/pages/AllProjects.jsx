import { useEffect, useState } from "react";
import CustomNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkeletonProjects from "../components/SkeletonProjects";
import { Input } from "@nextui-org/react";

function AllProjects({ isSidebarOpen, setIsSidebarOpen }) {


    const allFilters = [
        "All",
        "Artificial Intelligence",
        "Machine Learning",
        "Cybersecurity",
        "Blockchain",
        "Cloud Computing",
        "Data Science",
        "Internet of Things",
        "Augmented Reality",
        "Virtual Reality",
        "Robotics",
        "Big Data",
        "DevOps",
        "Quantum Computing",
        "Edge Computing",
        "Digital Twin",
        "Natural Language Processing",
        "Computer Vision",
        "Game Development",
        "Human-Computer Interaction",
        "Mobile App Development",
        "Web Development",
        "Autonomous Systems",
        "E-Learning Platforms",
        "Healthcare Technology",
        "Fintech Solutions",
        "Renewable Energy Systems",
        "Smart Cities",
        "Social Network Analysis",
        "Biometric Security Systems",
        "3D Printing",
    ]

    const SearchIcon = (props) => {
        return (
            <svg
                aria-hidden="true"
                fill="none"
                focusable="false"
                height="1em"
                role="presentation"
                viewBox="0 0 24 24"
                width="1em"
                {...props}
            >
                <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
                <path
                    d="M22 22L20 20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                />
            </svg>
        );
    };

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://kapstone-landing-server.vercel.app/projects')
            .then((response) => response.json())
            .then((receivedData) => {
                setData(receivedData)
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, [])


    return <div className="allProjects bg-[#0f0f0f]">
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


            <div className="main flex flex-col">
                <div className={`h-fit w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
                    <div className="w-full p-4 h-full items-center max-h-[60px] overflow-hidden">
                        <Input
                            isClearable
                            size={"sm"}
                            classNames={{
                                label: "text-black/50 dark:text-white/90",
                                input: [
                                    "bg-transparent",
                                    "text-black/90 dark:text-white/90",
                                    "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                ],
                                innerWrapper: "bg-transparent",
                                inputWrapper: [
                                    "shadow-xl",
                                    "bg-default-200/50",
                                    "dark:bg-default/60",
                                    "backdrop-blur-xl",
                                    "backdrop-saturate-200",
                                    "hover:bg-default-200/70",
                                    "dark:hover:bg-default/70",
                                    "group-data-[focus=true]:bg-default-200/50",
                                    "dark:group-data-[focus=true]:bg-default/60",
                                    "!cursor-text",
                                ],
                            }}
                            placeholder="Type to search..."
                            radius="sm"
                            startContent={
                                <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                            }
                        />
                    </div>
                </div>
                <div className={`h-[max(80dvh,calc(90dvh-60px))] overflow-auto flex flex-col w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
                    <SkeletonProjects isSidebarOpen={isSidebarOpen} data={data} />
                </div>
            </div>

        </div>

    </div>
}

export default AllProjects;