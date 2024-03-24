import wave from '../assets/react.svg';
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Hero></Hero>
            <img src={wave} alt="" />
        </div>
    );
};

export default Home;