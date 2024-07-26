import Image from "next/image"

export default function Background(){
    return(
        <Image
            src="/SkyLine.jpg"
            alt="Skyline background image"
            className="fixed inset-0 -z-10 w-full object-cover top:0"
            height={3000}
            width={3000}
        />
    )
}