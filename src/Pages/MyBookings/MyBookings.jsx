import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import MyBookingsRow from "./MyBookingsRow";
import Swal from "sweetalert2";

const MyBookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings,] = useState([]);

   useEffect(() => {
      axios.get(`http://localhost:5000/bookings?email=${user?.email}`)
      .then(res => {
         setBookings(res.data)
      })
      .catch(error => {
         console.error("Error", error);
       });
   }, [])

   const handleDelete = id => {
         
      axios.delete(`http://localhost:5000/bookings/${id}`)
            
         .then(res => {
            console.log(res.data);
            Swal.fire({
               title: "Are you sure?",
               text: "You won't be able to revert this!",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Yes, delete it!"
             }).then((result) => {
               if (result.isConfirmed) {
                 Swal.fire({
                   title: "Deleted!",
                   text: "Your Booking has been deleted.",
                   icon: "success"
                 });
                 if (res.data.deletedCount > 0) {
                  const remaining = bookings.filter(booking => booking._id !== id);
                  setBookings(remaining);
               }
               }
             });
            
            
         })
         .catch(error => {
            console.error("Error", error);
          });
   }

   return (
      <div className="py-20 max-w-7xl m-auto">
         {
            bookings.length > 0 ?
            <div>
               <h1>My Bookings: {bookings.length}</h1>
               <div className="overflow-x-auto">
                  <table className="table">
                     {/* head */}
                     <thead>
                        <tr>
                           <th>
                              
                           </th>
                           <th>Image</th>
                           <th>Room Name</th>
                           <th>Price</th>
                           <th>Email</th>
                           <th>Address</th>
                           <th>Phone</th>
                           <th>Booking Date</th>
                           <th>Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           bookings.map(booking => <MyBookingsRow key={booking._id} handleDelete={handleDelete} booking={booking}></MyBookingsRow>)
                        }
                     </tbody>
                  </table>
               </div>
            </div>
            :
            <div className="h-[40vh] font-bold flex items-center justify-center">
               <h1 className="text-3xl">No Booking found!</h1>      
            </div>
         }
      </div>
   );
};

export default MyBookings;