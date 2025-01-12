import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { SiReact, SiVite, SiTailwindcss, SiCss3, SiHtml5, SiWordpress, SiCreatereactapp, SiNextdotjs, SiChakraui, SiWoocommerce } from 'react-icons/si';
import { HiTemplate } from "react-icons/hi";

import { Link } from "react-scroll";

import dashboardApp from '../assets/projects/dashboardApp-webp.webp';
import musicAppClone from '../assets/projects/musicAppClone-webp.webp';
import realEstateApp from '../assets/projects/realEstateApp-webp.webp';
import legalAdvice from '../assets/projects/markaribeip-webp.webp';
import petStore from '../assets/projects/petStore-webp.webp';
import foodWeb from '../assets/projects/foodWeb-webp.webp';
import saludWeb from '../assets/projects/saludWeb-webp.webp';
import portfolio from '../assets/projects/japrweb-webp.webp';
import expenseTracker from '../assets/projects/expenseTracker-webp.webp';

function Work() {
  return (
    <div className="w-full md:h-full text-gray-300 bg-[#1a1a1a] md:mt-[12%]">
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4 text-center'>
        </div>

        <div name="inspiracion"  className="h-[80px]"></div>        
        <p className='text-4xl font-black inline text-center text-gray-300 mb-[1em]'>INSPÍRATE</p>
        <p className='mb-[2em]'>
          La idea es poder lograr un sitio web funcional, donde podemos tomar distintas elementos de otros diseños para lograr tu propia visión. Utiliza esta area para inspirarte.
        </p>
        
        {/* Container 1 */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>

          {/* Pets Store */}
          <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${petStore})`, backgroundSize: 'cover', backgroundPosition: 'top' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Tienda de Mascotas</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>Esta web para tiendas de mascotas permite a los clientes explorar y adquirir productos en línea de manera sencilla, mejorando la experiencia de compra.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiWordpress />Wordpress</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
                <span className='text-[#2ebb33] font-semibold flex items-center gap-0.5'><HiTemplate />Referencia</span>
              </div>
            </div>
            <a href="https://pets.japrweb.com/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] shadow-sm rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>
          
          {/* Food Web */}
          <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${foodWeb})`, backgroundSize: 'cover', backgroundPosition: '0% 2%' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Restaurante Online</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'> Web para restaurantes ofrece un diseño elegante y funcional, permitiendo a los clientes explorar el menú, realizar reservas y pedidos en línea de manera sencilla.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiWordpress />Wordpress</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
                <span className='text-[#2ebb33] font-semibold flex items-center gap-0.5'><HiTemplate />Referencia</span>
              </div>
            </div>
            <a href="https://food.japrweb.com/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] shadow-sm rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>

          {/* Salud Web */}
          <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${saludWeb})`, backgroundSize: 'cover', backgroundPosition: '0% 2%' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'> Salud Integral</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'> Sitio web dedicado a promover el bienestar físico y mental, ofreciendo recursos y servicios para mejorar la calidad de vida de sus usuarios.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiWordpress />Wordpress</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
                <span className='text-[#2ebb33] font-semibold flex items-center gap-0.5'><HiTemplate />Referencia</span>
              </div>
            </div>
            <a href="https://food.japrweb.com/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] shadow-sm rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>

        </div>

        {/* Container 2 */}
          <div name="work"   className="h-[80px]"></div> 
          <p className='text-4xl font-black inline text-center text-gray-300 mb-[0.5em]'>PORTAFOLIO</p>
          <p className='mb-[2em]'>
            Aquí encontrarás proyectos que he realizado y ejemplos de diseños que puedo replicar en base a tus necesidades.
          </p>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>

            {/* Professional Portfolio */}
            <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
              <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
                <div style={{ backgroundImage: `url(${portfolio})`, backgroundSize: 'cover', backgroundPosition: '0% 0%' }} className='w-[103%] h-[200px] absolute'/>
                <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
                <a href="https://github.com/japrweb/rea" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
              </div>
              
              <div>
                <p className='text-2xl text-white font-bold'>Portafolio</p>
                <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>A website showcasing a professional portfolio of my recent works in application and web development, using various technologies.</p>
                <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                  <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                  <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                  <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
                </div>
              </div>
              <Link to="home" smooth={true} duration={500} delay={300}><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[95%] '>Ver Proyecto</button></Link>
            </div>

          {/* Dashboard App */}
          <div className='bg-[#2C2C2C] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl transition-all duration-1000'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${dashboardApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#1a1a1a] opacity-10'></div>
              <a href="https://github.com/japrweb/dashboard-app" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Dashboard App</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 lg:line-clamp-5'>React Admin Dashboard Application includes an Admin Panel with Dashboard, Three Pages, Four Apps, and Seven functional charts.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#09d3ac] font-semibold flex items-center gap-0.5'><SiCreatereactapp />CRA</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://syncfusion-dashboardapp.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-1000 hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>

          {/* Music App Clone */}
          <div className='bg-[#2C2C2C] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl transition-all duration-1000'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${musicAppClone})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#1a1a1a] opacity-10'></div>
              <a href="https://github.com/japrweb/music-app-clone" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Music App Clone</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>A Spotify inspired application with a homepage, a music player, search functionality, song exploration features, local music search, global top charts.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>            

            <a href="https://musicapp-clone.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>

          {/* Real Estate App */}
          <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${realEstateApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
              <a href="https://github.com/japrweb/rea" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Real Estate App</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>Real Estate App featuring rental homes, for-sale properties, advanced filtering, and detailed property pages with image carousel.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiNextdotjs />Next</span>
                <span className='text-[#53c9c6] font-semibold flex items-center gap-0.5'><SiChakraui />ChakraUI</span>
              </div>
            </div>
            <a href="https://real-estate-app-japrweb.vercel.app/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:shadow-md hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>

          {/* Expense Tracker */}
          <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${expenseTracker})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} className='w-full h-[200px] absolute bg-zinc-950 rounded-2xl'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#fff] opacity-10'></div>
              <a href="https://github.com/japrweb/expense-tracker" target="_blank"><button type='button' className='bg-[#1a1a1a] hover:bg-[#0e0e0e] rounded-full m-2 p-1.5 text-white text-3xl shadow-md hover:shadow-md hover:shadow-[#0e0e0e] shadow-[#0e0e0e] transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-110 absolute'><AiFillGithub /></button></a>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Expense Tracker</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>Expense tracking application featuring a user-friendly interface and intuitive tools for effortless management of income and expenses.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#5ed3f3] font-semibold flex items-center gap-0.5'><SiReact />React</span> 
                <span className='text-[#ffde3a] font-semibold flex items-center gap-0.5'><SiVite /> Vite</span>
                <span className='text-[#38bdf8] font-semibold flex items-center gap-0.5'><SiTailwindcss />Tailwind</span>
              </div>
            </div>
            <a href="https://webapp-expensetracker.netlify.app/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-[95%] '>Ver Proyectos</button></a>
          </div>

          {/* Markaribeip */}
          <div className='bg-[#2c2c2c] justify-center items-center py-6 px-5 md:py-4 md:px-4 block mb-4 rounded-xl'>
            <div className='w-full h-[200px] mb-4 rounded-2xl relative overflow-hidden'>
              <div style={{ backgroundImage: `url(${legalAdvice})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }} className='w-full h-[200px] absolute'/>
              <div className='w-full h-[200px] absolute top-0 left-0 bg-[#0e0e0e] opacity-10'></div>
            </div>
            
            <div>
              <p className='text-2xl text-white font-bold'>Legal Advice</p>
              <p className='text-sm text-gray-400 mb-1 mt-2 md:line-clamp-5'>The site offers essential legal guidance and support for brand consultation, copyright protection, and related services in the creative industry.</p>
              <div className='flex items-center justify-start text-sm gap-2 mt-2 pr-2'>
                <span className='text-[#fff] font-semibold flex items-center gap-0.5'><SiWordpress />Wordpress</span>
                <span className='text-[#dd4b25] font-semibold flex items-center gap-0.5'><SiHtml5 />Html</span>
                <span className='text-[#42a5f5] font-semibold flex items-center gap-0.5'><SiCss3 />Css</span>
              </div>
            </div>
            <a href="https://www.markaribeip.com/" target="_blank"><button type='button' className='w-full bg-[#1A7F64] hover:bg-[#1a1a1a] shadow-sm rounded-md font-semibold p-2 mt-5 mb-2 transition-all duration-700 hover:transition-all hover:duration-700 hover:scale-[95%]'>Ver Proyecto</button></a>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Work