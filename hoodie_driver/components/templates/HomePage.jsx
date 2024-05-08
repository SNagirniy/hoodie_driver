import Hero from "../modules/hero/Hero";
import Bestselers from "../modules/bestselers/Bestselers";
import Custom from "../modules/custom/Custom";
import Reviews from "../modules/reviews/Reviews";
import Features from "../modules/features/Features";
import History from "../modules/history/History";
import CallToAction from "../modules/call_to-action/CallToAction";
import Questions from "../modules/questions/Questions";

const HomePage =()=> {
    return (
        <>
        <Hero/>
        <Bestselers/>
        <Custom/>
        <Reviews/>
        <Features/>
        <History/>
        <CallToAction/>
        <Questions/>
        </>
    )
};

export default HomePage;