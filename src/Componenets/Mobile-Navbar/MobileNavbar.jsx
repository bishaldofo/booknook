import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
   return (
      <div className="flex flex-col">
         <NavLink to='/about' 
         className={({isActive}) => isActive ?
         "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm" 
         : 
         "btn btn-ghost btn-sm"}>
         About</NavLink>
         
         <NavLink to='/rooms' 
         className={({isActive}) => isActive ?
         "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm" 
         : 
         "btn btn-ghost btn-sm"}>
         Rooms</NavLink>
         
         <NavLink to='/myBookings' 
         className={({isActive}) => isActive ?
         "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm" 
         : 
         "btn btn-ghost btn-sm"}>
            My Bookings</NavLink>
         
         <NavLink to='/contact' 
         className={({isActive}) => isActive ?
         "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm" 
         : 
         "btn btn-ghost btn-sm"}>
         Contact</NavLink>
      </div>
   );
};

export default MobileNavbar;