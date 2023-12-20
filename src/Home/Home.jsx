import Ad from "./Ad";
import Banner from "./Banner";
import Featured from "./Featured";


const Home = () => {
    return (
        <div className="mx-auto">
            
            <Banner></Banner>
            <Featured></Featured>
            <Ad></Ad>
        </div>
    );
};

export default Home;