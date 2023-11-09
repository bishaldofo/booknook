const Contact = () => {
   return (
      <div className="py-20">
         <div className="max-w-7xl m-auto">
            <h1 className="text-center text-2xl font-bold">Contact Us</h1>
            <div className="w-1/2 m-auto">
               <form className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                     </label>
                     <textarea className="textarea textarea-bordered w-full" placeholder="Write here what in you mind...."></textarea>
                  </div>
                  <div className="form-control mt-6">
                     <button type="submit" className="bg-[#3CAA9F] w-full py-2 px-4 border border-[#3CAA9F] hover:bg-transparent text-white hover:text-black text-lg rounded-md">Send</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Contact;