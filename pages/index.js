import Head from 'next/head'
import Image from 'next/image';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import avatar from "../public/fb-avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark':""}>
      <Head>
        <title>XSO25</title>
        <meta name="description" content="abdulrahman nader portfolio, created with: nextjs,reactjs,tailwindcss" />
        <link rel="icon" href="/faviconNew.ico" />
      </Head>

      <main className='bg-gradient px-10 md:px-20 lg:px-40 dark:bg-gradient-to-br dark:from-slate-800 dark:to-indigo-900'>
        {/* Section One Start */}
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between flex-nowrap'>
            <h1 className='text-2xl py-2 text-blue-900 md:text-3xl md:font-semibold font-burtons dark:text-blue-200'>ABDULRAHMAN</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='dark:text-blue-200 dark:hover:text-blue-400 cursor-pointer text-2xl duration-500 text-blue-900 hover:text-blue-700'/></li>
              <li><a className='bg-gradient-to-r from-blue-700 to-sky-500 bg-inherit text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-blue-200'>Abdulrahman Nader</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-purple-500'>.NET Full Stack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-300'>Freelancer providing services for programming and design content
              needs. Join me down below and let&#39;s get cracking!</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 dark:text-gray-400'>
            <AiFillLinkedin className='duration-500 hover:text-blue-700'/>
            <AiFillFacebook className='duration-500 hover:text-blue-700'/>
            <AiFillYoutube className='duration-500 hover:text-blue-700'/>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-blue-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
            <Image src={avatar} layout='fill' objectFit='cover' alt='..'/>
          </div>
        </section>
        {/* Section One End */}

        {/* Section Two Start */}
        <section>
          <div className='my-10 text-center'>
          <h3 className='text-4xl py-1 md:font-semibold dark:text-blue-600'>Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 text-left md:text-lg dark:text-gray-300'>
              Since the beginning of my journey as a freelance designer and
              developer, I&#39;ve done remote work for
              <span className='text-blue-400'> agencies </span>
              consulted for <span className='text-blue-400'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 md:text-lg dark:text-gray-300'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
          </p>
          </div>
          <div className="lg:flex gap-10">
            <div className='text-center p-10 shadow-lg rounded-2xl my-10 duration-500 hover:py-5 hover:bg-slate-100 dark:bg-blue-800 dark:text-white'>
              <Image className='mx-auto' src={design} width={100} height={100} alt='..' />
              <h3 className='text-l font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>Creating elegant designs suited for your needs following core design theory.</p>
              <h4 className="py-4 text-blue-600 dark:text-cyan-300">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-300">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 duration-500 hover:py-5 hover:bg-slate-100 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700">
                <Image className='mx-auto' src={code} width={100} height={100} alt='..' />
                <h3 className="text-lg font-medium pt-8 pb-2 ">
                  Code your dream project
                </h3>
                <p className="py-2">
                  Do you have an idea for your next great website? Let&#39;s make it a
                  reality.
                </p>
                <h4 className="py-4 text-blue-600 dark:text-cyan-300">Design Tools I Use</h4>
                <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 duration-500 hover:py-5 hover:bg-slate-100 dark:bg-blue-800 dark:text-white">
                <Image className='mx-auto' src={consulting} width={100} height={100} alt='..'/>
                <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                <p className="py-2">
                  Are you interested in feedback for your current project? I can
                  give you tips and tricks to level it up.
                </p>
                <h4 className="py-4 text-blue-600 dark:text-cyan-300">Design Tools I Use</h4>
                <p className="text-gray-800 py-1 dark:text-gray-300">Photoshop</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Illustrator</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Figma</p>
                <p className="text-gray-800 py-1 dark:text-gray-300">Indesign</p>
            </div>
          </div>
        </section>
        {/* Section Two End */}

        {/* Section Three Start */}
        <section>
        <div className='my-10 text-center'>
          <h3 className='text-4xl py-1 md:font-semibold dark:text-blue-600'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800 text-left md:text-lg dark:text-gray-300'>
              Since the beginning of my journey as a freelance designer and
              developer, I&#39;ve done remote work for
              <span className='text-blue-500'> agencies </span>
              consulted for <span className='text-blue-500'>startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 md:text-lg dark:text-gray-300'>
              I offer from a wide range of services, including brand design,
              programming and teaching.
          </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 animate-trans'>
              <Image src={web1} alt='..' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1 animate-trans'>
              <Image src={web2} alt='..' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1 animate-trans'>
              <Image src={web3} alt='..' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1 animate-trans'>
              <Image src={web4} alt='..' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1 animate-trans'>
              <Image src={web5} alt='..' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
            <div className='basis-1/3 flex-1 animate-trans'>
              <Image src={web6} alt='..' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" />
            </div>
          </div>
        </section>
        {/* Section Three End */}

        {/* Footer Start */}
        <footer class="p-4 mt-2 rounded-lg md:flex md:items-center md:justify-between md:p-6">
            <span class="text-sm text-slate-800 sm:text-center dark:text-blue-100">© 2022 <a href="#" class="hover:underline">Abdulrahman™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm text-slate-800 sm:mt-0 dark:text-blue-100">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>
        {/* Footer Start */}
      </main>
    </div>
  )
}