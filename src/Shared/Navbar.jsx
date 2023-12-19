import { Link } from "react-router-dom";



import useAuth from "../Hooks/UseAuth";
import ActiveLink from "./ActiveLink";
const Navbar = () => {
  const {user,logOut}=useAuth()
  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.log(error))
  }
  const navItems = (
    <div className="lg:flex items-center font-medium ">
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/courses">Courses</ActiveLink>
      </li>

      <li>
        <ActiveLink to="/appliedCourses">Applied Courses</ActiveLink>
      </li>
      <Link to="/dashBoard/myClass">

        </Link>
    {
      user?
      <>
       <li>
        <ActiveLink to="/dashboard">Dashboard</ActiveLink>
      </li>
      <div className="flex gap-3 items-center">
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded-full h-8 w-8">
              <img title={user?.displayName} src={user?.photoURL} alt="" />
            </div>
          </div>
       
          <button onClick={handleLogOut} className="btn btn-active btn-ghost hover:btn-primary">
            LogOut
          </button>
        </div>
      </>:<>
      <li>
        <ActiveLink to="/login">Login</ActiveLink>
      </li>
      </>
    }
    </div>
  );
  return (
    <div className="z-30">
      <div>
        <div className="navbar rounded-b-xl bg-[#ffffff]   h-28">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box flex bg-[#ffffff]  w-64"
              >
                {navItems}
              </ul>
            </div>
            <Link className="" to="/">
              <img
                className="w-10 rounded-md h-10 ml-3 mr-3 "
                src="https://rb.gy/28n5ol"
                alt=""
              />
            </Link>
            <Link className="font-serif ml-6 text-2xl" to="/">
              Student Portal
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
