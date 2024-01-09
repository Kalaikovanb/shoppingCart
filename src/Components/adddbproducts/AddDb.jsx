import React, { useEffect } from "react";
import axios from "axios";
import allProducts from "./all_product";

const InsertProducts = () => {
  useEffect(() => {
    const insertProductsToDatabase = async () => {
      try {
        const response = await axios.post("http://localhost/insert.php", {
          products: allProducts,
        });
        console.log("Products inserted:", response.data);
      } catch (error) {
        console.error("Error inserting products:", error);
      }
    };

    insertProductsToDatabase();
  }, []);

  return <div>Inserting Products...</div>;
};

export default InsertProducts;
