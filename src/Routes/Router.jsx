import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Rooms from "../Pages/Rooms/Rooms";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Home from "../Pages/Home/Home";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import PrivateRouter from "./PrivateRouter";
import UpdateDetails from "../Pages/UpdateDetails/UpdateDetails";

const router = createBrowserRouter([
   {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "roomDetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/rooms/${params.id}`)
      },
      {
        path: "myBookings",
        element: <PrivateRouter><MyBookings></MyBookings></PrivateRouter>
      },
      {
        path: "myBookings/updateDetails/:id",
        element: <UpdateDetails></UpdateDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
      },
      {
        path: "contact",
        element: <Contact></Contact>
      }
    ] 
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);
 
export default router;
 