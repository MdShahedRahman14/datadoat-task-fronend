/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Ad = () => {
    return (
        <div className="md:flex justify-between items-center bg-[#ebecef] p-4">
           <div className="md:flex gap-3 items-center">
            <img className="w-24" src="https://rb.gy/28n5ol" alt="" />
            <div>
            <h1 className="font-bold text-2xl">Student Portal Offering All the Course In Very Cheep Price.</h1>
            <p className="font-medium text-xl">So, don't miss . Enroll as soon as possible</p>
            </div>
           </div>
           <button className="btn btn-outline uppercase mt-3"><Link to="/courses">Get Enroll Now</Link></button>
        </div>
    );
};

export default Ad;