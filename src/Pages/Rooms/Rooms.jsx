import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet";
import { FaUsers, FaCouch  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Rooms = () => {
   const [services, setServices] = useState([])
   
   useEffect(() => {
      axios.get('http://localhost:5000/rooms')
      .then(res => {
         setServices(res.data)
      })
      
   }, [])
   
   
   return (
      <>
         <Helmet>
            <title>BookNook - Home</title>
         </Helmet>
      <div>
         <div>
            <div className="hero h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/k9hHBtC/banner-room-details.png)'}}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                     <h1 className="mb-5 text-5xl font-bold">Room & Suits</h1>
                  </div>
               </div>
            </div>
         </div>
         <div className="grid py-20 max-w-7xl mx-auto gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
               services.map(service => 
                  <div key={service._id} className="card shadow-xl h-80">
                     <figure className="h-full rounded-none"><img className="h-full object-cover w-full" src={service.roomImages} alt="Shoes" /></figure>
                     <div className="absolute w-full h-full bg-gradient-to-t from-black via-transparent to-transparent">

                     </div>
                     <div className="absolute w-full bottom-0 space-y-2 pl-4 pr-4 pb-4">
                        <p className="text-white text-xl font-normal">${service.pricePerNight}/PER NIGHT</p>
                        <h2 className="font-bold text-3xl m-0 text-white">
                           {service.category}
                        </h2>
                        
                        <div className="card-actions flex justify-between items-center w-full">
                           <div>
                              <div className="badge badge-outline border-0 text-white"><FaCouch className="mr-2"></FaCouch>{service.numBeds} Beds</div> 
                              <div className="badge badge-outline border-0 text-white"><FaUsers className="mr-2"></FaUsers>{service.personCapacity} Guests</div>
                           </div>
                           <div>
                              <Link to={`/roomDetails/${service._id}`}>
                                 <button className="bg-[#3CAA9F] py-2 px-4 border border-[#3CAA9F] hover:bg-transparent text-white text-lg rounded-md">Room Details</button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  )
            }
         </div>
         </div>
         </>
   );
};

export default Rooms;