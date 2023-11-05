import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
   return (
      <div className="flex w-full max-w-7xl mx-auto justify-between">
         <div className="flex text-[#3CAA9F] text-2xl font-bold">
            <Link to='/'>BookNook</Link>
         </div>
         
         <div className="flex-none hidden lg:block">
            {/* Navbar menu content here */}
            <NavLink to='/about'
               className={({ isActive }) => isActive ?
               "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm"
               : "btn btn-ghost btn-sm"}>
               About</NavLink>
            <NavLink to='/rooms'
               className={({ isActive }) => isActive ?
               "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm"
               :
               "btn btn-ghost btn-sm"}>
               Rooms</NavLink>
            <NavLink to='/myBookings'
               className={({ isActive }) => isActive ?
               "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm"
               :
               "btn btn-ghost btn-sm"}>
               My Bookings</NavLink>
            <NavLink to='/contact'
               className={({ isActive }) => isActive ?
               "btn hover:bg-[#3CAA9F] bg-[#3CAA9F] border-0 text-white btn-sm"
               :
               "btn btn-ghost btn-sm"}>
               Contact</NavLink>
         </div>
         <div>
            <NavLink to='/login'>
               <button className="btn btn-sm capitalize rounded-none bg-transparent border border-[#3CAA9F] text-[#3CAA9F] hover:bg-[#3CAA9F] hover:text-white font-semibold">Login</button>
            </NavLink>
         </div>
      </div>
   );
};

export default Navbar;