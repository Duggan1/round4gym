



import Header from './Header';
import Team4staff from './Team4staff';
import izzo from './izzo.webp';
import ak47 from './ak47.webp';
import logo4W from './logo4W.webp'

        
  
  
  
  const people = [
    {
      name: 'Askar "Ak-47" Askar',
      role: 'Pro MMA Fighter',
      imageUrl:
        ak47,
        record: '(14-4-0)',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
        name: 'Motaz "Izzo" Askar',
        role: 'Pro MMA Fighter',
        imageUrl:
        izzo,
        record: '(5-2-0)',
         xUrl: '#',
        linkedinUrl: '#',
      },
    // More people...
  ]
  
  export default function Team4() {
    return (<>
                <Header/>
    
      <div className="bg-white ">
        <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        
          <div className="mx-auto max-w-2xl lg:mx-0"><img
                        style={{ 
                            width: "100%",
                             height: "250px" }}
                        src={logo4W}
                        alt="Your Company"
                    />
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
              best results for our clients.
            </p>
            <h2 className="text-right text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img className=" w-full rounded-2xl object-cover" style={{backgroundSize:'100% 100%'}} src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-600">{person.name}</h3>
                <p className="text-base leading-7 text-gray-900">{person.role}</p>
                <p className="text-base leading-7 text-gray-600">{person.record}</p>
                
              </li>
            ))}
          </ul>
        </div>
        <Team4staff/>
      </div>
   </> )
  }
  