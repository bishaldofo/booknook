import { Link } from "react-router-dom";

const MyBookingsRow = ({ booking, handleDelete }) => {
   
   const {
      _id,
      name,
      email,
      phone,
      address,
      date,
      roomImages,
      category,
      pricePerNight } = booking || {}
   
   return (
      <tr>
         <th>
            <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
         </th>
         <td>
            <img className="w-20 h-20 object-cover" src={roomImages} alt="Avatar Tailwind CSS Component" />
         </td>
         <td>
            {category}
         </td>
         <td>${pricePerNight}</td>
         <td>{email}</td>
         <td>{address}</td>
         <td>{phone}</td>
         <td>{date}</td>
         <th>
            <Link to={`updateDetails/${_id}`}>
               <button className="btn btn-ghost btn-xs">Edit</button>
            </Link>
         </th>
      </tr>
   );
};

export default MyBookingsRow;