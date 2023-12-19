import useCourses from "../Hooks/useCourses";

const Courses = () => {
  const [courses, loading] = useCourses();
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {loading ? (
        <span className="loading loading-bars text-center  text-primary loading-lg"></span>
      ) : (
        courses.map((course, i) =>  <div className=" " key={i}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className=" card-title">{course?.name}</h2>
            <p>{course?.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Apply</button>
            </div>
          </div>
        </div>
      </div>
         
        )
      )}
    </div>
  );
};

export default Courses;
