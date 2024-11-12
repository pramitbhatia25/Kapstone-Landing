import { Link } from "react-router-dom";
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

function LandingPage() {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            padding: '1rem',
            width: '100vw',
            margin: 'auto',
            minHeight: '60vh',
        },
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
        chipContainer: {
            display: 'flex',
            gap: '0.5rem',
            border: '1px solid black',
            padding: '0.25rem',
            backgroundColor: '#1a1a1a',
            borderRadius: '20px',
            alignItems: 'center',
        },
        headingText: {
            fontSize: '2.5rem',
            margin: '0.5rem 0',
            textAlign: 'center',
            width: '90%',
            fontWeight: 'bold',
        },
        subheadingText: {
            fontSize: '1.125rem',
            textAlign: 'center',
            width: '80%',
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

        if(regres === "Success") {
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

            <CustomNavbar />

            <div style={styles.container}>

                <div style={styles.chipContainer}>
                    <Chip
                        variant="shadow"
                        classNames={{
                            base: "bg-gradient-to-br from-green-500 to-lime-200 border-small border-white/50 shadow-lime-500/30",
                            content: "drop-shadow shadow-black text-black",
                        }}
                    >
                        New
                    </Chip>
                    <div className="flex justify-center items-center text-center px-2">
                        Launching Spring 2025
                    </div>
                </div>

                <Spacer y={1.5} />

                <div style={styles.headingText}>
                    The <span className="text-green-400">#1</span> Computer Science Project Marketplace
                </div>

                <div style={styles.subheadingText}>
                    Access 200+ CS projects in 20+ different fields, including Machine Learning, Data Science, Web Development, Cybersecurity, Blockchain & many more.
                </div>

                <Spacer y={2} />

                {isRegistered ? <>
                    <div style={styles.buttonGroup}>
                        <Button color="success" auto css={styles.mainButton}>
                            Thank you for registering!
                        </Button>
                    </div>
                </> : <>
                    <div style={styles.buttonGroup}>
                        <Button color="success" auto css={styles.mainButton} onPress={onOpen}>
                            Get Early Access
                        </Button>
                    </div>
                </>}

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {(isRegistered ? projects.slice(0, 3) : projects.slice(0, 3)).map((project, index) => (
                    <Skeleton classname="cursor-default" key={index} isLoaded={isLoaded} className="rounded-lg">
                        <Card className=" cursor-default hover:scale-[1.05] transition-transform duration-200 ease-in-out">
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
                                    <p className="text-sm font-semibold overflow-hidden text-ellipsis line-clamp-1">{project.name}</p>
                                    <Chip color="success" variant="solid" className='my-1 text-[12px] p-0'>{project.category}</Chip>
                                </div>
                            </CardHeader>
                            <Divider />
                            <CardBody>
                                <p className="text-xs text-ellipsis line-clamp-5">{project.description}</p>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <Link className='text-xs' href={project.projectLink}>
                                    Visit Project 🔗
                                </Link>
                            </CardFooter>
                        </Card>
                    </Skeleton>
                ))}

            </div>

            <div style={styles.container2}>

                <Spacer y={5} />

                <div style={styles.heading2Text}>
                    Find project ideas, startup cofounders or project teammates, all in one place
                </div>

                <div style={styles.subheading2Text}>
                    We simplify Computer Science Project Sourcing and Management, connecting people to work on ideas together.
                </div>

                <Spacer y={10} />
                <Chip
                    variant="shadow"
                    classNames={{
                        base: "bg-gradient-to-br from-green-500 to-lime-200 border-small border-white/50 shadow-lime-500/30",
                        content: "drop-shadow shadow-black text-black",
                    }}
                >
                    Features
                </Chip>

                <Spacer y={5} />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                    {features.map((feature, index) => (
                        <Skeleton classname="cursor-default" key={index} isLoaded={isLoaded} className="rounded-lg">
                            <Card className=" cursor-default hover:scale-[1.05] transition-transform duration-200 ease-in-out">
                                <CardHeader className="flex gap-3 items-center">
                                    <div style={{ height: "40px", width: "40px" }}>
                                        {feature.icon}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-lg font-semibold">{feature.title}</p>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <p className="text-md text-ellipsis line-clamp-5">{feature.description}</p>
                                </CardBody>
                            </Card>
                        </Skeleton>
                    ))}

                </div>


            </div>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                        {
                            isExploding && <ConfettiExplosion />
                        }
            
                            <ModalHeader>
                                <h3>Register for Early Access</h3>
                            </ModalHeader>
                            <ModalBody>
                                {!isRegistered && (
                                    <Input
                                        type="email"
                                        placeholder="you@example.com"
                                        labelPlacement="outside"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        startContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                                    />
                                )}
                                <p>{registrationMessage}</p>
                                {registerLoading && <>
                                    <CircularProgress className="mx-auto" size="sm" color="success" aria-label="Loading..." />
                                </>}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                {!isRegistered && (
                                    <Button color="success" auto css={styles.mainButton} onClick={registerUser}>
                                        Register
                                    </Button>
                                )}
                            </ModalFooter>
                        </>)}
                </ModalContent>

            </Modal>

            <div style={styles.container}>
                <div style={styles.subheading3Text}>
                    Create a free account and get early access to the <b> Kapstone Project Management Platform </b> & <b>200+ CS Projects & Solutions </b>
                </div>
                <Spacer y={5} />
                {!isRegistered && (
                    <Button color="success" auto css={styles.mainButton} onPress={onOpen}>
                        Register for early access!
                    </Button>
                )}
                {isRegistered && (
                    <Button color="success" auto css={styles.mainButton} >
                        Thank you for registering!
                    </Button>
                )}
            </div>
        </div>
    );
}

export default LandingPage;
