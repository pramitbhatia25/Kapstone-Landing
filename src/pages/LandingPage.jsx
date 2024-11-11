import { Link } from "react-router-dom";
import CustomNavbar from "../components/Navbar";
import "./index.css";
import Cookies from 'js-cookie';
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, CircularProgress, Divider, Image, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Skeleton, Spacer, useDisclosure } from '@nextui-org/react';
import { useEffect, useState } from "react";
import projects from "./projects";
import { MailIcon } from "../components/MailIcon";

function LandingPage() {

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: "center",
            padding: '1rem',
            width: '80vw',
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
            width: '100%',
        },
    };

    const [isLoaded, setIsLoaded] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
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

    function register() {
        setRegisterLoading(true)
        console.log(value);

        // Delay the registration process by 5 seconds
        setTimeout(() => {
            // Simulate registration and set cookie
            Cookies.set('registered', 'true', { expires: 7 });
            setRegisterLoading(false)
            setIsRegistered(true);
        }, 5000);
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
                        Kapstone Is Launching Spring 2025
                    </div>
                </div>

                <Spacer y={1.5} />

                {/* Main Heading */}
                <div style={styles.headingText}>
                    The <span className="text-green-400">#1</span> Computer Science Project Marketplace
                </div>

                {/* Subheading */}
                <div style={styles.subheadingText}>
                    Access curated CS projects for 20+ different fields, including Machine Learning, Data Science, Web Development, Cybersecurity, Blockchain & many more.
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
                {(isRegistered ? projects.slice(0, 6) : projects.slice(0, 6)).map((project, index) => (
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

            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
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
                                {isRegistered && (
                                    <p> You have been registered successfully!</p>
                                )}
                                {registerLoading && <>
                                    <CircularProgress className="mx-auto" size="sm" color="success" aria-label="Loading..." />
                                </>}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                {!isRegistered && (
                                    <Button color="success" auto css={styles.mainButton} onClick={register}>
                                        Register
                                    </Button>
                                )}
                            </ModalFooter>
                        </>)}
                </ModalContent>

            </Modal>

            <div style={styles.container}>
                <div style={styles.subheadingText}>
                    Create a free account and get early access to the <b> Kapstone Project Management Platform </b> & <b>200+ CS Projects & Solutions </b>...
                </div>
                <Spacer y={2} />
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
