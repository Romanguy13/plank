import Image from "next/image";
import { CgInstagram } from "react-icons/cg";

export default function Home() {
  return (
    <main className="bg-[#19A7FF] min-h-screen">
      <div className="flex bg-[#FFF7D4] min-h-screen justify-center items-center flex-col max-w-2xl mx-auto">
        <h1 className="text-2xl text-center text-gray-900">
          Plank
          <br />
        </h1>
        <span className="text-blue-500 mb-4 ">music music</span>
        <Image
          src="/landing.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <audio controls className="mt-4 mb-4 w-full max-w-[500px]">
          <source src="/insider-information.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <a
          className="flex bg-[#FFF7D4] justify-center items-center flex-row mt-4"
          href="https://www.instagram.com/plank_band.sc/"
        >
          <CgInstagram size={24} className="mr-2 text-gray-900" />
          <h1 className="text-2xl text-center text-gray-900">
            Plank instagram
            <br />
          </h1>
        </a>
      </div>
    </main>
  );
}
