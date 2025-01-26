import { Button, Input } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { Layers, User } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function CustomNavbar({ isSidebarOpen, setIsSidebarOpen }) {
  const navigate = useNavigate();

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

  return (
    <div className="h-[10dvh] w-[100dvw] max-h-[60px] bg-[#0f0f0f] flex flex-row justify-between">

      <div className="w-fit flex flex-row">
        <div onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} className="m-[1dvw] cursor-pointer h-fit flex justify-center items-center bg-[#0f0f0f] hover:bg-white hover:bg-opacity-10 rounded-full px-[0.5dvw] py-2 my-auto transition-colors duration-200 ease-in-out">
          <RxHamburgerMenu className="w-[2dvw] min-w-[20px]" color={"white"} />
        </div>
        <div className="flex h-full flex-row items-center justify-center pl-2">
          <Layers color="#02ff01" />
          <div className="text-xl text-white cursor-pointer pl-1 tracking-tighter" >Kapstone</div>
        </div>
      </div>

      <div className="w-[50%] h-[10dvh] items-center max-h-[60px] overflow-hidden hidden md:flex">
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

      <div className="h-full w-fit flex items-center justify-center">
        <div> 
          <Button size={"sm"} className="mx-[1dvw]" onClick={() => { navigate("/dashbaord") }}> 
            <User color="white" className="w-[1.5dvw] min-w-[20px]" />
              Sign In
          </Button>  
        </div>
      </div>
    </div>
  );
}