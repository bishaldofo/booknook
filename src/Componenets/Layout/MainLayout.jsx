import PropTypes from "prop-types"
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../Mobile-Navbar/MobileNavbar";

const MainLayout = ({ children }) => {
   return (
      <div>
         <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
               {/* Navbar */}
               <div className="w-full sticky top-0 z-50 navbar bg-white shadow-xl">
                  <div className="flex-none lg:hidden">
                     <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                     </label>
                  </div> 
                  <div className="flex w-full px-2">
                     <Navbar></Navbar>
                  </div>
               </div>
               {/* Page content here */}
               {children}
            </div> 
            <div className="drawer-side">
               <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
               <div className="menu p-4 w-80 min-h-full bg-base-200">
                  {/* Sidebar content here */}
                  <MobileNavbar></MobileNavbar>
               </div>
            </div>
         </div>
      </div>
   );
};

MainLayout.propTypes = {
   children : PropTypes.node,
}

export default MainLayout;