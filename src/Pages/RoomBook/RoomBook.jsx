const RoomBook = () => {
   return (
      <div>
         <div>
            <h2>Book Your Room</h2>
            <form>
               <div className="form-control">
                  <label>
                     <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered w-3/4 rounded-md" />
                  </label>
               </div>
                  
               <div className="form-control mt-5">
                  <label>
                     <input type="email" name="email" placeholder="Your Email Address" className="input input-bordered w-3/4 rounded-md" required/>
                  </label>
               </div>
                  
               <div className="form-control mt-5">
                  <label className="label">
                  <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                  </label>
               </div>
                  
               <button type="submit">Submit</button>
            </form>
         </div>
      </div>
   );
};

export default RoomBook;