import { Helmet } from "react-helmet-async";
import Reviews from "../../../components/Reviews/Reviews";
import Banner from "../Banner/Banner";
import Filters from "../Banner/Filters";
import Brands from "../Brands";
import Counter from "../Counter";
import Featured from "../Featured";
import Feeds from "../Feeds";
import Invest from "../Invest";
import NewsLetter from "../NewsLetter";
import Projects from "../Projects";
import Services from "../Services";
import Specialty from "../Specialty";
const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Real Estate/home</title>
      </Helmet>
      <Banner />
      <Filters />
      <Invest />
      <Specialty />
      <Services />
      {/* <AllAdvisementProperties /> */}
      <Featured />
      <Counter />
      <Projects />
      <Reviews />
      <Brands />
      <Feeds />
      <NewsLetter />
    </div>
  );
};

export default Home;
