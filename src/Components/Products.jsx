import React, { useState } from "react";
import { images } from "../data";
import Product from "./Product";

function Products() {
  const [typesOfProducts, setTypesOfProducts] = useState(images.length);
  const [products, setProducts] = useState(images);
  return (
    <section id="Products" className=" bg-sky-800 text-white mx-0 w-full ">
      <h1 className="text-3xl my-4"> Products</h1>
      <div className="last:mb-4 grid productsView">
        {products.map((product, index) => {
          return (
            <Product name={product.name} images={product.images} key={index} />
          );
        })}
      </div>
    </section>
  );
}

export default Products;
