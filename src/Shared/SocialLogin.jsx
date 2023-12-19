import { useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle} from "react-icons/ai";
import useAuth from "../Hooks/UseAuth";

const SocialLogin = () => {
    const{googleSignIn}=useAuth()
    const navigate=useNavigate()
    const location =useLocation()
    const from=location.state?.from?.pathname || '/'

    const signInWithGoogle=()=>{
        googleSignIn()
        .then(()=>{
            navigate(from,{replace: true})
   
          })
    }
    return (
        <div className="text-center  mb-4">
        <div className="divider">OR</div>
        <button onClick={signInWithGoogle} className="btn btn-outline btn-primary  btn-sm ">
        <AiFillGoogleCircle className="text-xl"
        ></AiFillGoogleCircle> Sign In with Google
        </button>
      </div>
    );
};

export default SocialLogin;