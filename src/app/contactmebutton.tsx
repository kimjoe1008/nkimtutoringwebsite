import Link from "next/link";

export default function ContactMeButton(){
    return(
        <div className="flex justify-center">
            <Link className="bg-schedule rounded-xl px-3 py-1 my-3 text-xl text-white flex items-center hover:bg-darkhover transition duration-400 ease-in-out" href="/contactme">Contact Me</Link>
        </div>
    );
}