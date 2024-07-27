import Background from "../background";
import NavBar from "../navbar";

export default function ContactMe(){
    return(
        <main className="relative h-screen overflow-hidden">
            <Background />
            <div className="flex flex-col h-screen">
                <NavBar/>
                <div className="flex justify-center grow mt-24">
                    <div className="flex flex-col w-3/4 items-center">
                        <div className="mt-10 font-medium text-6xl">Contact Me</div>
                        <div className="mt-10 font-medium">Noah Kim</div>
                        <div className="mt-2">noahktutoring@gmail.com</div>
                    </div>
                </div>
            </div>
        </main>
    )
}