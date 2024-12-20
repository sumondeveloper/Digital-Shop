import Banner from "../../components/banner/Banner";
import Catagory from "../catagory/Catagory";
import CategoryProducts from "../catagory/CategoryProducts";
import Ragister from "../register/Ragister";

const Home = () => {
  return (
    <div>
      <Banner />
      <Catagory />
      <CategoryProducts />
      <Ragister />
    </div>
  );
};
export default Home;
