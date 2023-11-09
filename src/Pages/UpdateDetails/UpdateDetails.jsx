import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const UpdateDetails = () => {
   const {user} = useContext(AuthContext)
   const booking = useLoaderData()

   const {
      _id,
      roomImages,
      category,
      pricePerNight} = booking || {}

   const updateBookings = event => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const phone = form.phone.value;
      const date = form.date.value;
      const updateBooking = {
         name,
         email,
         phone,
         date,
         roomImages,
         category,
         pricePerNight
      }

      console.log(booking)

      axios.put(`http://localhost:5000/bookings/${_id}`, updateBooking)
      .then(res => {
         console.log(res.data);
         if (res.data.matchedCount) {
            toast.success('Successfully updated!')
            form.reset()
         }
       })
       .catch(error => {
         console.error("Error making the booking:", error);
       });

   }

   return (
      <div className="mt-5 mb-10">
         <div className="max-w-3xl m-auto px-5 pt-10">
            <h1 className="text-3xl font-semibold my-5">Update your information if need changes for <span className="font-bold">{booking.category}</span></h1>
            <form onSubmit={updateBookings}>
               <div className="form-control">
                  <label>
                     <input type="text" name="name" readOnly defaultValue={user?.displayName} placeholder="Your Full Name" className="input input-bordered w-full rounded-md" />
                  </label>
               </div>
                  
               <div className="form-control mt-5">
                  <label>
                     <input type="email" name="email" readOnly defaultValue={user?.email} placeholder="Your Email Address" className="input input-bordered w-full rounded-md" required/>
                  </label>
               </div>

               <div className="form-control mt-5">
                  <label>
                     <input type="tel" name="phone" placeholder="Your Phone Number" className="input input-bordered w-full rounded-md" defaultValue={booking.phone} required/>
                  </label>
               </div>
                  
               <div className="form-control mt-5">
                  <label className="label">
                  <input type="date" name="date" placeholder="Date" className="input input-bordered w-full" defaultValue={booking.date} required />
                  </label>
               </div>
                  
               <div className="pt-5 pb-10">
                  {/* <Link to={`/myBookings/${service._id}`}> */}
                     <button type="submit" className="bg-[#3CAA9F] w-full py-2 px-4 border border-[#3CAA9F] hover:bg-transparent text-white hover:text-black text-lg rounded-md">Save Changes</button>
                  {/* </Link> */}
               </div>
            </form>
         </div>
      </div>
   );
};

export default UpdateDetails;