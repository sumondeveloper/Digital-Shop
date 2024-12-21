import Banner from "../../components/banner/Banner";
import AboutUs from "../about/AboutUs";
import AppSection from "../appsection/AppSection";
import Catagory from "../catagory/Catagory";
import CategoryProducts from "../catagory/CategoryProducts";
import LocationSprade from "../locationsprade/LocationSprade";
import Ragister from "../register/Ragister";
import Sponsord from "../sponsord/Sponsord";

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagory />
      <CategoryProducts />
      <Ragister />
      <LocationSprade />
      <AboutUs />
      <AppSection />
      <Sponsord />
    </div>
  );
};
export default Home;
