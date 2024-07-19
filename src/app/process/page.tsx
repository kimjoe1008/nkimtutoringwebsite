import Background from "../background";
import NavBar from "../navbar";
import ProcessContent from "./accordionfix";

export default function Process() {
    return (
        <main className="relative h-screen overflow-hidden">
            <Background />
            <div className="flex flex-col h-screen">
                <NavBar />
                <div className="flex justify-center grow">
                    <div className="flex w-3/4">
                        <ProcessContent/>
                    </div>
                </div>
            </div>
        </main>
    );
}