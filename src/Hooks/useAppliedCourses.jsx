import { useEffect, useState } from "react";

const useAppliedCourses = () => {
  const [appliedCourses, setAppliedCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("http://localhost:5000/appliedcourses")
      .then((res) => res.json())
      .then((data) => {
        setAppliedCourses(data);
        setLoading(false)
      })
 
  }, []);

  return [appliedCourses, loading];
};

export default useAppliedCourses;
