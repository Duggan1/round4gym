import Header from "./Header"
import logo4W from './logo4W.webp'
import uno from './uno.jpeg'
import duos from './duos.jpeg'
import three from './three.jpeg'
import four from './four.jpeg'
import cinco from './cinco.jpeg'


export default function PT() {
    
    const incentives = [
        {
          name: 'How It Works',
          imageSrc: 'https://cdn-icons-png.flaticon.com/512/928/928555.png',
          description: 'Join In on a Session completely free on us. Find the right class for your fitness needs. Get personal 1-on-1 training according to your time. A custom workout plan to achieve mental and physical health',
        },
        {
          name: 'Book with Pros',
          imageSrc: 'https://static.thenounproject.com/png/4114631-200.png',
          description: "We have a-lot of qualified fighters and fitness trainers to help you. We use the latest and newest technology and fitness gear to help you stay safe. ",
        },
        {
          name: 'Knowledge For Life',
          imageSrc: 'https://cdn0.iconfinder.com/data/icons/business-motivation-training/98/business-big-set-14-512.png',
          description:
            "Educate yourself with self defense to protect yourself and loves ones Stay fit and healthy all year round with a fighting class.You learn a new skill in self-defense while improving your mental health.",
        },
      ]
      const products = [
        {
          id: 1,
          imageSrc: uno,
          imageAlt: 'TODO',
          href: '#',
        },
        {
          id: 2,
          imageSrc: duos,
          imageAlt: 'TODO',
          href: '#',
        },
        {
          id: 3,
          imageSrc: 'https://images.tapology.com/letterbox_images/55860/default/Askar_Askar.jpg?1637959909' ,
          imageAlt: 'TODO',
          href: '#',
        },
        {
          id: 4,
          imageSrc: three,
          imageAlt: 'TODO',
          href: '#',
        },
        {
            id: 4,
            imageSrc: cinco,
            imageAlt: 'TODO',
            href: '#',
          },
          {
            id: 5,
            imageSrc: 'https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2018/04/asef-askar-bellator-198.jpg',
            imageAlt: 'TODO',
            href: '#',
          },
        // More products...
      ]
    const stats = [
        // {
        //     id: 1, value: 'Personal Training',
        //     name: 
        //   },          
  { id: 1, name: '', value: '' },
  { id: 2, name: '', value: '' },
  { id: 3, name: '', value: '' },
]
    return (<>
    <Header/>
    {/* <img
                        style={{ 
                            width: "100%",
                             height: "200px" }}
                        src={logo4W}
                        alt="Your Company"
                    /> */}               
     
<div className="bg-gray-50" style={{ paddingBottom:'4%'}}>
      <div className="mx-auto max-w-7xl  sm:px-2  lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none"> <img
                        style={{ 
                            width: "100%",
                             height: "250px" }}
                        src={logo4W}
                        alt="Your Company"
                    />
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              PERSONAL TRAINING
              </h2>
              <p className="mt-4 text-gray-500">
              Our Personal Training program is designed with you in mind. We understand that everyone's schedule is unique, so we tailor our sessions to fit seamlessly into your life. Our certified Personal Trainers are experts in their field, offering nutritional guidance and specialized classes to help you burn calories and achieve your fitness goals faster. With access to state-of-the-art machines, heavy hitting bags for boxing and MMA training, and a spacious mat area for functional workouts, we provide the tools and environment you need to succeed. Whether you're a beginner or an experienced athlete, our Personal Training program will challenge and inspire you to reach new heights. Start your fitness journey with us today!
              </p>
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
            <div className='flex  '><img
                src={four}
                alt=""
                className="object-cover object-center"
              />
              <img
                src={'https://miro.medium.com/v2/resize:fit:828/1*wjQYWUFgp_VrzPpDoSQgyQ.jpeg'}
                alt=""
                className="object-cover object-center"
              />
              </div>
            </div>
          </div>
          <div style={{ paddingBottom:'4%'}} className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="sm:flex lg:block">
                <div className="sm:flex-shrink-0">
                  <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                </div>
                <div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                </div>
              </div>
            ))}
          </div>   
          <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
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
      </div>
    </div>
        </div>
      </div>





      
    </div>
    






    <div className="bg-white" style={{borderTop:' 5px solid #01b7f0'}} >
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
      

        <div className="-mx-px grid grid-cols-2 border-l  border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
              <img
  src={product.imageSrc}
  alt={product.imageAlt}
  className={product.id === 5 ? '':"h-full w-full object-cover object-center"}
  style={product.id === 5 ? { 
    // padding:'25%',
    minWidth: '150.85%', // Increase width to fill the space after clipping
    // Adjust the left margin to align the image correctly,
    // objectPosition: 'left center', 
  } : {}}
/>

              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>



     


   


      </>
    )
  }
  