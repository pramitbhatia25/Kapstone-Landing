import { useEffect, useState } from "react";
import CustomNavbar from "../components/Navbar";
import { Avatar, Skeleton } from "@nextui-org/react";
import Sidebar from "../components/Sidebar";
import projects from "../data/projects";
import SkeletonProjects from "../components/SkeletonProjects";
import Filters from "../components/Filters";

function LandingPage2({ isSidebarOpen, setIsSidebarOpen }) {


    const [selectedFilters, setSelectedFilters] = useState("All");
    const [data, setData] = useState([])

    useEffect(() => {

        const timer = setTimeout(() => {
            setData(projects)
        }, 2000);

        return () => clearTimeout(timer);

    }, [])

    return <div className="landingpage2 bg-[#0f0f0f]">
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
                    <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
                </div>
                <div className={`h-[max(80dvh,calc(90dvh-60px))] overflow-auto flex flex-col w-[100dvw] ${isSidebarOpen ? "md:w-[85dvw]" : "md:w-[95dvw]"}`}>
                    <SkeletonProjects isSidebarOpen={isSidebarOpen} data={data} selectedFilters={selectedFilters} />
                </div>
            </div>

        </div>

    </div>
}

export default LandingPage2;