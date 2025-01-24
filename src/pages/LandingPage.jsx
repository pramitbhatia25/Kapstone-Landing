import CustomNavbar from "../components/Navbar";
import "./index.css";
import Cookies from 'js-cookie';
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, CircularProgress, Divider, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, Spacer, useDisclosure } from '@nextui-org/react';
import { useEffect, useState } from "react";
import projects from "../data/projects";
import features from "../data/features"
import { MailIcon } from "../components/MailIcon";
import register from "../components/register";
import ConfettiExplosion from 'react-confetti-explosion';
import { User } from "@nextui-org/react";
import msfs from "../assets/msfspng.png"
import sx from "../assets/sx.webp"
import gt from "../assets/gt.png"

function LandingPage() {

    const styles = {

        container2: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            padding: '1rem',
            width: '100vw',
            margin: 'auto',
            minHeight: '60vh',
        },
        heading: {
            fontWeight: 'bold',
            lineHeight: '1',
        },
        subheading: {
            fontSize: '1rem',
            maxWidth: '600px',
            marginTop: '1rem',
        },
        buttonGroup: {
            display: 'flex',
            gap: '1rem',
            marginTop: '1.5rem',
        },
        mainButton: {
            padding: '0.75rem 2rem',
        },
        secondaryButton: {
            padding: '0.75rem 2rem',
        },
        heading2Text: {
            fontSize: '2rem',
            margin: '0.5rem 0',
            textAlign: 'center',
            width: '100%',
            fontWeight: 'bold',
        },
        subheading2Text: {
            fontSize: '1.125rem',
            textAlign: 'center',
            width: '100%',
        },
        subheading3Text: {
            fontSize: '1.5rem',
            textAlign: 'center',
            width: '80%',
        },
    };

    const [isLoaded, setIsLoaded] = useState(false);
    const [isExploding, setIsExploding] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [registrationMessage, setRegistrationMessage] = useState("");
    const [registerLoading, setRegisterLoading] = useState(false);
    const [value, setValue] = useState("");
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const toggleLoad = () => {
        setIsLoaded(!isLoaded);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            toggleLoad(true);
        }, 1000);

        const registrationStatus = Cookies.get('registered');
        setIsRegistered(registrationStatus === 'true');

        return () => clearTimeout(timer);
    }, []);

    async function registerUser() {
        setRegisterLoading(true)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setRegistrationMessage("Please enter a valid email address.");
            setRegisterLoading(false);
            return;
        }

        const regres = await register(value);

        if (regres === "Success") {
            setIsExploding(true)
            setRegistrationMessage("You have been registered successfully!")
            Cookies.set('registered', 'true', { expires: 7 });
            setRegisterLoading(false)
            setIsRegistered(true);
        }
        else {
            setRegistrationMessage("Error with registration, please try again!")
            setRegisterLoading(false)
        }

    }

    return (

        <div className="landingpage">

            <div className="fixed w-full top-0 z-[50]">
                <CustomNavbar />
            </div>

            <div className="flex flex-col items-center md:items-start md:ml-10 justify-center p-4 pt-[20dvh] w-screen mx-auto min-h-[60vh]">

                <div className="flex gap-2 border border-black p-1 bg-[#1a1a1a] cursor-pointer rounded-full items-center hover:scale-x-[1.05] transition-transform duration-200 ease-in-out">
                    <Chip
                        variant="shadow"
                        classNames={{
                            base: "bg-gradient-to-br from-green-500 to-lime-200 border-small border-white/50 shadow-lime-500/30 ",
                            content: "drop-shadow shadow-black text-black ",
                        }}
                    >
                        New
                    </Chip>
                    <div className="flex text-sm justify-start items-start text-start md:text-center md:justify-center md:items-center px-2">
                        Kapstone places 3rd at Startup Exchange Fall 2024 Summit!
                    </div>
                </div>

                <Spacer y={5} />

                <div className="text-5xl md:text-7xl my-2 text-center md:text-left w-[90%] font-bold">
                    Project Sourcing Made <span className="text-green-400">Easy</span>
                </div>

                <Spacer y={5} />

                <div className="text-md md:text-xl text-center md:text-left w-[80%]">
                    Browse 200+ CS projects in 20+ different fields, including Machine Learning, Data Science, Web Development, Cybersecurity, Blockchain & many more.
                </div>

                <Spacer y={5} />

                <div className="z-[3] flex flex-col sm:flex-row gap-4 max-w-[500px]">
                    <Input
                        type="email"
                        placeholder="you@example.com"
                        labelPlacement="outside"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    />
                    {registerLoading ? <>
                        <div className="flex gap-4 m-auto">
                            <Button color="success" auto className="mb-5 py-3 px-8" >
                                Loading...
                            </Button>
                        </div>
                    </> : <>
                        <div className="flex gap-4 m-auto">
                            <Button color="success" auto className="mb-5 py-3 px-8 custom_btn" onClick={registerUser}>
                                Join Waitlist
                            </Button>
                        </div>
                    </>}
                </div>
                <div className="z-[3]">
                    {registrationMessage}
                </div>
            </div>

            <Spacer y={5} />

            <div className="flex flex-row p-5 md:p-10 overflow-scroll md:justify-around">
                {projects.slice(0, 3).map((project, index) => (
                    <Card key={index} className=" cursor-default hover:scale-[1.02] transition-transform duration-200 ease-in-out mr-5 flex-shrink-0 w-[350px] md:min-w-[28dvw]">
                        <CardHeader className="flex gap-3 items-center">
                            <Image
                                alt="nextui logo"
                                height={40}
                                width={40}
                                radius="sm"
                                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                                className="flex-shrink-0"
                            />
                            <div className="flex flex-col">
                                <p className="text-md font-semibold overflow-hidden text-ellipsis line-clamp-2 min-h-[2rem]">
                                    {project.name}
                                </p>
                                <Chip color="success" variant="solid" className='my-1 text-[12px] p-0'>{project.category}</Chip>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            <p className="text-sm h-[fit]">
                                {project.description}
                            </p>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <User
                                name={project.project_owner}
                                description={project.project_owner_handle}
                                avatarProps={{
                                    src: project.project_owner_avatar
                                }}
                            />
                        </CardFooter>
                    </Card>
                ))}

            </div>
            
            <Spacer y={5} />

            <div className=" flex justify-end cursor-pointer ">
            <div className="active:scale-[1.3] hover:scale-[1.01] transition-transform duration-200 ease-in-out px-10">
            
                <Chip
                    variant="shadow"
                    classNames={{
                        base: "bg-gradient-to-br from-green-500 to-lime-200 border-small border-white/50 shadow-lime-500/30",
                        content: "drop-shadow shadow-black text-black",
                    }}
                >
                    {"....view more ->"}
                </Chip>
                </div>
                </div>
            
            <Spacer y={40} />

            <div className="h-fit">

                <div style={styles.heading2Text}>
                    Find project ideas, startup cofounders or teammates, all in one place
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4 mx-5">
                    {features.map((feature, index) => (
                        <Card key={index} className=" cursor-default h-[100px] hover:scale-[1.05] transition-transform duration-200 ease-in-out">
                            <CardHeader className="flex gap-3 items-center h-full">
                                <div className="">
                                    {feature.icon}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-lg font-semibold">{feature.title}</p>
                                </div>
                            </CardHeader>
                        </Card>
                    ))}

                </div>

            </div>

            <div className="h-[100dvh] flex justify-center items-center flex-col ">
                <div style={styles.heading2Text}>
                    Supported  By
                </div>

                <Spacer y={5} />

                <div className="max-w-7xl mx-auto p-5 flex flex-col">
                    <img
                        src={sx}
                        className="h-fit md:h-20 mx-[50px] my-[20px]"
                    />
                    <img
                        src={gt}
                        className="h-fit md:h-20 mx-[50px] my-[20px]"
                    />
                    <img
                        src={msfs}
                        className="h-fit md:h-20 mx-[50px] my-[20px]"
                    />
                </div>
            </div>


            <footer className="bg-black text-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* About Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-white">About Us</h2>
                            <p className="mt-2 text-sm">
                                Our mission is to empower students around the world to learn and grow through project-based programming, making hands-on learning accessible to everyone
                            </p>
                        </div>

                        {/* Links Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline hover:text-white transition"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline hover:text-white transition"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline hover:text-white transition"
                                    >
                                        Support Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:underline hover:text-white transition"
                                    >
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h2 className="text-lg font-semibold text-white">Contact Us</h2>
                            <p className="mt-2 text-sm">Email: pramitbhatia25@gmail.com</p>
                            <p className="text-sm">Phone: +1 470 430 3868</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Kapstone. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default LandingPage;
