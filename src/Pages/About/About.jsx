const About = () => {
   return (
      <div className="">
         <div className="max-w-screen-xl m-auto mb-10">
            <div className="hero h-[60vh]" style={{backgroundImage: 'url(https://i.ibb.co/k9hHBtC/banner-room-details.png)'}}>
               <div className="hero-overlay bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                     <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                  </div>
               </div>
            </div>
         </div>
         
         <div className="max-w-7xl m-auto items-center py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
               <h2 className="text-3xl md:text-5xl">Find The Best Hotel For Accomodation.</h2>
               <p>Welcome to the best five- luxury hotel in New York. Hotel is veryes elementum sesue the aucan vestibulum aliquam justo in sapien on thi rutrum volutpat. Donec in quis the pellentesque velit. Donec id velitel ac arcu posuere blane.</p>
               <p>Hotel ut nisl quam nestibulum ac quam nec odio elementum oneni sceisuen the aucan ligula. Orci varius natoque penatibus ethemen magnis discustent parturient monte nascete ridiculus musclineorto nellentesque habitant forminy morbine.</p>
               <div className="flex pt-10 items-center">
                  <div className="mr-5"><img className="w-full" src="https://hotelina-nextjs.vercel.app/assets/images/bg/manager.png" alt="" /></div>
                  <div>
                     <h3>Hotel Manager</h3>
                  </div>
               </div>
            </div>
            <div>
               <img src="https://hotelina-nextjs.vercel.app/assets/images/bg/home-about-img.png" alt="" />
            </div>
         </div>
      </div>
      
   );
};

export default About;