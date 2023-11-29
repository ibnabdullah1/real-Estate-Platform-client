import AllAdvisementProperties from "../AllAdvisementProperties/AllAdvisementProperties";
import AllReviews from "../AllReviews/AllReviews";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <AllAdvisementProperties />
      <AllReviews />
    </div>
  );
};

export default Home;
