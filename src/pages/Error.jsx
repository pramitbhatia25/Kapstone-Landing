import { useEffect, useState } from "react";
import CustomNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SkeletonProjects from "../components/SkeletonProjects";
import Filters from "../components/Filters";

function Error({ isSidebarOpen, setIsSidebarOpen }) {


    return <div className="error bg-[#0f0f0f]">
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


            <div className="main flex flex-col text-white">
                You have hit an error! Sorry!
            </div>

        </div>

    </div>
}

export default Error;