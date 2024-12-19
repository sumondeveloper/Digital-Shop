import { useState } from "react";
import productData from "../../products.json";
import { Link } from "react-router-dom";
import SelectedCatagory from "./SelectedCatagory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> of Products
  </h2>
);
const desc = "We have the largest collection of products ";
const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];
const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState();
  console.log(productData);
  //filtering func search funct
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
    const filterd = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterProducts(filterd);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCatagory select={"all"} />
            <input
              value={searchInput}
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filterProducts.map((product, index) => (
                <li key={index}>
                  <Link to={`/shop/$[product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Banner;
