import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import Header from './Header'
import FITschedule from './FITschedule.webp';
import MMAschedule from './MMAschedule.webp'
import logo4W  from './logo4W.webp';
import logo4  from './logo4.webp';
import React, { useState } from 'react';



export default function Schedule() {


    const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-22', isCurrentMonth: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
]
const [currentImage, setCurrentImage] = useState(MMAschedule); // Initialize state to start with the MMA schedule

const handleLeftClick = () => {
    if (currentImage === MMAschedule) {
        setCurrentImage(FITschedule);
    } else {
        setCurrentImage(MMAschedule);
    }// Change to FIT schedule on left arrow click
};

const handleRightClick = () => {
    if (currentImage === MMAschedule) {
        setCurrentImage(FITschedule);
    } else {
        setCurrentImage(MMAschedule);
    } // Change back to MMA schedule on right arrow click
};

const meetings = [
    {
      id: 1,
      name: 'Monday',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp3mLSyAnvKW1nwdbpsY3Om8YpqB-CQmv_MA&s',
      start: '6:00 AM',
      startDatetime: '2022-01-21T13:00',
      end: '9:00 PM',
      endDatetime: '2022-01-21T14:30'
    },
    {
      id: 2,
      name: 'Tuesday',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UHwwyLi-Bgj5e3CFApIDdwU4-l_esBDi2JEV1vEkWg&s',
      start: '8:00 AM',
      end: '9:00 PM'
    },
    {
      id: 3,
      name: 'Wednesday',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7afahLZADHJSXN7zxDQeryiHj-zyx0FM6QpaRzY3dQ&s',
      start: '8:00 AM',
      end: '9:00 PM'
    },
    {
      id: 4,
      name: 'Thursday',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UHwwyLi-Bgj5e3CFApIDdwU4-l_esBDi2JEV1vEkWg&s',
      start: '8:00 AM',
      end: '9:00 PM'
    },
    {
      id: 5,
      name: 'Friday',
      imageUrl: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/alpha_f_circle_icon_136973.png',
      start: '6:00 AM',
      end: '9:00 PM'
    },
    {
      id: 6,
      name: 'Saturday',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYxSE16jKCBlzeeSYXm0FeQikKk_R1R1e3k24i4lBrTQ&s',
      start: '8:00 AM',
      end: '2:00 PM'
    },
    {
      id: 7,
      name: 'Sunday',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eo_circle_yellow_letter-s.svg/2048px-Eo_circle_yellow_letter-s.svg.png',
      start: '8:00 AM',
      end: '2:00 PM'
    }
  ];
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  return (<>
  <Header/>
    <div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
      <div className="md:pr-1 md:pl-1 bg-gray-900">
        <div className="flex items-center">
          <h2 className="flex-auto text-sm font-semibold text-center text-gray-100"> Round 4 Gym's Schedules</h2>
          <button
            type="button" onClick={handleLeftClick}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">FITNESS Schedule</span>
            <ChevronLeftIcon className="h-10 w-10" aria-hidden="true" />

          </button>
          <button
            type="button" onClick={handleRightClick}
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">MMA Schedule</span>
            <ChevronRightIcon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div> 
        <center >
                        <div className='flex  '>
                        <div style={{width:'50%'}}><img onClick={handleRightClick}
                        style={{ cursor:'pointer',
                            width: "70%",
                             height: "200px",
                            border: FITschedule ==currentImage ?  '#01b7f0 10px solid':'',
                            borderRadius: FITschedule ==currentImage ?  '25%':'',
                        
                        }}
                        src={FITschedule}
                        alt=""
                    />

                        </div>
                        <div style={{width:'50%'}}><img onClick={handleRightClick}
                        style={{ cursor:'pointer',
                            width: "70%",
                             height: "200px",
                             border: MMAschedule ==currentImage ?  '#01b7f0 10px solid':'',
                             borderRadius: MMAschedule ==currentImage ?  '25%':'', }}
                        src={MMAschedule}
                        alt=""
                    />

                        </div>


                    </div></center>


                    <center >
                        <div className='flex  '>
                        <div onClick={handleRightClick} style={{width: "50%",marginTop:'4%',
                             height: "50px",cursor:'pointer',
                            //  backgroundColor: MMAschedule ==currentImage ?  'whitesmoke':'',
                             color: FITschedule ==currentImage ?  '#01b7f0':'whitesmoke', 
                            //  border: FITschedule ==currentImage ?  '#01b7f0 10px solid':'',
                            //  borderRadius: FITschedule ==currentImage ?  '25%':'',
                            borderBottom: currentImage === FITschedule ? '10px solid #01b7f0' : '',
                            }}
                                > FITNESS
                        </div>
                        <div onClick={handleRightClick} style={{width: "50%",marginTop:'4%',
                             height: "50px", cursor:'pointer',
                            //  backgroundColor: MMAschedule ==currentImage ?  'whitesmoke':'',
                             color: MMAschedule ==currentImage ?  '#01b7f0 ':'whitesmoke', 
                             borderBottom: currentImage === MMAschedule ? '10px solid #01b7f0' : '',
                            //  borderRadius: MMAschedule ==currentImage ?  '25%':'',
                            }}
                                > MMA
                        </div>


                    </div></center>
        
        

                    <img
                        style={{ 
                            width: "100%",
                             height: "700px" ,marginBottom:'2%',marginTop:'4%'}}
                        src={currentImage}
                        alt=""
                    />
                   

        {/* <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div> */}
        {/* <div className="mt-2 grid grid-cols-7 text-sm">
          {days.map((day, dayIdx) => (
            <div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2')}>
              <button
                type="button"
                className={classNames(
                  day.isSelected && 'text-white',
                  !day.isSelected && day.isToday && 'text-indigo-600',
                  !day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
                  !day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
                  day.isSelected && day.isToday && 'bg-indigo-600',
                  day.isSelected && !day.isToday && 'bg-gray-900',
                  !day.isSelected && 'hover:bg-gray-200',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                )}
              >
                <time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
              </button>
            </div>
          ))}
        </div> */}
      </div>
      <section className="mt-12 md:mt-0 md:pl-14">
      <img
                        style={{ 
                            width: "100%",
                             height: "200px" }}
                        src={logo4W}
                        alt="Your Company"
                    />
        <h2 className="text-base text-center font-semibold leading-6 text-gray-900">
          <time dateTime="2022-01-21">Hours of Operations</time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img src={meeting.imageUrl} alt="" className="h-10 w-10 flex-none rounded-full" />
              <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
                  <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>
              {/* <Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu> */}
            </li>
          ))}
        </ol>
      </section>
    </div>
    </>
  )
}
