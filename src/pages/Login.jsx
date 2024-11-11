import { Button, Card, CardFooter, Image, Spacer } from "@nextui-org/react";
import CustomNavbar from "../components/Navbar";
import "./index.css"; // You can still keep this for any custom styles

function Login() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="login">
            <CustomNavbar />
            <div className="flex flex-col items-center justify-center p-4 w-4/5 mx-auto min-h-[60vh]">
                <Spacer y={1.5} />
                <div className="text-4xl font-bold mb-2 text-center w-full">
                    Login
                </div>
                <div className="text-xl text-center w-full mb-5">
                    Select the platform you want to login to:
                </div>
                <Spacer y={5} />
                <div className="flex flex-wrap gap-10 justify-center w-full">
                    {/* Kapstone For University Card */}
                    <Card isFooterBlurred radius="lg" className="border-none max-w-[300px]">
                        <Image
                            alt="Kapstone for University"
                            className="object-cover"
                            height={300}
                            src="https://nextui.org/images/hero-card.jpeg"
                            width={300}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-lg text-white/100">Kapstone For University</p>
                            <Button onClick={() => {openInNewTab("https://kapstone-for-university.vercel.app/login")}} className="text-tiny text-white bg-black/50" variant="flat" color="default" radius="lg" size="sm">
                                Login
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Kapstone For Corporate Card */}
                    <Card isFooterBlurred radius="lg" className="border-none max-w-[300px]">
                        <Image
                            alt="Kapstone for Corporate"
                            className="object-cover"
                            height={300}
                            src="https://nextui.org/images/hero-card.jpeg"
                            width={300}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-lg text-white/100">Kapstone For Corporate</p>
                            <Button onClick={() => {openInNewTab("https://kapstoneproject.vercel.app/login")}} className="text-tiny text-white bg-black/50" variant="flat" color="default" radius="lg" size="sm">
                                Login
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                <Spacer y={2} />
            </div>
        </div>
    );
}

export default Login;
