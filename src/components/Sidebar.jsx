import { Divider } from "@nextui-org/react";
import {Home, Layers } from "lucide-react";
import { useLocation } from "react-router-dom";

function Sidebar({ isSidebarOpen }) {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={` ${isSidebarOpen ? "flex-1 p-4" : "w-0 overflow-hidden md:w-full md:flex-1 md:p-4"}`}>
            <ul className="space-y-2">
                <li>
                    <a
                        href="/"
                        className={`flex items-center gap-4 rounded-lg transition-colors ${
                            isActive("/") ? "bg-white bg-opacity-10 text-white" : "bg-[#0f0f0f] hover:bg-white hover:bg-opacity-10"
                        } ${isSidebarOpen ? "flex flex-row justify-start p-1" : "flex flex-row justify-center py-1"}`}
                    >
                        <Home className="w-[1.5dvw] mx-[0.25dvw] flex-shrink-0 min-w-[20px]" />
                        {isSidebarOpen && <span className="text-sm">Home</span>}
                    </a>
                </li>
                <li>
                    <a
                        href="/projects"
                        className={`flex items-center gap-4 rounded-lg transition-colors ${
                            isActive("/projects") ? "bg-white bg-opacity-10 text-white" : "bg-[#0f0f0f] hover:bg-white hover:bg-opacity-10"
                        } ${isSidebarOpen ? "flex flex-row justify-start p-1" : "flex flex-row justify-center py-1"}`}
                    >
                        <Layers className="w-[1.5dvw] mx-[0.25dvw] flex-shrink-0 min-w-[20px]" />
                        {isSidebarOpen && <span className="text-sm">Projects</span>}
                    </a>
                </li>
                <Divider />
            </ul>
        </nav>
    );
}

export default Sidebar;
