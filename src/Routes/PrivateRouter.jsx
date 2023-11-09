import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
   const { user, isLoading } = useContext(AuthContext)

   if (isLoading) {
      return <div className="h-screen w-full flex justify-center items-center">
         <progress className="progress w-56"></progress>
      </div>
   }

   if (user?.email) {
      return children;
   }
   return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;