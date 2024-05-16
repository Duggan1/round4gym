import Header from './Header';
import logo4W  from './logo4W.webp';
import logo4  from './logo4.webp';
import FITschedule from './FITschedule.webp';
import MMAschedule from './MMAschedule.webp'
import outsideround4 from './outsideround4.jpeg'

function HomePage() {




    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    const projects = [
        { name: 'Coaches', href: '/coaches',  initials: '🥋',  members: 16, bgColor: 'bg-black' },
        { name: 'Personal Training', href: '/personalTraining', initials: '💪', members: 12, bgColor: 'bg-black' },
        { name: 'Classes', href: '/schedule', initials: '🏋🏾',  members: 16, bgColor: 'bg-black' },
        { name: 'Memberships', href: '/options', initials: '👊',  members: 8, bgColor: 'bg-black' },
        
      ]
    return (<>
        <Header/>
    <div>

    <div style={{backgroundColor:'#01b7f0'}} className="pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
            <img
  style={{ width: '100%', height: '100%', objectFit: 'fill' }}
  className="absolute inset-0 rounded-2xl bg-gray-800 shadow-2xl"
  src={logo4}
  alt=""
/>

            </div>
          </div>

          <iframe
                style={{maxWidth:'85%'}}
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4wjflm3q1Wc?si=tmAlz3JqnGSvRrP9"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                    </iframe>

          
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
              <svg
                viewBox="0 0 162 128"
                fill="none"
                aria-hidden="true"
                className="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
              >
                <path
                  id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                  d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                />
                <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
              </svg>
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>Our Classes are dedicated to making you stronger, leaner, and healthier.
                </p>
              </blockquote>



            




              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Round 4 Gym</div>
                <div className="mt-1 text-gray-400"><a href="https://www.google.com/maps/place/Round+4+Gym/@41.6902338,-87.8198884,17z/data=!3m1!4b1!4m6!3m5!1s0x880e393a11030c23:0x4500477e9a1bc880!8m2!3d41.6902338!4d-87.8198884!16s%2Fg%2F11lcz4vc02?entry=ttu" 
              target="_blank" >8086 W 111th St, Palos Hills, IL 60465</a></div>
              </figcaption>
            </figure>



            
          </div>
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            {/* <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={outsideround4}
                alt=""
              />
            </div> */}

<div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
  <a href="https://www.google.com/maps/place/Round+4+Gym/@41.6902338,-87.8198884,17z/data=!3m1!4b1!4m6!3m5!1s0x880e393a11030c23:0x4500477e9a1bc880!8m2!3d41.6902338!4d-87.8198884!16s%2Fg%2F11lcz4vc02?entry=ttu"
     target="_blank" 
     rel="noopener noreferrer" // Security measure for opening links in a new tab
     style={{ width: '100%', height: '100%', display: 'block' }} // Ensure the anchor fills the div
  >
    <img
      src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://firebasestorage.googleapis.com/v0/b/highlevel-backend.appspot.com/o/location%2FIkNscdZwtgXtHtKYCUZ5%2Fimages%2FHB4p93ihFXtIo4U0JLku%2FChIJIwwDETo5DogRgMgbmn5HAEU%2Fmap-yQZdqjht0J.jpg?alt=media"
      alt=""
      style={{ width: '100%', height: '100%', objectFit: 'fill', cursor: 'pointer' }}
      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
    />
  </a>
</div>





<div className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold tracking-tight text-white">
                Where strength meets skill!
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-white/60">
                 
                  <div>
      {/* <h2 className="text-sm font-medium text-gray-500">Pinned Projects</h2> */}
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4" >
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm" style={{border:'#01b7f0 solid 4px', minWidth:'fit-content'}} >
            <div style={{borderRight:'#01b7f0 solid 4px'}}
              className={classNames(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a href={project.href}  className="block overflow-hidden whitespace-nowrap text-ellipsis w-full font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </a>
                {/* <p className="text-gray-500">{project.members} Members</p> */}
              </div>
              {/* <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
                </p>
                {/* <div className="mt-16 flex justify-center">
                  <RadioGroup
                    value={frequency}
                    onChange={setFrequency}
                    className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
                  >
                    <RadioGroup.Label className="sr-only">Payment frequency</RadioGroup.Label>
                    {pricing.frequencies.map((option) => (
                      <RadioGroup.Option
                        key={option.value}
                        value={option.value}
                        className={({ checked }) =>
                          classNames(checked ? 'bg-indigo-500' : '', 'cursor-pointer rounded-full px-2.5 py-1')
                        }
                      >
                        <span>{option.label}</span>
                      </RadioGroup.Option>
                    ))}
                  </RadioGroup>
                </div> */}
              </div>



          </div>
        </div>
      </div>

      
    </div>
        {/* <iframe 
                    class=""
                    src="https://www.instagram.com/round4gym/embed/"
                    width="50%"
                    height="390px"
                    frameborder="0"
                    scrolling="no"
                    // allowtransparency="true"
                    

                ></iframe> */}
        {/* <h1>Hello Team Round 4</h1> */}
        
        
      <div style={{marginTop:'-50px'}}>
                <a href="https://www.instagram.com/round4gym/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
                        alt="Instagram Logo"
                        className="mx-auto h-12 w-12"
                    />
                </a>
            </div>
        <div className="bg-white shadow sm:rounded-lg">
      {/* <div className="px-4 py-5 sm:p-6">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">Get Started Today</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
              Schedule your complimentary training session with one of our professional trainers today! 
              </p>
            </div>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center">
            <button 
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            ><a href="tel:+17082794734" className="hover:underline">Call Us</a>
              
            </button>
          </div>
        </div>
      </div> */}

<section className="bg-blue-50 p-6 text-center">


            <h2 className="text-2xl font-bold text-gray-800">Follow Round 4 Gym on Instagram</h2>
            <p className="text-gray-600 mt-2">Stay up to date with the gym's latest training sessions, success stories, and exclusive behind-the-scenes content!</p>
            
           

            <a href="https://www.instagram.com/round4gym/" target="_blank" rel="noopener noreferrer"
                className="mt-5 inline-block bg-pink-600 text-white font-bold py-2 px-4 rounded hover:bg-pink-700 transition-colors">
                Follow Us
            </a>
        </section>

    </div>

                    
        
    </div>
   </> );
  }
  
  export default HomePage;
  