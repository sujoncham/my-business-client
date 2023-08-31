import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Features from "../components/Features";
import OurGalleries from "../components/OurGalleries";
import OurServices from "../components/OurServices";
import PricingCard from "../components/PricingCard";
import StatsReview from "../components/StatsReview";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <OurGalleries />
      <OurServices />
      <PricingCard />
      <Blog />
      <Testimonial />
      <StatsReview />
    </div>
  );
};

export default Home;
