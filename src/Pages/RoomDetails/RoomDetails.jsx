import { Link, useLoaderData } from "react-router-dom";
import { FaRegCircle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const RoomDetails = () => {

   const service = useLoaderData()

   const {_id} = service || {}
   return (
      <>
      <Helmet>
         <title>BookNook - Room Details</title>
      </Helmet>
      <div className="max-w-screen-xl m-auto">
         <div className="mb-10">
            <div className="hero h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/k9hHBtC/banner-room-details.png)'}}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                     <h1 className="mb-5 text-5xl font-bold">Room & Suits Details</h1>
                  </div>
               </div>
            </div>
         </div>
         <div className=" max-w-screen-xl m-auto pt-10 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
               <div>
                  <img className="h-[100vh] w-full object-cover" src={service.roomImages} alt="" />
               </div>
               <div className="space-y-3">
                  <p className="text-base"><span className="text-[#3CAA9F] text-xl font-semibold">${service.pricePerNight}</span> / Per Night</p>
                  <p><span className="font-bold text-[#3CAA9F]">Reviews:</span> 5/{service.reviews}</p>
                  <h1 className="text-5xl font-bold text-[#3CAA9F]">{service.category}</h1>
                  <p className="text-base mt-5">{service.description}</p>
                  <p><span className="font-bold text-[#3CAA9F]">Pets:</span> {service.petsAllowed}</p>
                  <p><span className="font-bold text-[#3CAA9F]">Children And Extra Beds:</span> {service.childrenAndExtraBeds}</p>
                  <p><span className="font-bold text-[#3CAA9F]">Extra Services:</span> {service.extraServices}</p>
                  <p><span className="font-bold text-[#3CAA9F]">Available:</span> {service.available}</p>
                  <p><span className="font-bold text-[#3CAA9F]">Room Size:</span> {service.roomSize}</p>
                  <p><span className="font-bold text-[#3CAA9F]">Number of Beds:</span> {service.numBeds}</p>
                  <p className="text-lg"><span className="font-bold text-[#3CAA9F]">Person Capacity:</span> {service.personCapacity}</p>
                  <div className="pt-5">
                     <Link to={`/roomDetails/${service._id}`}>
                        <button className="bg-[#3CAA9F] py-2 px-4 border border-[#3CAA9F] hover:bg-transparent text-white hover:text-black text-lg rounded-md">Book Now</button>
                     </Link>
                  </div>
               </div>
            </div>
            
         </div>
         </div>
         </>
   );
};

export default RoomDetails;