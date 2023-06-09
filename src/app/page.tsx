import Image from "next/image";
import { CgInstagram } from "react-icons/cg";

export default function Home() {
  return (
    <main className="bg-[#FFF7D4] min-h-screen">
      <header className="flex bg-[#FFF7D4] flex-row mx-auto p-4 border-b-2 border-gray-900">
        <h1 className="text-xl text-gray-900 mr-2 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Plank
          <br />
        </h1>
      </header>
      <div className="flex bg-[#FFF7D4] justify-center flex-col mx-auto lg:flex-row gap-4 md:p-4">
        <Image
          src="/landing.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full lg:w-1/2"
        />
        <div className="flex flex-col lg:w-1/2 p-4 md:p-0 justify-center items-center">
          <p className="text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Insider Information
          </p>
          <audio controls className="mt-4 md:w-2/3" preload="metadata">
            <source src="/insider-information.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </main>
  );
}
