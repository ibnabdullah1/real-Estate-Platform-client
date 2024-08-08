import { Helmet } from "react-helmet-async";
import Brands from "../Home/Brands";
import Feeds from "../Home/Feeds";
import AboutUs from "./AboutUs";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Real Estate Community/About</title>
      </Helmet>
      <AboutUs />
      <Team />
      <Brands />
      <Feeds />
    </div>
  );
};

export default About;
