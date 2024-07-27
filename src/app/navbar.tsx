import Link from "next/link";

export default function NavBar(){
    return(
        <main className="flex h-24 bg-navbar justify-between items-center relative top-0 w-full">
            {/*directory bar*/}
            <div className="flex h-full justify-center align-items:stretch">
                <Link className="flex hover:text-slate-200 transition duration-400 ease-in-out text-xl px-8 max-w-full items-center align-content:center justify-center" href="/">Home</Link>
                <Link className="flex hover:text-slate-200 transition duration-400 ease-in-out text-xl px-8 max-w-full items-center align-content:center justify-center" href="/aboutme">About me</Link>
                <Link className="flex hover:text-slate-200 transition duration-400 ease-in-out text-xl px-8 max-w-full items-center align-content:center justify-center" href="/contactme">Contact Me</Link>
            </div>
            <Link className="flex rounded-full py-2 px-5 mr-8 h-min bg-schedule max-w-full text-2xl font-bold items-center align-content-center text-center text-white justify-center shadow-solid-below hover:bg-darkhover transition duration-400 ease-in-out" href="https://calendly.com/noahktutoring/30min">SCHEDULE NOW</Link>
        </main>
    );
}