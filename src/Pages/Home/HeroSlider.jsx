import { Link } from "react-router-dom";

const HeroSlider = () => {
   return (
      <div>
         <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/qd7JW38/twin-feature.jpg" className="w-full h-[90vh] object-cover" />
               <div className="h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
               <div className="absolute flex-col transform  -translate-y-1/2 p-10 md:left-10 lg:left-24 top-1/2 space-y-3 md:space-y-8">
                  <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">Book Your Suitable Rooms</h2>
                  <p className="text-white text-lg">Enjoy Your Vacation!</p>
                  <div className="mb-10">
                     <Link to='/rooms'>
                        <button className="bg-[#3CAA9F] py-2 px-4 border border-[#3CAA9F] hover:bg-transparent hover:text-white text-white text-xl rounded-md">Book Now</button>
                     </Link>
                  </div>
               </div>
               <div className="absolute flex justify-between transform right-5 bottom-10">
                  <a href="#slide4" className="btn mr-10 btn-circle">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
               </div>
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/RyRx7Xj/standard-feature.jpg" className="w-full h-[90vh] object-cover" />
               <div className="h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
               <div className="absolute flex-col transform  -translate-y-1/2 p-10 md:left-10 lg:left-24 top-1/2 space-y-3 md:space-y-8">
                  <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">Book Your Suitable Rooms</h2>
                  <p className="text-white text-lg">Enjoy Your Vacation!</p>
                  <div className="mb-10">
                     <Link to='/rooms'>
                        <button className="bg-[#3CAA9F] py-2 px-4 border border-[#3CAA9F] hover:bg-transparent hover:text-white text-white text-xl rounded-md">Book Now</button>
                     </Link>
                  </div>
               </div>
               <div className="absolute flex justify-between transform right-5 bottom-10">
                  <a href="#slide1" className="btn mr-10 btn-circle">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
               </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/VVjGbNy/deluxe-feature.jpg" className="w-full h-[90vh] object-cover" />
               <div className="h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
               <div className="absolute flex-col transform  -translate-y-1/2 p-10 md:left-10 lg:left-24 top-1/2 space-y-3 md:space-y-8">
                  <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">Book Your Suitable Rooms</h2>
                  <p className="text-white text-lg">Enjoy Your Vacation!</p>
                  <div className="mb-10">
                     <Link to='/rooms'>
                        <button className="bg-[#3CAA9F] py-2 px-4 border border-[#3CAA9F] hover:bg-transparent hover:text-white text-white text-xl rounded-md">Book Now</button>
                     </Link>
                  </div>
               </div>
               <div className="absolute flex justify-between transform right-5 bottom-10">
                  <a href="#slide2" className="btn mr-10 btn-circle">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
               </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
               <img src="https://i.ibb.co/WtQh86C/sweet-feature.jpg" className="w-full h-[90vh] object-cover" />
               <div className="h-full w-full absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
               <div className="absolute flex-col transform  -translate-y-1/2 p-10 md:left-10 lg:left-24 top-1/2 space-y-3 md:space-y-8">
                  <h2 className="text-white text-3xl md:text-6xl font-bold leading-tight">Book Your Suitable Rooms</h2>
                  <p className="text-white text-lg">Enjoy Your Vacation!</p>
                  <div className="mb-10">
                     <Link to='/rooms'>
                        <button className="bg-[#3CAA9F] py-2 px-4 border border-[#3CAA9F] hover:bg-transparent hover:text-white text-white text-xl rounded-md">Book Now</button>
                     </Link>
                  </div>
               </div>
               <div className="absolute flex justify-between transform right-5 bottom-10">
                  <a href="#slide3" className="btn mr-10 btn-circle">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeroSlider;