const NewsletterSignUp = () => {
   return (
      <div className="text-center space-y-4 bg-[#3CAA9F] py-20">
         <h2 className="text-2xl md:text-5xl font-light text-white">Stay in touch!</h2>
         <p className="text-white">Subscribe to our newsletter so we can spam you with offers and discounts!</p>
         <div className="form-control text-center">
            <label className="input-group justify-center">
               <input type="text" placeholder="Your Email" className="input max-w-sm" />
               <span className="btn">Subscribe</span>
            </label>
         </div>
      </div>
   );
};

export default NewsletterSignUp;