import { useState } from "react";

function Product(props) {
  const { name, images } = props;
  const [currentImage, setCurrentImage] = useState(images[0].img);

  return (
    <article className="bg-sky-700 rounded-md m-2 border-sky-100 flex">
      <div className=" flex  flex-col  mx-3">
        <h1 className="text-md py-2 text-left">{name}</h1>
        <div className="grid grid-cols-3 gap-2 my-2 w-max">
          {images.map((img, index) => {
            return (
              <img
                src={img.img}
                key={index}
                loading="lazy"
                className="h-8 w-8 mx-1 rounded-sm"
                onClick={() => {
                  setCurrentImage(img.img);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="m-3">
        <img src={currentImage} className="h-48 w-48" />
      </div>
    </article>
  );
}

export default Product;
