import { useEffect, useState } from "react";
import CustomNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkeletonProjects from "../components/SkeletonProjects";
import Filters from "../components/Filters";

function AllProjects({ isSidebarOpen, setIsSidebarOpen }) {


    const [selectedFilters, setSelectedFilters] = useState("All");
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
                <div className={`h-[10dvh] w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
                    <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} allFilters={allFilters} />
                </div>
                <div className={`h-[max(80dvh,calc(90dvh-60px))] overflow-auto flex flex-col w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
                    <SkeletonProjects isSidebarOpen={isSidebarOpen} data={data} selectedFilters={selectedFilters} />
                </div>
            </div>

        </div>

    </div>
}

export default AllProjects;