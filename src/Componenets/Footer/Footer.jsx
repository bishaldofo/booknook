const Footer = () => {
   return (
      <div className="bg-[#F2F2F2]">
         <footer className="footer w-full max-w-7xl m-auto py-10 text-base-content">
            <aside>
               <h2 className="text-[#3CAA9F] text-xl font-bold">BookNook</h2>
               <p>Book Your Sweet Vacation!</p>
            </aside> 
            <nav>
               <header className="footer-title">Services</header> 
               <a className="link link-hover">Branding</a> 
               <a className="link link-hover">Design</a> 
               <a className="link link-hover">Marketing</a> 
               <a className="link link-hover">Advertisement</a>
            </nav> 
            <nav>
               <header className="footer-title">Company</header> 
               <a className="link link-hover">About us</a> 
               <a className="link link-hover">Contact</a> 
               <a className="link link-hover">Jobs</a> 
               <a className="link link-hover">Press kit</a>
            </nav> 
            <nav>
               <header className="footer-title">Legal</header> 
               <a className="link link-hover">Terms of use</a> 
               <a className="link link-hover">Privacy policy</a> 
               <a className="link link-hover">Cookie policy</a>
            </nav>
         </footer>
      </div>
   );
};

export default Footer;