import Swal from "sweetalert2";
import useAuth from "../Hooks/UseAuth";
import useCourses from "../Hooks/useCourses";
import { useLocation, useNavigate } from "react-router-dom";

const Courses = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleApply = (course) => {
    if (user) {
      const appliedList = {
        itemId: course._id,
        name: course.name,
        details: course.description,
        due: course.duration,
        img: course.img,
        Due: course.duration
      };
      fetch('http://localhost:5000/courses', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(appliedList),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            console.log(data);
            Swal.fire({
              title: 'Congratulation!',
              text: 'You have successfully applied for the Course!',
              icon: 'success',
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Please login first to apply to the courses',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  
  // const handleApply = (course) => {
  //   // console.log(course);
  //   if (user) {
  //     const appliedList = {
  //       itemId: course._id,
  //       name: course.name,
  //       details: course.description,
  //       due: course.duration,
  //       img: course.img,
  //     };
  //     fetch("http://localhost:5000/courses", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(appliedList),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         if (data.insertedId) {
  //           console.log(data);
  //           Swal.fire({
  //             title: "Congratulation!",
  //             text: "You have successfully applied for the Course !",
  //             icon: "success",
  //           });
  //         }
  //       });
  //   } else {
  //     Swal.fire({
  //       title: "Please login first to apply to the courses",

  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Login now",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         navigate('/login', { state: { from: location } });
  //       }
  //     });
  //   }
  // };
  const [courses, loading] = useCourses();
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 justify-center items-center lg:grid-cols-3  ">
      {loading ? (
        <span className="loading loading-bars text-center  text-primary loading-lg"></span>
      ) : (
        courses.map((course, i) => (
          <div className="mx-auto " key={i}>
            <div className="card h-96 w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={course?.img}
                  alt="Course Img"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body">
                <h2 className=" card-title">{course?.name}</h2>
                <p>{course?.description}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleApply(course)}
                    className="btn btn-primary"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Courses;
