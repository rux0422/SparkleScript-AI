import { Button } from "@/components/ui/button";
import Image from "next/image";
import Header from "./dashboard/_components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
            <div>
              {/* <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> */}
                <Image src={'/img1.jpeg'} alt="logo" width={250} height={250} />
              {/* </button> */}
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
              
            </div>
          </div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-pink-500 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              SparkleScript
              <span className="bg-clip-text bg-orange-500 text-transparent"> AI</span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              Where AI Sprinkles Magic into Every Word, Crafting Content That Dazzles and Delights!
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a className="inline-flex justify-center items-center 
            gap-x-3 text-center bg-gradient-to-tr from-pink-500 via-pink-700 to-orange-500  hover:from-orange-500 hover:to-pink-500 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-white py-3 px-4" 
             href="/dashboard">
              Get started
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>

          {/* Add the new image here */}
          <div className="mt-10 flex justify-center">
            <Image src="/img3.jpeg" alt="Additional Content" width={200} height={200} />
          </div>

        </div>
      </div>
    </div>
  );
}
