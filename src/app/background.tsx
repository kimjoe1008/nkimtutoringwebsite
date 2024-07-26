import Image from "next/image"

export default function Background(){
    return(
        <Image
            src="/SkyLine.jpg"
            alt="Skyline background image"
            className="absolute inset-0 -z-10 h-full w-full"
            height={3000}
            width={3000}
        />
    )
}