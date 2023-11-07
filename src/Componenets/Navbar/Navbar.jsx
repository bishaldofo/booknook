import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
   const { user, logOut } = useAuth()
   
   const handleLogOut = () => {
      logOut()
         .then()
         .catch(error => {
            console.log(error);
         })
   }
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

            {
               user?.email ? 
               <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                     <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                     </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 rounded-none z-[1] w-32 border bg-white menu menu-sm dropdown-content">
                     <li><button className="rounded-sm">{user.displayName}</button></li>
                     <li><button onClick={handleLogOut} className="rounded-sm">Logout</button></li>
                  </ul>
               </div>
               :
               <NavLink to='/login'><button className="btn text-lg font-semibold">Login</button></NavLink>
            }
         </div>
      </div>
   );
};

export default Navbar;