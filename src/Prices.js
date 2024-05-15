import Header from './Header';
import logo4W  from './logo4W.webp';
import logo4  from './logo4.webp';
import FITschedule from './FITschedule.webp';
import MMAschedule from './MMAschedule.webp'
import outsideround4 from './outsideround4.jpeg';
import { useState } from 'react'
import { Dialog, RadioGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'

function Prices() {

    
    const projects = [
        { name: 'Boxing', initials: '🥊', href: '#', members: 16, bgColor: 'bg-black' },
        { name: 'Strength & Conditioning', initials: '💪', href: '#', members: 12, bgColor: 'bg-black' },
        { name: 'Personal Training', initials: '🏋🏾', href: '#', members: 16, bgColor: 'bg-black' },
        { name: 'Kickboxing & Muay Thai', initials: '🥊', href: '#', members: 8, bgColor: 'bg-black' },
        { name: 'Jiu-Jitsu', initials: '🥋', href: '#', members: 8, bgColor: 'bg-black' },
        { name: 'MMA', initials: '👊', href: '#',  bgColor: 'bg-black' },
      ]
    const navigation = [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ]
      const pricing = {
        frequencies: [
          { value: 'monthly', label: 'Monthly' },
          { value: 'annually', label: 'Annually' },
        ],
        tiers: [
          {
            name: "Kid's Membership",
            id: 'tier-growth',
            href: 'https://donate.stripe.com/4gw8xEdNP0ypfqo6ot',
            featured: false,
            description: 'Convenient features to take your business to the next level.',
            price: { monthly: '$49', annually: '$288' },
            mainFeatures: ['Ages 5 - 13','5 Classes a Week', 'Disciple, Confidence, Self Defense',  'Boxing, MMA, JiuJitsu, KickBoxing'],
          },
          {
            name: 'Gold Membership',
            id: 'tier-starter',
            href: 'https://donate.stripe.com/6oE4ho113ch73HGfZ4',
            featured: true,
            description: 'Unlimitd Fitness Classes.',
            price: { monthly: '$79', annually: '$144' },
            mainFeatures: ['Cardio Boxing', 'Cardio Kickboxing', 'HIIT Classes'],
          },
          {
            name: 'Premium Membership',
            id: 'tier-scale',
            href: 'https://donate.stripe.com/6oE4ho113ch73HGfZ4',
            featured: false,
            description: 'Unlimitd Fitness & MMA Classes.',
            price: { monthly: '$149', annually: '$576' },
            mainFeatures: [
                'MMA',
              'Muay Thai ','Jiujitsu','Cardio Boxing', 'Cardio Kickboxing', 'HIIT Classes',
              
            ],
          },
          
        ],
        sections: [
          {
            name: 'Catered for business',
            features: [
              { name: 'Tax Savings', tiers: { Starter: true, Scale: true, Growth: true } },
              { name: 'Easy to use accounting', tiers: { Starter: true, Scale: true, Growth: true } },
              { name: 'Multi-accounts', tiers: { Starter: '3 accounts', Scale: 'Unlimited accounts', Growth: '7 accounts' } },
              { name: 'Invoicing', tiers: { Starter: '3 invoices', Scale: 'Unlimited invoices', Growth: '10 invoices' } },
              { name: 'Exclusive offers', tiers: { Starter: false, Scale: true, Growth: true } },
              { name: '6 months free advisor', tiers: { Starter: false, Scale: true, Growth: true } },
              { name: 'Mobile and web access', tiers: { Starter: false, Scale: true, Growth: false } },
            ],
          },
          {
            name: 'Other perks',
            features: [
              { name: '24/7 customer support', tiers: { Starter: true, Scale: true, Growth: true } },
              { name: 'Instant notifications', tiers: { Starter: true, Scale: true, Growth: true } },
              { name: 'Budgeting tools', tiers: { Starter: true, Scale: true, Growth: true } },
              { name: 'Digital receipts', tiers: { Starter: true, Scale: true, Growth: true } },
              { name: 'Pots to separate money', tiers: { Starter: false, Scale: true, Growth: true } },
              { name: 'Free bank transfers', tiers: { Starter: false, Scale: true, Growth: false } },
              { name: 'Business debit card', tiers: { Starter: false, Scale: true, Growth: false } },
            ],
          },
        ],
      }
  
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
        const [frequency, setFrequency] = useState(pricing.frequencies[0])
      


    return (<>
        <Header/>
    <div>

    <div style={{backgroundColor:'#01b7f0'}} className="pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={logo4}
                alt=""
              />
            </div>
          </div>
          
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            {/* <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
              <img
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={outsideround4}
                alt=""
              />
            </div> */}


<main>
        {/* Pricing section */}
        <div className="isolate overflow-hidden">
          <div className="flow-root bg-gray-900 py-16 sm:pt-32 lg:pb-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                <p href={project.href}  className="block overflow-hidden whitespace-nowrap text-ellipsis w-full font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </p>
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
              <div className="relative mx-auto mt-10 grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                <svg
                  viewBox="0 0 1208 1024"
                  aria-hidden="true"
                  className="absolute -bottom-48 left-1/2 h-[64rem] -translate-x-1/2 translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] lg:-top-48 lg:bottom-auto lg:translate-y-0"
                >
                  <ellipse cx={604} cy={512} fill="url(#d25c25d4-6d43-4bf9-b9ac-1842a30a4867)" rx={604} ry={512} />
                  <defs>
                    <radialGradient id="d25c25d4-6d43-4bf9-b9ac-1842a30a4867">
                      <stop stopColor='#01b7f0' />
                      <stop offset={1} stopColor='#01b7f0' />
                    </radialGradient>
                  </defs>
                </svg>
                <div
                  className="hidden lg:absolute lg:inset-x-px lg:bottom-0 lg:top-4 lg:block lg:rounded-t-2xl lg:bg-gray-800/80 lg:ring-1 lg:ring-white/10"
                  aria-hidden="true"
                />
                {pricing.tiers.map((tier) => (
                  <div
                    key={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'z-10 bg-white shadow-xl ring-1 ring-gray-900/10'
                        : 'bg-gray-600/80 ring-1 ring-white/10 lg:bg-transparent lg:pb-14 lg:ring-0',
                      'relative rounded-2xl'
                    )}
                  >
                    <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                      <h2
                        id={tier.id}
                        className={classNames(
                          tier.featured ? 'text-gray-900' : 'text-white',
                          'text-sm font-semibold leading-6'
                        )}
                      >
                        {tier.name}
                      </h2>
                      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch">
                        <div className="mt-2 flex items-center gap-x-4">
                          <p
                            className={classNames(
                              tier.featured ? 'text-gray-900' : 'text-white',
                              'text-4xl font-bold tracking-tight'
                            )}
                          >
                            {tier.price[frequency.value]}
                          </p>
                          <div className="text-sm leading-5">
                            <p className={tier.featured ? 'text-gray-900' : 'text-white'}>USD</p>
                            {/* <p
                              className={tier.featured ? 'text-gray-500' : 'text-gray-400'}
                            >{`Billed ${frequency.value}`}</p> */}
                          </div>
                        </div>
                        <a style={{backgroundColor:'#01b7f0'}}
                          href={tier.href}
                              target="_blank" 
                          aria-describedby={tier.id}
                          className={classNames(
                            tier.featured
                              ? 'bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600'
                              : 'bg-white/10 hover:bg-white/20 focus-visible:outline-white',
                            'rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                          )}
                        >
                          Buy this plan
                        </a>
                      </div>
                      <div className="mt-8 flow-root sm:mt-10">
                        <ul
                          role="list"
                          className={classNames(
                            tier.featured
                              ? 'divide-gray-900/5 border-gray-900/5 text-gray-600'
                              : 'divide-white/5 border-white/5 text-white',
                            '-my-2 divide-y border-t text-sm leading-6 lg:border-t-0'
                          )}
                        >
                          {tier.mainFeatures.map((mainFeature) => (
                            <li key={mainFeature} className="flex gap-x-3 py-2">
                              <CheckIcon
                                className={classNames(
                                  tier.featured ? 'text-indigo-600' : 'text-gray-500',
                                  'h-6 w-5 flex-none'
                                )}
                                aria-hidden="true"
                              />
                              {mainFeature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* FAQ section */}
        {/* <div className="mx-auto mt-24 max-w-7xl divide-y divide-gray-900/10 px-6 sm:mt-56 lg:px-8">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </main>

          </div>
        </div>
      </div>
    </div>
        {/* <iframe 
                    class=""
                    src="https://www.instagram.com/round4gym/embed"
                    width="10%"
                    height="290px"
                    frameborder="0"
                    scrolling="no"
                    allowtransparency="true"
                    

                ></iframe> */}
        {/* <h1>Hello Team Round 4</h1> */}
      


                    
        
    </div>
   </> );
  }
  
  export default Prices;
  