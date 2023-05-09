import React from 'react';
import dashboardApp from '../assets/projects/dashboardApp.png';
import musicAppClone from '../assets/projects/musicAppClone.png';
import realEstateApp from '../assets/projects/realEstateApp.png';


function Work() {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0e0e0e]">
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

          {/*Grid Items - Col 1 */}
          <div style={{ backgroundImage: `url(${dashboardApp})`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}
          className='shadow-md shadow-[#6BD425] hover:shadow-md hover:shadow-[#6BD425] group container rounded-md mx-auto content-div flex items-center justify-center hover:scale-105 transition-all duration-700'>
            {/* Hover Effects */}
            <div className='bg-gray-300 bg-opacity-30 group-hover:bg-black group-hover:bg-opacity-70 rounded-md w-full h-full text-center  transition-all duration-700 group-hover:transition-all group-hover:duration-700 mx-auto px-4 py-24 group-hover:py-20'>
              <span className='text-3xl font-bold tracking-wider drop-shadow-lg text-[#0e0e0e] group-hover:text-white'>Dashboard App</span>
              <div className='hidden group-hover:block pt-2 text-center hover:text-white'> 

                <a href="https://syncfusion-dashboardapp.netlify.app/" target="_blank"><button className='text-center rounded-md shadow-sm shadow-[#6BD425] hover:shadow-[#6BD425] hover:shadow-md hover:transition-all  transition-all duration-700 hover:duration-700 hover:scale-105 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Demo</button></a>
                <a href="https://github.com/japrweb/dashboard-app" target="_blank"><button className='text-center rounded-md shadow-sm shadow-[#6BD425] hover:shadow-[#6BD425] hover:shadow-md hover:transition-all  transition-all duration-700 hover:duration-700 hover:scale-105 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>

          <div style={{ backgroundImage: `url(${musicAppClone})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          className='shadow-md shadow-[#6BD425] hover:shadow-md hover:shadow-[#6BD425] group container rounded-md mx-auto content-div flex items-center justify-center hover:scale-105 transition-all duration-700'>
            {/* Hover Effects */}
            <div className='bg-gray-300 bg-opacity-30 group-hover:bg-black group-hover:bg-opacity-70 rounded-md w-full h-full text-center  transition-all duration-700 group-hover:transition-all group-hover:duration-700 mx-auto px-4 py-24 group-hover:py-20 '>
              <span className='text-3xl font-bold tracking-wider drop-shadow-lg text-[#0e0e0e] group-hover:text-white'>Music App Clone</span>
              <div className='hidden group-hover:block pt-2 text-center hover:text-white'>

                <a href="https://musicapp-clone.netlify.app/" target="_blank"><button className='text-center rounded-md shadow-sm shadow-[#6BD425] hover:shadow-[#6BD425] hover:shadow-md hover:transition-all  transition-all duration-700 hover:duration-700 hover:scale-105 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Demo</button></a>
                <a href="https://github.com/japrweb/music-app-clone" target="_blank"><button className='text-center rounded-md shadow-sm shadow-[#6BD425] hover:shadow-[#6BD425] hover:shadow-md hover:transition-all transition-all duration-700 hover:duration-700 hover:scale-105 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>

          {/* Grid Items - Col 2 */}
          <div style={{ backgroundImage: `url(${realEstateApp})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          className='shadow-md shadow-[#6BD425] hover:shadow-md hover:shadow-[#6BD425] group container rounded-md mx-auto content-div flex items-center justify-center hover:scale-105 transition-all duration-700'>
            {/* Hover Effects */}
            <div className='bg-gray-300 bg-opacity-30 group-hover:bg-black group-hover:bg-opacity-70 rounded-md w-full h-full text-center transition-all duration-700 group-hover:transition-all group-hover:duration-700 mx-auto px-4 py-24 group-hover:py-20 '>
              <span className='text-3xl font-bold tracking-wider drop-shadow-lg text-[#0e0e0e] group-hover:text-white'>Real Estate App</span>
              <div className='hidden group-hover:block pt-2 text-center hover:text-white'>

                <a href="https://real-estate-app-japrweb.vercel.app/" target="_blank"><button className='text-center rounded-md shadow-sm shadow-[#6BD425] hover:shadow-[#6BD425] hover:shadow-md hover:transition-all hover:duration-700 transition-all duration-700 hover:scale-105 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Demo</button></a>
                <a href="https://github.com/japrweb/rea" target="_blank"><button className='text-center rounded-md shadow-sm shadow-[#6BD425] hover:shadow-[#6BD425] hover:shadow-md hover:transition-all hover:duration-700 transition-all duration-700 hover:scale-105 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', backgroundSize: 'cover', backgroundPosition: 'center' }}
          className='shadow-md shadow-[#6BD425] hover:shadow-sm hover:shadow-[#6BD425] group container rounded-md mx-auto content-div flex items-center justify-center'>
            {/* Hover Effects */}
            <div className='bg-gray-300 bg-opacity-50 group-hover:bg-black group-hover:bg-opacity-70 rounded-md w-full h-full text-center group-hover:transition-all group-hover:duration-700 mx-auto px-4 py-24 group-hover:py-20 '>
              <span className='text-3xl font-bold tracking-wider drop-shadow-lg text-[#0e0e0e] group-hover:text-white'>Website 1</span>
              <div className='hidden group-hover:block pt-2 text-center hover:text-white'>

                <a href="#" target="_blank"><button className='text-center rounded-md hover:shadow-white hover:shadow-md hover:transition-all hover:duration-700 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Visit Website</button></a>
              </div>
            </div>
          </div>

          {/* Grid Items - Col 3 */}
          <div style={{ backgroundColor: 'white', backgroundSize: 'cover', backgroundPosition: 'center' }}
          className='shadow-md shadow-[#6BD425] hover:shadow-sm hover:shadow-[#6BD425] group container rounded-md mx-auto content-div flex items-center justify-center'>
            {/* Hover Effects */}
            <div className='bg-gray-300 bg-opacity-10 group-hover:bg-black group-hover:bg-opacity-70 rounded-md w-full h-full text-center group-hover:transition-all group-hover:duration-700 mx-auto px-4 py-24 group-hover:py-20 '>
              <span className='text-3xl font-bold tracking-wider drop-shadow-lg text-[#0e0e0e] group-hover:text-white'>Portfolio</span>
              <div className='hidden group-hover:block pt-2 text-center hover:text-white'>

                <a href="#" target="_blank"><button className='text-center rounded-md hover:shadow-white hover:shadow-md hover:transition-all hover:duration-700 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg'>Demo</button></a>
                <a href="https://github.com/japrweb/portfolio" target="_blank"><button className='text-center rounded-md hover:shadow-black hover:shadow-lg hover:transition-all hover:duration-700 px-4 py-2 mx-2 mt-0 bg-white text-[#0e0e0e] font-bold text-lg'>Code</button></a>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'white', backgroundSize: 'cover', backgroundPosition: 'center' }}
          className='shadow-md shadow-[#6BD425] hover:shadow-sm hover:shadow-[#6BD425] group container rounded-md mx-auto content-div flex items-center justify-center'>
            {/* Hover Effects */}
            <div className='bg-gray-300 bg-opacity-50 group-hover:bg-black group-hover:bg-opacity-70 rounded-md w-full h-full text-center group-hover:transition-all group-hover:duration-700 mx-auto px-4 py-24 group-hover:py-20 '>
              <span className='text-3xl font-bold tracking-wider drop-shadow-lg text-[#0e0e0e] group-hover:text-white'>Website 3</span>
              <div className='hidden group-hover:block pt-2 text-center hover:text-white'>

                <a href="#" target="_blank"><button className='text-center rounded-md hover:shadow-white hover:shadow-md hover:transition-all hover:duration-700 px-4 py-2 mx-2 mt-0 bg-[#0e0e0e] text-white font-bold text-lg transition-all duration-700'>Visit website</button></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work