import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Features from "../components/Features";
import StatsReview from "../components/StatsReview";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Blog />
      <Testimonial />
      <StatsReview />
    </div>
  );
};

export default Home;
