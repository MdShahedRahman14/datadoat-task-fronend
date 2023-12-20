// import useAppliedCourses from "./../Hooks/useAppliedCourses";

// const AppliedCourses = () => {
//   const [appliedCourses, loading] = useAppliedCourses();
//   console.log(appliedCourses);
//   return (
//     <div className="grid gap-3 grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3  ">
//       {loading ? (
//         <span className="loading loading-bars text-center  text-primary loading-lg"></span>
//       ) : (
//         appliedCourses.map((applied, i) => (
//           <div className="mx-auto " key={i}>
//             <div className="card h-96 w-96 bg-base-100 shadow-xl">
//               <figure className="px-10 pt-10">
//                 <img
//                   src={applied?.img}
//                   alt="applied Img"
//                   className="rounded-xl"
//                 />
//               </figure>
//               <div className="card-body">
//                 <h2 className=" card-title">{applied?.name}</h2>
//                 <p>{applied?.description}</p>
//                 <div className="card-actions justify-end"></div>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default AppliedCourses;
import useAppliedCourses from "./../Hooks/useAppliedCourses";

const AppliedCourses = () => {
  const [appliedCourses, loading] = useAppliedCourses();
  console.log(appliedCourses);

  // Check if appliedCourses is an array before mapping
  if (!Array.isArray(appliedCourses)) {
    return <p>No data to show</p>;
  }

  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3">
      {loading ? (
        <span className="loading loading-bars text-center  text-primary loading-lg"></span>
      ) : (
        appliedCourses.map((applied, i) => (
          <div className="mx-auto " key={i}>
            <div className="card h-96 w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={applied?.img}
                  alt="applied Img"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className=" card-title">
                 Course Name:  
                  {applied?.name}
                </h2>
                <p> <span className="font-bold">Course Details: </span>{applied?.details}</p>
                <p>
                  <span className=" font-bold">Duration: </span>
                  {applied?.due}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AppliedCourses;
