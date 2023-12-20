import { Link } from "react-router-dom";

const Banner = () => {
    return (
      <div className="my-16 shadow-lg rounded-xl">
         <div data-aos="fade-up" data-aos-anchor-placement="top-center shadow-lg rounded-xl"></div>
        <div className=" w-full shadow-sm  p-8 border border-gray-100  ">
          <div className="md:flex md:justify-between items-center ">
            <div className="grid  gap-7 md:w-1/2">
              <h2 className="text-5xl  font-mono font-bold">Choose you best courses available here!</h2>
              <p className="font-medium">
                
Explore a world of learning with our curated selection of top courses! From mastering Python programming to unlocking the secrets of effective business strategy, we offer engaging online experiences for all levels. Dive into the essentials of web development, graphic design, and artificial intelligence, or enhance your personal development with communication and time management skills. 
              </p>
              <div className="flex  gap-3">
                <button className="btn btn-lg btn-primary"><Link to='/courses'>Apply Now!</Link></button>
              </div>
            </div>
            <div className="mt-16 ">
            <img src="https://rebrand.ly/7dacd2" className="w-96 h-96 rounded-lg" />
          </div>
          </div>
        
        
        </div>
      </div>
    );
  };
  
  export default Banner;
  