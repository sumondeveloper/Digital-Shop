import Banner from "../../components/banner/Banner";
import AboutUs from "../about/AboutUs";
import Catagory from "../catagory/Catagory";
import CategoryProducts from "../catagory/CategoryProducts";
import LocationSprade from "../locationsprade/LocationSprade";
import Ragister from "../register/Ragister";

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagory />
      <CategoryProducts />
      <Ragister />
      <LocationSprade />
      <AboutUs />
    </div>
  );
};
export default Home;
