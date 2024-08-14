import Background from "./background";
import ContactMeButton from "./contactmebutton";
import NavBar from "./navbar";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { LuSprout } from "react-icons/lu";
import Image from "next/image";



export default function Home() {
  return(
    <main className="relative min-h-screen overflow-hidden">
      <Background/>
      <NavBar/>
      <div className="flex flex-col h-screen">
        
        <div className="flex-grow flex justify-center items-center mt-24">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl font-semibold mb-4">Subjects Taught</div>
            {/* Top row with 2 boxes */}
            <div className="flex space-x-4">
                <div className="flex justify-center items-center text-center bg-navbar aspect-square text-black p-8 max-w-64 max-h-64 rounded-lg text-3xl">Middle School<br></br>Math<br></br>& English</div>
                <div className="flex justify-center items-center text-center bg-navbar aspect-square text-black p-14 max-w-64 max-h-64 rounded-lg text-3xl">SAT Math & English</div>
            </div>
            {/* Bottom row with 3 boxes */}
            <div className="flex space-x-4">
                <div className="flex justify-center items-center text-center bg-navbar aspect-square text-black p-11 max-w-64 max-h-64 rounded-lg text-3xl">Calculus I<br></br>& Calculus II</div>
                <div className="flex justify-center items-center text-center bg-navbar aspect-square text-black p-8 max-w-64 max-h-64 rounded-lg text-3xl">High School English</div>
                <div className="flex justify-center items-center text-center bg-navbar aspect-square text-black p-8 max-w-64 max-h-64 rounded-lg text-3xl">Conversational English</div>
            </div>
          </div>
        </div>

        <div className="text-6xl flex justify-center mb-2">
          <MdKeyboardDoubleArrowDown className="text-schedule"/>
          
        </div>
      </div>

      <div className="flex flex-col min-h-screen justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-semibold">MY VALUES</div>
          <div className=" grid grid-cols-2 gap-4 p-4 w-3/4">
            <div className="flex p-6 m-2 items-center bg-navbar rounded-xl">
                <div className="text-5xl text-schedule"><LuSprout/></div>

                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Growth</p>
                  <p>Tutoring is different from teaching: I am here to grow with my students, not to lecture them. We will learn how to navigate the educational system to meet your goals <span className="underline">together</span>.</p>
                </div>
              </div>

              <div className="flex p-6 m-2 items-center bg-navbar rounded-xl">
                <div className="text-5xl text-schedule"><IoIosWater/></div>
                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Adaptability</p>
                  <p className="">As both an experienced tutor and a current student, I am here to meet the unique needs of each individual. I understand that goals change, and am here to make them a reality</p>
                </div>
              </div>

              <div className="flex p-6 m-2 items-center bg-navbar rounded-xl">
                <div className="text-5xl text-schedule"><FaLock/></div>
                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Confidentiality</p>
                  <p className="">Trust that your work with me is 100% confidential.</p>
                </div>
              </div>

              <div className="flex p-6 m-2 items-center bg-navbar rounded-xl">
                <div className="text-5xl text-schedule"><FaMagnifyingGlass/></div>
                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Transparency</p>
                  <p className=""> Let’s get to know each other! I’m happy to speak with you about my professional experience, tutoring experience, or anything else. I’ll tell you how I can help, and what my shortcomings may be.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <ContactMeButton/>
    </main>
  );
}
