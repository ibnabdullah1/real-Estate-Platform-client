import { Helmet } from "react-helmet-async";
import AllAdvisementProperties from "../AllAdvisementProperties/AllAdvisementProperties";
import AllReviews from "../AllReviews/AllReviews";
import Banner from "../Banner/Banner";
import Feature from "../Feature/Feature";
import Footer from "../Footer/Footer";
import PaymentFeature from "../PaymentFeature/PaymentFeature";
const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Real Estate/home</title>
      </Helmet>
      <Banner />
      <AllAdvisementProperties />
      <Feature />
      <PaymentFeature />
      <AllReviews />
      <Footer />
    </div>
  );
};

export default Home;
