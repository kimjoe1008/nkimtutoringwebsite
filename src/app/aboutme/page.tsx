import Background from "../background";
import ContactMeButton from "../contactmebutton";
import NavBar from "../navbar";


export default function AboutMe() {
    return (
        <main className="relative h-screen overflow-hidden">
            <Background />
            <div className="flex flex-col h-screen">
                <NavBar/>
                <div className="flex items-center justify-center grow">
                    <div className="flex w-1/2">
                        <img src="/NoahFormal.jpg" alt="Formal image of Noah" className="w-1/2 rounded-xl mr-2"/>
                        <div className="w-1/2 ml-2">
                            <div className="text-6xl font-medium">Noah Kim</div>
                            <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, voluptatibus nisi velit optio similique ducimus maiores, voluptatem quae quis, quasi aliquid nihil odio enim a aut incidunt omnis perspiciatis asperiores?</p>
                        </div>
                    </div>
                </div>
                <ContactMeButton/>
            </div>
        </main>
    );
}