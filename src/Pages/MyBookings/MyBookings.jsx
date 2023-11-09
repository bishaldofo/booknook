import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import MyBookingsRow from "./MyBookingsRow";

const MyBookings = () => {
   const { user } = useContext(AuthContext);
   const [bookings, setBookings] = useState([]);

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
      const proceed = confirm("Are you sure you want to delete?")
      if (proceed) {
         
         axios.delete(`http://localhost:5000/bookings/${id}`)
         .then(res => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
               alert('Deleted Successfully')
               const remaining = bookings.filter(booking => booking._id !== id);
               setBookings(remaining);
            }
         })
         .catch(error => {
            console.error("Error", error);
          });
      }
   }

   return (
      <div className="py-20 max-w-7xl m-auto">
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
   );
};

export default MyBookings;