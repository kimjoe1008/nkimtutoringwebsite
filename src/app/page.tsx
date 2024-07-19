import Background from "./background";
import ContactMeButton from "./contactmebutton";
import NavBar from "./navbar";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaLock } from "react-icons/fa";


export default function Home() {
  return(
    <main className="relative min-h-screen overflow-hidden">
      <Background/>
      <div className="flex flex-col min-h-screen">
        <NavBar/>

        <div className="flex-grow flex justify-center items-center">
          <div className="text-5xl">Basic quote about learning</div>
        </div>

        <div className="text-4xl flex justify-center mb-2">
          <MdKeyboardDoubleArrowDown/>
        </div>
      </div>

      <div className="flex flex-col min-h-screen justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-semibold">MY VALUES</div>
          <div className=" grid grid-cols-2 gap-4 p-4 w-3/4">
            <div className="flex p-8 items-center">
                <div className="text-5xl text-schedule"><FaLock/></div>

                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Growth</p>
                  <p className="">Tutoring is different from teaching: I am here to grow with my students, not to lecture them. We will learn how to navigate the educational system to meet your goals together</p>
                </div>
              </div>

              <div className="flex p-8 items-center">
                <div className="text-5xl text-schedule"><FaLock/></div>
                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Adaptability</p>
                  <p className="">As both an experienced tutor and a current student, I am here to meet the unique needs of each individual. I understand that goals change, and am here to make them a reality</p>
                </div>
              </div>

              <div className="flex p-8 items-center">
                <div className="text-5xl text-schedule"><FaLock/></div>
                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Confidentiality</p>
                  <p className="">Trust that your work with me is 100% confidential</p>
                </div>
              </div>

              <div className="flex p-8 items-center">
                <div className="text-5xl text-schedule"><FaLock/></div>
                <div className="flex-col w-full text-center">
                  <p className="text-2xl font-medium">Transparency</p>
                  <p className="">I’d be happy to speak with you about my professional experience, tutoring experience, or any other questions. I’ll tell you how I can help, and what my shortcomings may be</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      <ContactMeButton/>
    </main>
  );
}
