import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiReact, SiVite, SiTailwindcss, SiCss3, SiHtml5, SiWordpress, SiCreatereactapp, SiNextdotjs, SiChakraui, SiWoocommerce } from 'react-icons/si';

import { Link } from "react-scroll";

import dashboardApp from '../assets/projects/dashboardApp.png';
import musicAppClone from '../assets/projects/musicAppClone.png';
import realEstateApp from '../assets/projects/realEstateApp.png';
import legalAdvice from '../assets/projects/markaribeip.png';
import portfolio from '../assets/projects/japrweb.png';
import expenseTracker from '../assets/projects/expenseTracker.png';

function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0e0e0e] md:mt-[12%]">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 pt-16'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#6BD425]'>
            <i class="fa-solid fa-briefcase pr-2"/>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>

          {/* Dashboard App */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${dashboardApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/japrweb/dashboard-app" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Dashboard App</p>
              <p className='text-sm text-gray-400 mb-1 mt-2'>React Admin Dashboard Application includes an Admin Panel with Dashboard, Three Pages, Four Apps, and Seven functional charts.</p>
              <div className='flex flex-wrap items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#09d3ac] font-semibold flex items-center gap-0.5'><SiCreatereactapp />CRA</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://syncfusion-dashboardapp.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Music App Clone */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${musicAppClone})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
              <a href="https://github.com/japrweb/music-app-clone" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Music App Clone</p>
              <p className='text-sm text-gray-400 mb-1 mt-2'>A Spotify inspired application with a homepage, a music player, search functionality, song exploration features, local music search, global top charts.</p>
              <div className='flex flex-wrap items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://musicapp-clone.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Real Estate App */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${realEstateApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/japrweb/rea" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Real Estate App</p>
              <p className='text-sm text-gray-400 mb-1 mt-2'>Real Estate App featuring rental homes, for-sale properties, advanced filtering, and detailed property pages with image carousel.</p>
              <div className='flex flex-wrap items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiNextdotjs />Next</span>
                <span className='text-[#53c9c6] font-semibold flex items-center gap-0.5'><SiChakraui />Chakra UI</span>
              </div>
            </div>
            <a href="https://real-estate-app-japrweb.vercel.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Markaribeip */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${legalAdvice})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Legal Advice</p>
              <p className='text-sm text-gray-400 mb-1 mt-2'>The site offers essential legal guidance and support for brand consultation, copyright protection, and related services in the creative industry.</p>
              <div className='flex flex-wrap items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiWordpress />Wordpress</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
              </div>
            </div>
            <a href="https://www.markaribeip.com/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>

          {/* Professional Portfolio */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-[103%] h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
              <a href="https://github.com/japrweb/rea" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Portfolio</p>
              <p className='text-sm text-gray-400 mb-1 mt-2'>A website showcasing a professional portfolio of my recent works in application and web development, using various technologies.</p>
              <div className='flex flex-wrap items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <Link to="home" smooth={true} duration={500} delay={300}><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></Link>
          </div>

          {/* Expense Tracker */}
          <div className='bg-slate-700 hover:bg-[#1a1a1a] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl hover:shadow-md hover:shadow-[#6BD425] transition-all duration-1000 hover:transition-all hover:duration-1000 hover:scale-[101%]'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${expenseTracker})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
              <a href="https://github.com/japrweb/expense-tracker" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Expense Tracker</p>
              <p className='text-sm text-gray-400 mb-1 mt-2'>Expense tracking application featuring a user-friendly interface and intuitive tools for effortless management of income and expenses.</p>
              <div className='flex flex-wrap items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://webapp-expensetracker.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1a1a1a] hover:bg-[#0e0e0e] shadow-sm shadow-[#6BD425] rounded-md font-semibold p-2 mt-5 mb-2 hover:shadow-[#6BD425] transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[103%] '>Visit</button></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work