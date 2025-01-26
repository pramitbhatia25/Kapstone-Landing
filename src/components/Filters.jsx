import { Button } from "@nextui-org/button";
import { MoveLeft, MoveRight } from "lucide-react";
import { useRef } from "react";

function Filters({ selectedFilters, setSelectedFilters, allFilters }) {
    const containerRef = useRef(null);

    const scrollRight = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            if (scrollLeft + clientWidth < scrollWidth) {
                containerRef.current.scrollTo({
                    left: scrollLeft + 150,
                    behavior: "smooth",
                });
            }
        }
    };

    const scrollLeft = () => {
        if (containerRef.current) {
            const { scrollLeft } = containerRef.current;
            if (scrollLeft > 0) {
                containerRef.current.scrollTo({
                    left: scrollLeft - 150,
                    behavior: "smooth",
                });
            }
        }
    };

    const handleFilterClick = (category) => {
        if (selectedFilters === category) {
            setSelectedFilters("");
        } else {
            setSelectedFilters(category);
        }
    };

    return (
        <div className="relative flex flex-row px-4 justify-between">
            <div className="flex items-center justify-center w-[fit] flex-shrink-1">
                <Button size={"sm"} onClick={scrollLeft}>
                    <MoveLeft />
                </Button>
            </div>

            <div className="relative h-full mx-[5px] w-[60%] md:w-[80%]">
                <div
                    ref={containerRef}
                    className="h-full w-full flex items-center justify-start flex-row overflow-x-auto"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {allFilters.map((category, index) => (
                        <div key={index}>
                            <Button
                                size={"sm"}
                                className={`mx-[5px] flex-shrink-1 ${selectedFilters === category ? "bg-white text-black" : ""
                                    }`}
                                onClick={() => handleFilterClick(category)}
                            >
                                {category}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
            </div>

            <div className="flex items-center justify-center w-[fit] flex-shrink-1">
                <Button size={"sm"} onClick={scrollRight} className="ml-2">
                    <MoveRight />
                </Button>
            </div>
        </div>
    );
}

export default Filters;
