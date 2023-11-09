import { useContext } from "react";
import HomeFeature from "./HomeFeature";
import { AuthContext } from "../../Provider/AuthProvider";
import NewsletterSignUp from "../../Componenets/NewsletterSignUp/NewsletterSignUp";
import HeroSlider from "./HeroSlider";
import { Helmet } from "react-helmet";

const Home = () => {
   const {user, isLoading} = useContext(AuthContext)

   if (isLoading) {
      return <div className="h-screen flex justify-center items-center">
         <progress className="progress w-56"></progress>
      </div>
   }
   return (
      <>
         <Helmet>
            <title>BookNook - Home</title>
         </Helmet>
         <div>
            <HeroSlider></HeroSlider>
            <HomeFeature></HomeFeature>
            <NewsletterSignUp></NewsletterSignUp>
         </div>
      </>
   );
};

export default Home;