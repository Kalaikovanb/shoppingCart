import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import "./CSS/ShopCategory.scss";
import dropdown from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const notice = () => {
    toast.info("Website is Under Development");
  };
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" />
      <div className="shopcategory-filter">
        <p className="shopcategory-filter-para">
          <span className="shopcategory-filter-span">Showing 1-12 </span>
          Out of 36 Products
        </p>
        <div className="shopcategory-btn" onClick={notice}>
          Sort by
          <img src={dropdown} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((data, index) => {
          if (props.category === data.category) {
            return (
              <Item
                key={index}
                id={data.id}
                category={data.category}
                image={data.image}
                old_price={data.old_price}
                name={data.name}
                new_price={data.new_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <Link to="/shoppingCart" style={{ textDecoration: "none" }}>
        <div className="shopcategory-explore-more">Explore more</div>
      </Link>
    </div>
  );
};

export default ShopCategory;
