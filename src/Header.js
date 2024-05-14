import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import './App.css';
import logo4 from './logo4.webp';
import { useNavigate, useLocation } from 'react-router-dom';




export default function Header() {

    function classNames(...classes) {
  return classes.filter(Boolean).join(' ')

  
}
const location = useLocation();
const navigate = useNavigate();
  const handleNavigation = (path) => {
    navigate(path);
};
const NavigateHome = () => {
    navigate('/');
};
const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Coaches', href: '/coaches', current: location.pathname === '/coaches' },
    { name: 'Personal Training', href: '/personalTraining', current: location.pathname === '/personalTraining' },
    { name: 'Classes', href: '/schedule', current: location.pathname === '/schedule' },
    { name: 'Pricing', href: '/options', current: location.pathname === '/options' },
];

      
    
    
    return (
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div style={{ width: "20%" }} className="flex items-center justify-center">
                    <img onClick={() => NavigateHome()}
                        style={{ width: "100%", height: "50px" }}
                        src={logo4}
                        alt="Your Company"
                    />
                </div>

                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={() => handleNavigation(item.href)}
                            className={classNames(
                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      
                    </button>
    
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <a
                            // key={item.name}
                            // href={item.href}
                            // onClick={() => handleNavigation(item.href)}
                            className='text-gray-300 hover:bg-gray-700 hover:text-white
rounded-md px-3 py-2 text-sm font-medium'
                            
                            // aria-current={item.current ? 'page' : undefined}
                          >
                            Contact Us
                          </a>
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                              href="tel:+17082794734"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                +1 (708) 279-4734
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                              target="_blank"  href="mailto:round4gym@gmail.com"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                round4gym@gmail.com
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                              href="https://www.google.com/maps/place/Round+4+Gym/@41.6902338,-87.8198884,17z/data=!3m1!4b1!4m6!3m5!1s0x880e393a11030c23:0x4500477e9a1bc880!8m2!3d41.6902338!4d-87.8198884!16s%2Fg%2F11lcz4vc02?entry=ttu"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              target="_blank" // Opens in a new tab
                              rel="noopener noreferrer" // Security measure for opening links in a new tab
                            >
                              8086 W 111th St, Palos Hills, IL 60465
                            </a>
                            
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>
    
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      )
    }