import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className="max-w-3xl pt-20 mx-auto flex flex-col justify-center items-center">
         <div className="w-full text-center">
            <Link to='/'>
               <h1 className="text-[#3CAA9F] text-2xl font-bold">BookNook</h1>
            </Link>
            
            <div className="">
               <form className="card-body w-full md:w-3/5 mx-auto border-0">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email Address</span>
                     </label>
                     <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                     </label>
                  </div>
                  <div className="form-control">
                     <button className="btn bg-[#3CAA9F] hover:bg-transparent hover:border hover:border-[#3CAA9F] hover:text-[#3CAA9F] text-white border-0">Login</button>
                  </div>
               </form>
               <div>
                  <p className="text-center text-base">or sign in with Google</p>
                  <div className="text-center mt-3">
                     <button><img className="w-10 border mx-auto" src="https://i.ibb.co/n7GGVwL/google.png" alt="google logo" /></button>
                  </div>
               </div>

               <div className="py-3 text-center text-base">
                  <p>Not have an Account yer? <Link to='/register' className="text-blue-600 font-semibold">Register now</Link></p>
               </div>

               <div className="py-2 text-center text-base">
                  <p>By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement</p>
               </div>

               <div className="mt-5 text-center text-base">
                  <p>All rights reserved.
                  Copyright (2023-2023) – BookNook™</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;